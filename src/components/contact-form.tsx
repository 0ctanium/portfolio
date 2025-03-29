import Script from "next/script";

import { cn } from "@/lib/utils";
import { useForm, ValidationError } from "@formspree/react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

export function ContactForm(props: { t: IntlMessages["Contact"] }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LcSQfMqAAAAAOFsgpS-OfuJBsINHXsLNTpdq_oQ">
      <Form {...props} />
    </GoogleReCaptchaProvider>
  );
}

export default ContactForm;

function Form({ t }: { t: IntlMessages["Contact"] }) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [state, handleSubmit] = useForm("mldjekje", {
    data: { "g-recaptcha-response": executeRecaptcha },
  });

  if (state.succeeded) {
    return (
      <p className="dark:text-white text-lg relative text-black font-semibold m-auto">
        {t.success}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col flex-1">
      <Script src="https://www.google.com/recaptcha/api.js" />

      <div className="flex flex-col gap-4 my-4">
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="email" className="uppercase text-sm">
            {t.email}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={t["email-placeholder"]}
            className="transition-colors duration-200 p-2 border-2 border-black dark:border-white uppercase bg-white dark:text-white text-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0)] focus:outline-none focus:shadow-[1px_1px_#6a7282,2px_2px_#6a7282] focus:border-gray-500 dark:bg-gray-950"
          />
          <ValidationError
            className="text-sm text-red-400"
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <label htmlFor="message" className="uppercase text-sm">
            {t.message}
          </label>
          <textarea
            id="message"
            name="message"
            className="resize-none h-30 transition-colors duration-200 p-2 border-2 border-black dark:border-white bg-white dark:bg-gray-950 dark:text-white text-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0)] focus:outline-none focus:shadow-[1px_1px_#6a7282,2px_2px_#6a7282] focus:border-gray-500"
          />
          <ValidationError
            className="text-sm text-red-400"
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="mx-auto mt-auto">
        <button
          type="submit"
          disabled={state.submitting}
          className={cn(
            "px-10 py-1.5 border-2 border-black dark:border-white uppercase bg-white dark:bg-black dark:text-white text-black transition-colors duration-200 text-sm",
            "shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0)] active:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0)]",
            "dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255)] active:dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255)]",
            "active:mt-[2px] active:ml-[2px]"
          )}
        >
          {t.submit}
        </button>
      </div>
    </form>
  );
}
