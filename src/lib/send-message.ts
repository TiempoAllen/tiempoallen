export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function sendMessage(data: ContactFormData): Promise<Response> {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const text = await res.text(); // get raw response
  console.log("Server response:", res.status, text);

  return res;
}
