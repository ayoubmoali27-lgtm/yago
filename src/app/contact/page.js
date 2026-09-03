"use client";

import { useState } from "react";
import Navbar from "../components/NavBar";
import Contact from "../components/Contact";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FFF8D9]">
      <Navbar />

      <section className="relative px-5 pt-36 pb-20 sm:px-8 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-[#FFD923] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black">
              Contactez-nous
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
              Restons en contact
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-black/70">
              Une question sur nos produits, un partenariat ou une suggestion ? Notre équipe est à votre écoute.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            {/* Contact Details */}
            <div className="rounded-3xl bg-[#FFD923] p-8 text-black shadow-lg lg:col-span-2">
              <h2 className="text-2xl font-bold">Laiterie Soummam</h2>
              <p className="mt-3 text-sm leading-relaxed text-black/80">
                Toujours plus proche de vous pour vous offrir le meilleur de nos produits laitiers frais et savoureux.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-black/60">Adresse</h3>
                  <p className="mt-1 text-sm font-medium">Zone d'activité Taharacht, Akbou, Béjaïa, Algérie</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-black/60">Téléphone</h3>
                  <p className="mt-1 text-sm font-medium">(+213) 34 35 22 22</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-black/60">Email</h3>
                  <p className="mt-1 text-sm font-medium">contact@soummam-dz.com</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-black/60">Horaires</h3>
                  <p className="mt-1 text-sm font-medium">Dimanche - Jeudi : 08h00 - 17h00</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl bg-white p-8 shadow-xl lg:col-span-3">
              {submitted ? (
                <div className="flex h-full min-h-[350px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD923] text-3xl font-bold text-black">
                    ✓
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-black">Message envoyé !</h3>
                  <p className="mt-2 text-sm text-black/70">
                    Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 rounded-full bg-[#FFD923] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#f3cb00]"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-black/70">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      className="w-full rounded-xl border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-[#FFD923] focus:bg-white"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-black/70">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="exemple@domaine.com"
                      className="w-full rounded-xl border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-[#FFD923] focus:bg-white"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-black/70">
                      Sujet
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Objet de votre message"
                      className="w-full rounded-xl border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-[#FFD923] focus:bg-white"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-black/70">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Écrivez votre message ici..."
                      className="w-full rounded-xl border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-[#FFD923] focus:bg-white"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#FFD923] py-3.5 text-sm font-bold text-black shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#f3cb00] hover:shadow-lg"
                  >
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}

