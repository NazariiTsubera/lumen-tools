"use client";

import { useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "error" | "success";

export default function OptInForm({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();

    if (!EMAIL_PATTERN.test(value)) {
      setStatus("error");
      return;
    }

    // MVP: no backend yet. A Supabase insert drops in here later.
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className={`optInSuccess optInSuccess--${tone}`} role="status">
        <span className="optInSuccessMark" aria-hidden="true">
          +
        </span>
        <p>You&apos;re on the list. We&apos;ll be in touch before launch.</p>
      </div>
    );
  }

  return (
    <form className={`optInForm optInForm--${tone}`} onSubmit={handleSubmit} noValidate>
      <div className="optInField">
        <input
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@company.com"
          aria-label="Email address"
          aria-invalid={status === "error"}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") setStatus("idle");
          }}
        />
        <button type="submit">Get early access</button>
      </div>
      {status === "error" ? (
        <p className="optInError" role="alert">
          Enter a valid email address.
        </p>
      ) : (
        <p className="optInHint">No spam. One note when we open the doors.</p>
      )}
    </form>
  );
}
