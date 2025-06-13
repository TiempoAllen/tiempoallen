import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { SOCIALS_DATA } from "@/model/socials";
import Link from "next/link";
import Image from "next/image";
import { robotoMono, text_variant } from "@/lib/utils";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ContactFormState, handleContactForm } from "@/app/actions/contact";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import { useActionState, useEffect, useState, useTransition } from "react";

const Footer = () => {
  const [state, formAction] = useActionState<ContactFormState | null, FormData>(
    async (_prevState: ContactFormState | null, formData: FormData) => {
      return await handleContactForm(_prevState, formData);
    },
    null
  );

  const [showAlert, setShowAlert] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (state?.message) {
      setShowAlert(true);

      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [state]);
  return (
    <footer className="w-full py-12">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-28 px-4 sm:px-8 leading-tight tracking-tighter">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-14 w-full lg:w-auto px-8">
          <motion.div
            variants={text_variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="flex flex-col items-start justify-start gap-4"
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              Let&apos;s work together on <br /> your next project
            </h1>
            <p className="text-sm sm:text-base">
              Send me an email or message me — I’d love to help!
            </p>
          </motion.div>

          <motion.div
            variants={text_variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="flex flex-col items-start justify-start gap-4"
          >
            <h1
              className={`${robotoMono.className} text-xl md:text-2xl font-bold`}
            >
              ALLEN TIEMPO
            </h1>
            <div className="flex items-center justify-start gap-4">
              {SOCIALS_DATA.map((social) => (
                <Link key={social.id} href={social.url} target="_blank">
                  <Image
                    src={`socials/${social.icon}.svg`}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="hover:scale-110 transition-transform duration-200"
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column (Form) */}
        <div className="flex flex-col items-start justify-start gap-2 w-full max-w-md">
          <h1
            className={`${robotoMono.className} text-2xl md:text-3xl font-bold mb-2 relative overflow-hidden z-0 before:content-[''] before:absolute before:top-[65%] before:left-0 before:w-full before:h-[15%] before:bg-[#FF0080] before:-z-10`}
          >
            message me
          </h1>

          {showAlert && state?.message && (
            <div className="fixed bottom-4 right-4 z-50 animate-in fade-in slide-in-from-bottom-1 duration-300">
              <Alert
                variant={state.success ? "default" : "destructive"}
                className="w-[300px] shadow-lg"
              >
                {state.success ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <AlertTriangle className="h-4 w-4" />
                )}
                <AlertTitle>{state.success ? "Success" : "Error"}</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            </div>
          )}

          <form
            className="flex flex-col items-end justify-end gap-3 w-full"
            action={(formData) => {
              startTransition(() => formAction(formData));
            }}
          >
            <Input type="text" name="name" placeholder="Name" required />
            <Input type="text" name="email" placeholder="Email" required />
            <Textarea
              placeholder="Message"
              name="message"
              className="min-h-[150px]"
              required
            />
            <Button type="submit" className="border" disabled={isPending}>
              {isPending ? (
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                </motion.div>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
