"use client";
import Image from "next/image";
import React, { useState } from "react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleFormSubmit(ev) {
    ev.preventDefault();
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Cadastro</h1>

      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit">Cadastrar</button>
        <div className="my-4 text-center text-gray-500">
          ou utilize outro método.
        </div>
        <button className="flex gap-4 justify-center">
          <Image src="/google.png" alt="google-login" width={24} height={24} />
          Continue with google
        </button>
      </form>
    </section>
  );
}

export default RegisterPage;
