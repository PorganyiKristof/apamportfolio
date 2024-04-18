"use client";
import React from "react";
import EmailForm from "./EmailForm";

export default function EmailSection() {
  return (
    <section
      id="contact"
      className="text-white w-full py-16 grid md:grid-cols-2 px-4 lg:px-24 mt-4 md:mt-24 gap-4 content-center relative bg-gradient-to-br from-primary-700 to-secondary-950"
    >
      <div className="flex flex-col justify-center">
        <h5 className="text-xl font-bold text-white my-2">
          Lépj velem kapcsolatba!
        </h5>
        <p className="text-white mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quam
          tempora omnis. Iste deserunt adipisci iure consequuntur qui nisi,
          culpa error assumenda nesciunt placeat in, beatae magni rem.
          Perspiciatis libero accusantium ducimus, harum magni deserunt.
        </p>
      </div>

      <div>
        <EmailForm />
      </div>
    </section>
  );
}
