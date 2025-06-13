"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function handleContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const parsed = ContactFormSchema.safeParse({ name, email, message });

  if (!parsed.success) {
    return { success: false, message: "Validation failed." };
  }

  const {
    name: senderName,
    email: senderEmail,
    message: senderMessage,
  } = parsed.data;

  try {
    await resend.emails.send({
      from: "Allen Tiempo <onboarding@resend.dev>",
      to: ["tiempoallen@gmail.com"],
      subject: `New message from ${senderName}`,
      replyTo: senderEmail,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${senderName}</p>
        <p><strong>Email:</strong> ${senderEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${senderMessage}</p>
      `,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to send message. Try again later.",
    };
  }
}
