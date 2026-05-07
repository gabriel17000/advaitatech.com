import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { CheckCircle, Mail, Phone, User } from 'lucide-react';

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Por favor preencha seu nome, email e mensagem antes de enviar.');
      return;
    }
    setSubmitted(true);
    setError('');
    setForm(initialForm);
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-card/75 p-8 shadow-glow">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-orange">Contato</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Converse com nossa equipe de especialistas.</h2>
            <p className="mt-4 max-w-xl text-sm text-gray-300">
              Este formulário é funcional no protótipo e permite demonstrar a experiência do usuário antes da integração real.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-[#111115] p-6">
            <div className="flex items-center gap-3 text-orange">
              <Mail size={20} />
              <span>Email</span>
            </div>
            <p className="text-sm text-gray-300">contato@advaitatech.com</p>
            <div className="flex items-center gap-3 text-orange">
              <Phone size={20} />
              <span>Fone</span>
            </div>
            <p className="text-sm text-gray-300">+55 (11) 4000-0000</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-gray-300">
              Nome
              <div className="flex items-center gap-2 rounded-3xl border border-white/10 bg-black/70 px-4 py-3">
                <User size={18} className="text-orange" />
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                />
              </div>
            </label>
            <label className="space-y-2 text-sm text-gray-300">
              Empresa
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Sua empresa"
                className="w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none placeholder:text-gray-500"
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-gray-300">
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none placeholder:text-gray-500"
              />
            </label>
            <label className="space-y-2 text-sm text-gray-300">
              Telefone
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className="w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none placeholder:text-gray-500"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm text-gray-300">
            Mensagem
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Conte-nos sobre seu projeto..."
              className="w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-4 text-white outline-none placeholder:text-gray-500"
            />
          </label>

          {error && <p className="rounded-3xl border border-orange/20 bg-orange/10 px-4 py-3 text-sm text-orange">{error}</p>}
          {submitted && (
            <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} />
                Mensagem registrada no protótipo. Em produção, este formulário poderá ser integrado ao email ou CRM.
              </div>
            </div>
          )}

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-orange px-6 py-4 text-sm font-semibold text-black transition hover:bg-orange-light"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
