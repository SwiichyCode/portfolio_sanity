"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "../../_components/typography/Title";
import Paragraph from "../../_components/typography/Paragraph";
import Input from "../../_components/common/Input";
import TextArea from "../../_components/common/TextArea";
import Button from "../../_components/common/Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current as HTMLFormElement,
        userId
      );

      if (result.status === 200) {
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      setError(true);
    } finally {
      form.current?.reset();
    }
  };

  return (
    <section
      id="contact"
      className=" text-center pt-14 pb-20 px-4 md:w-full md:max-w-[445px] lg:max-w-[1111px] lg:flex lg:justify-between lg:-mx-8"
    >
      <div className="mb-12 lg:w-full lg:max-w-[445px] lg:text-left">
        <Title
          text="Contact"
          as="h2"
          className="mb-5 lg:w-full lg:max-w-[445px] lg:text-left"
        />
        <Paragraph
          text="I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible."
        />
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-8 lg:max-w-[445px]"
      >
        <Input placeholder="name" type="text" name="to_name" required />
        <Input placeholder="email" type="email" name="from_name" required />
        <TextArea placeholder="message" name="message" required />
        <div className="ml-auto">
          <Button as="button" text="envoyer" type="submit" />
        </div>

        {submitted && (
          <Paragraph
            text="Votre message a bien été envoyé."
            className="text-primary-green"
          />
        )}
        {error && (
          <Paragraph
            text="Une erreur s'est produite, veuillez réessayer."
            className="text-primary-red"
          />
        )}
      </form>
    </section>
  );
}
