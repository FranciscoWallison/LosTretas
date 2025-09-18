"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Swords, Shield, Users, Calendar, MapPin, Mail, Crown, Gamepad2 } from "lucide-react";
import Image from "next/image";

// =====================
// CONFIGURAÇÕES RÁPIDAS
// =====================
// Troque estes valores pelo do seu clã.
const CLAN = {
  name: "LosTretas",
  tagline: "MMO RPG Clan — PvE • PvP • Raids",
  colors: {
    primary: "",
    glow: "shadow-[0_0_40px_rgba(99,102,241,0.35)]",
  },
  discordInvite: "https://discord.gg/SEU-CONVITE",
  heroImage:
    "./lostretas.png",
  logo: "./lostretas.png",
};

const SAMPLE_EVENTS = [
  {
    title: "Raid: Cidadela Abissal",
    date: "Sáb, 20:30",
    req: "GS 580+",
    location: "Sala 3 / Discord",
  },
  { title: "GvG de Território", date: "Dom, 18:00", req: "Time A/B", location: "Campo Norte" },
  { title: "Dungeon Mítica", date: "Qua, 21:00", req: "GS 550+", location: "Instância Rota 2" },
];

const SAMPLE_ROSTER = [
  { name: "Ayla", role: "Líder", cls: "Paladina", ilvl: 85 },
  { name: "Kael", role: "Tank", cls: "Guardião", ilvl: 85 },
  { name: "Mira", role: "Healer", cls: "Clériga", ilvl: 85 },
  { name: "Riven", role: "DPS", cls: "Arqueiro", ilvl: 85 },
  { name: "Nova", role: "DPS", cls: "Maga", ilvl: 85 },
  { name: "Drax", role: "Suporte", cls: "Bardo", ilvl: 85 },
];

