"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login handler placeholder
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#FFF8D9] px-4 py-12 sm:px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="inline-block transition-transform hover:scale-105">
            <Image
              src="/assets/Soummam.png"
              alt="Soummam"
              width={120}
              height={45}
              priority
              className="mx-auto h-10 w-auto object-contain"
            />
          </Link>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-black sm:text-3xl">
            Bienvenue
          </h1>
          <p className="mt-2 text-xs text-black/60 sm:text-sm">
            Connectez-vous à votre espace personnel Soummam
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-black/75">
              Adresse Email ou Identifiant
            </label>
            <input
              type="email"
              required
              placeholder="nom@exemple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-[#FFD923] focus:bg-white"
            />
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-black/75">
                Mot de passe
              </label>
              <a
                href="#"
                className="text-xs font-semibold text-[#A28200] hover:underline"
              >
                Mot de passe oublié ?
              </a>
            </div>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-[#FFD923] focus:bg-white"
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 accent-[#FFD923] focus:ring-[#FFD923]"
            />
            <label
              htmlFor="remember-me"
              className="ml-2.5 block text-xs font-medium text-black/70"
            >
              Se souvenir de moi
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#FFD923] py-3.5 text-sm font-bold text-black shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#f3cb00] hover:shadow-lg"
          >
            Se connecter
          </button>
        </form>

        {/* Footer info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-black/60">
            Vous n'avez pas de compte ?{" "}
            <a href="#" className="font-bold text-[#A28200] hover:underline">
              Créer un compte
            </a>
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-black/50 transition-colors hover:text-black"
          >
            <span>←</span> Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}