export default function ClanLandingPage() {
  const [form, setForm] = useState({ nickname: "", classe: "", role: "", mensagem: "" });
  const topIlvl = useMemo(() => Math.max(...SAMPLE_ROSTER.map((m) => m.ilvl)), []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Formulário enviado!\\n\\nNick: ${form.nickname}\\nClasse: ${form.classe}\\nFunção: ${form.role}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Ícone/Logo pequeno */}
            <img
              src={CLAN.logo}
              alt="logo"
              className="h-9 w-9 md:h-10 md:w-10 rounded-xl object-cover ring-1 ring-zinc-800"
            />
            <div>
              <h1 className="text-xl font-bold tracking-wide">{CLAN.name}</h1>
              <p className="text-xs text-zinc-400">{CLAN.tagline}</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#sobre" className="hover:text-white text-zinc-300">Sobre</a>
            <a href="#eventos" className="hover:text-white text-zinc-300">Eventos</a>
            <a href="#roster" className="hover:text-white text-zinc-300">Roster</a>
            <a href="#recrutamento" className="hover:text-white text-zinc-300">Recrutamento</a>
          </nav>

          <Button asChild size="sm" className="rounded-2xl">
            <a href={CLAN.discordInvite} target="_blank" rel="noreferrer">Entrar no Discord</a>
          </Button>
        </div>
      </header>

      {/* HERO + MÉTRICAS com vídeo de fundo */}
      <section className="relative overflow-hidden">
        {/* vídeo de fundo */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <video
            src="/hero.mp4"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/lostretas.png"
            aria-hidden="true"
          />
          {/* overlay opcional (deixa o texto legível) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* HERO (conteúdo) */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mt-4">
              <Image
                src="/textoLogo.png"
                alt="LosTretas"
                width={800}
                height={220}
                priority
                className="mx-auto w-[260px] md:w-[520px] lg:w-[680px] h-auto drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]"
              />
            </div>
            <p className="mt-4 text-zinc-200 max-w-xl mx-auto">
              Raids semanais, disciplina em GvG e time dedicado a progressão. Se você joga sério e respeita o time, aqui é seu lugar.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild><a href="#recrutamento">Quero entrar</a></Button>
              <Button size="lg" variant="secondary" asChild><a href="#eventos">Ver agenda</a></Button>
            </div>
          </div>
        </div>

        {/* MÉTRICAS (ainda dentro do mesmo section, sobre o vídeo) */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-zinc-700/70 bg-zinc-900/70 text-zinc-100 backdrop-blur">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">Membros</CardTitle>
                <Users className="h-5 w-5 text-zinc-200" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">{SAMPLE_ROSTER.length}</div>
                <p className="text-xs text-zinc-200">Ativos na última semana</p>
              </CardContent>
            </Card>

            <Card className="border-zinc-700/70 bg-zinc-900/70 text-zinc-100 backdrop-blur">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">Item Level Máximo</CardTitle>
                <Shield className="h-5 w-5 text-zinc-200" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">{topIlvl}</div>
                <p className="text-xs text-zinc-200">Meta do clã: 600+</p>
              </CardContent>
            </Card>

            <Card className="border-zinc-700/70 bg-zinc-900/70 text-zinc-100 backdrop-blur">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold">Atividades semanais</CardTitle>
                <Calendar className="h-5 w-5 text-zinc-200" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">{SAMPLE_EVENTS.length}</div>
                <p className="text-xs text-zinc-200">Organizadas e pontuais</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <Separator className="bg-zinc-800" />

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold">Sobre o clã</h3>
            <p className="mt-2 text-zinc-300">
              Somos um clã focado em performance com ambiente maduro. Priorizamos comunicação clara, preparo antes das atividades e espírito de equipe.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2"><Swords className="h-4 w-4" /> PvE endgame e progressão</li>
              <li className="flex items-center gap-2"><Shield className="h-4 w-4" /> PvP organizado e GvG</li>
              <li className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Agenda fixa e pontualidade</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> Feedback direto e sem drama</li>
            </ul>
          </div>
          <Card className="border-zinc-800 bg-zinc-900/60">
            <CardHeader>
              <CardTitle className="text-base">Requisitos</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-zinc-300 space-y-2">
              <div><Badge className="mr-2">18+</Badge> Maturidade</div>
              <div><Badge className="mr-2">Mic</Badge> Presença no Discord</div>
              <div><Badge className="mr-2">GS 570+</Badge> Ajustável por role</div>
              <div><Badge className="mr-2">Addon</Badge> DBM/Rotations atualizados</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="bg-zinc-800" />

      {/* EVENTOS */}
      <section id="eventos" className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Próximos eventos</h3>
          <Button asChild variant="outline" className="border-zinc-700">
            <a href={CLAN.discordInvite} target="_blank" rel="noreferrer">Confirmar presença</a>
          </Button>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {SAMPLE_EVENTS.map((ev, i) => (
            <Card key={i} className="border-zinc-800 bg-zinc-900/60">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{ev.title}</span>
                  <Badge variant="secondary">{ev.req}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-300 space-y-2">
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {ev.date}</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {ev.location}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-zinc-800" />

      {/* ROSTER */}
      <section id="roster" className="mx-auto max-w-7xl px-4 py-12">
        <h3 className="text-2xl font-bold">Roster principal</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SAMPLE_ROSTER.map((m, i) => (
            <Card key={i} className="border-zinc-800 bg-zinc-900/60">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-base">
                  <span className="flex items-center gap-2">
                    <Crown className={`h-4 w-4 ${m.role === "Líder" ? "text-yellow-400" : "text-zinc-500"}`} />
                    {m.name}
                  </span>
                  <Badge>{m.role}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-300">
                <div className="flex items-center justify-between">
                  <span>{m.cls}</span>
                  <span className="font-semibold">i{m.ilvl}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-zinc-800" />

      {/* RECRUTAMENTO */}
      <section id="recrutamento" className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold">Recrutamento aberto</h3>
            <p className="mt-2 text-zinc-300">Preencha e falamos com você no Discord.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-zinc-300">Nickname</label>
                <Input
                  required
                  value={form.nickname}
                  onChange={(e) => setForm({ ...form, nickname: e.target.value })}
                  placeholder="Seu nick no jogo"
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-zinc-300">Classe</label>
                  <Input
                    required
                    value={form.classe}
                    onChange={(e) => setForm({ ...form, classe: e.target.value })}
                    placeholder="Ex.: Maga, Paladino"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm text-zinc-300">Função</label>
                  <Input
                    required
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    placeholder="Tank / Healer / DPS / Suporte"
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-zinc-300">Mensagem (opcional)</label>
                <Textarea
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  placeholder="Fala um pouco da sua experiência e horários"
                  className="mt-1"
                />
              </div>
              <div className="flex items-center gap-3">
                <Button type="submit" className="rounded-2xl">Enviar</Button>
                <Button variant="secondary" asChild>
                  <a href={CLAN.discordInvite} target="_blank" rel="noreferrer">Falar no Discord</a>
                </Button>
              </div>
            </form>
          </div>

          <Card className="border-zinc-800 bg-zinc-900/60">
            <CardHeader>
              <CardTitle>Como jogamos</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-zinc-300 space-y-3">
              <p>
                • Presença mínima: 2 raids/semana.
                Consumíveis obrigatórios nas progressões.
                Logs analisados semanalmente.
                Respeito acima de tudo.
              </p>
              <p>
                Use o botão abaixo para copiar o link do nosso Discord e convidar amigos.
              </p>
              <CopyDiscord invite={CLAN.discordInvite} />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Swords className="h-4 w-4" />
            <span>{CLAN.name} © {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#eventos" className="hover:text-white">Eventos</a>
            <a href="#roster" className="hover:text-white">Roster</a>
            <a href="#recrutamento" className="hover:text-white">Recrutamento</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CopyDiscord({ invite }: { invite: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(invite);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="flex items-center gap-3">
      <Input readOnly value={invite} className="bg-zinc-950 border-zinc-800" />
      <Button onClick={copy} variant="outline" className="border-zinc-700">
        {copied ? "Copiado!" : "Copiar"}
      </Button>
    </div>
  );
}
