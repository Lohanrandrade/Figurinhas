/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronDown, 
  Truck, 
  ShieldCheck, 
  Award, 
  Zap, 
  CreditCard,
  Star,
  Clock,
  Package,
  Trophy,
  History,
  Users,
  Search,
  Menu,
  Shield,
  Flame,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Constants ---
const PRIMARY_CTA = "ESCOLHER MEU KIT AGORA";

const packages = [
  {
    id: 1,
    name: "Kit Iniciante",
    packs: "3 PACOTES",
    bonus: "+ 0 EXTRA",
    price: "R$ 19,90",
    desc: "A escolha certa para quem quer sentir a emoção inicial da maior Copa do Mundo de todos os tempos.",
    popular: false,
    checkoutUrl: "https://checkoutseguro.ru/checkout/cmo950qof30ag1royw3fpxcg9?offer=B1BD4CG"
  },
  {
    id: 2,
    name: "Kit Campeão",
    packs: "5 PACOTES",
    bonus: "+ 0 EXTRA",
    price: "R$ 29,90",
    desc: "O kit mais buscado pelos colecionadores de elite. Garantia de cartas raras e avanço rápido no álbum.",
    popular: true,
    checkoutUrl: "https://checkoutseguro.ru/checkout/cmo96fj1m31o21roy8chqqjqz?offer=uex115o"
  },
  {
    id: 3,
    name: "Kit Colecionador VIP",
    packs: "10 PACOTES",
    bonus: "+ 3 PACOTES GRÁTIS",
    price: "R$ 39,90",
    desc: "A experiência definitiva. O maior volume de pacotes para garantir que você não perca nenhuma lendária.",
    popular: false,
    checkoutUrl: "https://checkoutseguro.ru/checkout/cmo96i8f631qj1yoyyx2lmijd?offer=d3uzgu7"
  }
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-soccer-yellow rounded-sm flex items-center justify-center font-black text-black text-lg md:text-xl">U</div>
        <div>
          <h1 className="text-[10px] font-bold uppercase tracking-widest text-soccer-yellow leading-none">Universo das</h1>
          <p className="text-xs font-black text-white italic uppercase tracking-tighter leading-none">Figurinhas</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase text-gray-400 tracking-widest">
        <a href="#kits" className="hover:text-soccer-white transition-colors">Kits</a>
        <a href="#proof" className="hover:text-soccer-white transition-colors">Depoimentos</a>
        <a href="#faq" className="hover:text-soccer-white transition-colors">Suporte</a>
      </div>
      <button 
        onClick={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-soccer-yellow text-soccer-black font-black px-4 md:px-6 py-2 rounded-sm text-xs md:text-sm uppercase italic tracking-tighter gold-glow"
      >
        PRÉ-VENDA
      </button>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-black">
      {/* Background Glows and Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] md:w-[50%] h-[50%] rounded-full bg-soccer-green/20 blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[40%] rounded-full bg-soccer-yellow/10 blur-[60px] md:blur-[100px]" />
        <div className="absolute inset-0 bg-vibrant-grid opacity-50" />
        <div className="absolute inset-0 bg-stadium-gradient opacity-90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center pt-6"
        >
          <div className="inline-block px-3 py-1 bg-soccer-yellow text-black text-[10px] md:text-xs font-black uppercase skew-label mb-4 md:mb-6">
            Oferta Exclusiva de Lançamento
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-soccer-white leading-[0.9] mb-4 uppercase italic tracking-tighter drop-shadow-2xl">
            PRÉ-VENDA <br/>
            <span className="text-transparent text-stroke-yellow drop-shadow-[0_0_15px_rgba(254,221,0,0.5)]">OFICIAL!</span>
          </h1>

          {/* Sticker Packs Image - Repositioned between titles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: [1, 1.05, 1],
              transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mt-2 mb-10 max-w-[300px] sm:max-w-[400px] mx-auto cursor-pointer"
          >
            <div className="relative z-10 transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -inset-10 bg-soccer-yellow/5 rounded-full blur-3xl opacity-50" />
              <img 
                src="https://i.imgur.com/4M587xs.png" 
                alt="World Cup 2026 Official Packs" 
                className="w-full drop-shadow-[0_0_40px_rgba(254,221,0,0.3)] relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mt-8">
            <button 
              onClick={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-soccer-yellow text-soccer-black font-black text-xl md:text-2xl px-10 md:px-14 py-4 md:py-6 rounded-sm hover:scale-105 transition-all transform gold-glow w-full sm:w-auto uppercase italic tracking-tighter"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {PRIMARY_CTA} 
                <span className="text-2xl md:text-3xl">➔</span>
              </span>
            </button>
            <div className="flex flex-col items-center sm:items-start mt-4 sm:mt-0">
              <div className="flex -space-x-2 mb-1">
                {[
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                ].map((url, i) => (
                  <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-black overflow-hidden bg-gray-800">
                    <img 
                      src={url} 
                      alt="Colecionador" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[9px] md:text-[10px] uppercase font-bold text-white/60 tracking-widest">
                <span className="text-white font-black">+5.800</span> garantiram hoje
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => (
  <div className="bg-soccer-yellow py-6 overflow-hidden border-y-4 border-black">
    <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
      {[1,2,3,4,5,6,7,8].map((i) => (
        <div key={i} className="flex items-center mx-10 text-soccer-black font-black text-xl md:text-2xl italic uppercase tracking-tighter">
          <Star className="w-6 h-6 mr-3 fill-current" />
          Coleção Oficial 2026
        </div>
      ))}
    </div>
  </div>
);

const PricingPackages = () => {
  return (
    <section id="kits" className="py-16 md:py-32 bg-black scroll-mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block px-4 py-1 bg-soccer-green text-white text-[10px] md:text-xs font-black uppercase mb-4 tracking-[0.2em] skew-label">
            Escolha seu Nível
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-8xl text-soccer-white leading-none uppercase italic tracking-tighter">
            COMBOS DE <br/> <span className="text-transparent text-stroke-yellow drop-shadow-[0_0_15px_rgba(254,221,0,0.3)]">VANTAGEM</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-6 md:p-8 rounded-[2rem] border-2 transition-all duration-500 ${
                pkg.popular 
                  ? 'bg-gradient-to-br from-zinc-900 via-zinc-950 to-soccer-green/20 border-soccer-green shadow-[0_0_50px_rgba(34,197,94,0.15)] md:scale-105 z-10' 
                  : 'bg-zinc-900/50 border-white/5 hover:border-white/10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-soccer-green text-white font-black px-5 py-1.5 rounded-full text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg">
                  <Flame className="w-3 h-3 fill-current" /> MAIS ESCOLHIDO
                </div>
              )}

              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-black text-white/50 mb-1 uppercase tracking-widest">{pkg.name}</h3>
                <div className="flex flex-col">
                  <span className="text-3xl md:text-5xl font-black text-soccer-yellow italic leading-none truncate">{pkg.packs}</span>
                  <span className="text-sm md:text-lg font-black text-soccer-green mt-1 italic uppercase tracking-tight">{pkg.bonus}</span>
                </div>
              </div>

              <p className="text-gray-400 text-xs md:text-sm mb-8 leading-relaxed opacity-80">{pkg.desc}</p>

              <div className="mt-auto space-y-6">
                <div>
                  <p className="text-gray-600 text-[10px] md:text-xs uppercase font-bold line-through tracking-wider">
                    De R$ {(parseFloat(pkg.price.replace('R$ ', '').replace(',', '.')) * 2).toFixed(2).replace('.', ',')}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-soccer-white text-4xl md:text-6xl font-black italic">{pkg.price}</span>
                    <span className="text-gray-500 font-bold uppercase text-[10px]">à vista</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Zap className="w-4 h-4 text-soccer-yellow" />
                    <p className="text-soccer-white font-black text-[10px] md:text-xs uppercase italic tracking-tighter">Pagamento via PIX</p>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    if (pkg.checkoutUrl) {
                      window.open(pkg.checkoutUrl, '_blank');
                    } else {
                      window.alert(`Redirecionando para checkout PIX do ${pkg.name}...`);
                    }
                  }}
                  className={`w-full py-4 md:py-6 rounded-2xl font-black text-lg md:text-2xl uppercase italic tracking-tighter transition-all transform hover:brightness-110 active:scale-95 group overflow-hidden relative ${
                    pkg.popular 
                      ? 'bg-soccer-yellow text-soccer-black gold-glow' 
                      : 'bg-white text-black hover:bg-soccer-yellow'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    GERAR PIX AGORA
                    <ChevronDown className="w-6 h-6 -rotate-90 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {pkg.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  )}
                </button>
                
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center gap-2 text-[9px] md:text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">
                    <ShieldCheck className="w-3 h-3 text-soccer-green" />
                    Liberação Imediata via PIX
                  </div>
                  <div className="flex gap-2 opacity-60">
                    <img src="https://img.icons8.com/color/48/000000/pix.png" className="h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProofGallery = () => {
  const images = [
    "https://i.imgur.com/ucoTuDI.png",
    "https://i.imgur.com/Y2dydFS.png",
    "https://i.imgur.com/9US71UK.png"
  ];

  // Double the images for a seamless loop
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <section id="proof" className="py-20 md:py-32 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-4 py-1 bg-soccer-yellow text-black text-[10px] md:text-xs font-black uppercase mb-4 tracking-[0.2em] skew-label">
            Satisfação Garantida
          </div>
          <h2 className="font-display text-4xl md:text-7xl text-soccer-white uppercase italic tracking-tighter mb-4">
            QUEM COMPROU, <br/> <span className="text-transparent text-stroke-yellow drop-shadow-[0_0_15px_rgba(254,221,0,0.3)]">APROVOU!</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Milhares de colecionadores já garantiram seus pacotes na nossa pré-venda exclusiva. Veja o que eles estão dizendo:
          </p>
        </div>
        
        <div className="relative">
          {/* Automatic Infinite Scroll Marquee */}
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex gap-4 md:gap-8 pr-4 md:pr-8"
              animate={{ 
                x: [0, -1200] 
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              whileHover={{ transition: { duration: 60 } }} // Slow down on hover
            >
              {duplicatedImages.map((url, i) => (
                <div 
                  key={i}
                  className="flex-none w-[280px] sm:w-[400px]"
                >
                  <div className="bg-zinc-900 rounded-3xl p-2 border border-white/5 hover:border-soccer-yellow/30 transition-all group overflow-hidden shadow-2xl w-full h-full flex flex-col">
                    <img 
                      src={url} 
                      alt={`Prova Social ${i + 1}`} 
                      className="w-full h-auto rounded-2xl transition-all duration-500 transform group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                    {/* Decorative Elements */}
                    <div className="p-4 mt-auto flex items-center justify-between">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 text-soccer-yellow fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-black text-soccer-green uppercase italic tracking-tighter">Compra Verificada</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Fade Gradients for edges */}
          <div className="absolute top-0 left-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const [purchase, setPurchase] = useState({ name: "Marcos S.", city: "São Paulo", time: "2 min" });
  const names = ["Marcos S.", "Felipe R.", "Ana K.", "João P.", "Carla M.", "Ronaldo D."];
  const cities = ["São Paulo", "Rio de Janeiro", "Curitiba", "Belo Horizonte", "Porto Alegre", "Brasília"];

  useEffect(() => {
    const interval = setInterval(() => {
      setPurchase({
        name: names[Math.floor(Math.random() * names.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        time: Math.floor(Math.random() * 8 + 1) + " min"
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={purchase.name}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        className="fixed bottom-24 lg:bottom-10 left-4 z-40 bg-zinc-900 border border-white/10 text-white p-3 rounded-2xl shadow-2xl flex items-center gap-3 w-64 pointer-events-none"
      >
        <div className="w-10 h-10 bg-soccer-green rounded-full flex items-center justify-center text-white font-black shrink-0">
          {purchase.name[0]}
        </div>
        <div>
          <p className="text-xs font-bold leading-tight"><span className="text-soccer-green">{purchase.name}</span> de {purchase.city}</p>
          <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Comprou 10 pacotes há {purchase.time}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-soccer-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-bold text-soccer-white group-hover:text-soccer-yellow transition-colors">{question}</span>
        <ChevronDown className={`w-6 h-6 text-soccer-yellow transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 text-lg leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => (
  <section id="faq" className="py-16 md:py-24 bg-zinc-950">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-10 md:mb-16">
        <h3 className="text-[10px] md:text-xs font-black uppercase text-soccer-yellow tracking-[0.3em] mb-3 md:mb-4">Central de Suporte</h3>
        <h2 className="font-display text-4xl md:text-6xl text-soccer-white uppercase italic">DÚVIDAS FREQUENTES</h2>
        <p className="text-gray-400 text-sm md:text-base">Tudo o que você precisa saber sobre a pré-venda.</p>
      </div>
      <div className="space-y-3">
        <FAQItem 
          question="O PRODUTO É ORIGINAL E LACRADO?" 
          answer="Absolutamente. Todos os pacotes são originais, licenciados e entregues lacrados de fábrica com nota fiscal." 
        />
        <FAQItem 
          question="QUAL O PRAZO DE ENTREGA ESTIMADO?" 
          answer="As entregas começam a ser despachadas por ordem de compra a partir de Junho/2026. O rastreamento será enviado automaticamente via e-mail e WhatsApp." 
        />
        <FAQItem 
          question="A COMPRA É SEGURA?" 
          answer="Utilizamos criptografia de ponta a ponta e gateways de pagamento certificados. Seus dados estão 100% protegidos." 
        />
      </div>
    </div>
  </section>
);

const SecuritySection = () => (
  <section className="py-12 bg-soccer-white text-soccer-black">
    <div className="container mx-auto px-4 text-center">
       <div className="flex flex-wrap justify-center gap-12 items-center opacity-60">
          <div className="flex items-center gap-2 font-bold uppercase text-xs">
            <ShieldCheck className="w-8 h-8 text-soccer-green" />
            <span>Site Protegido<br/>SSL Secure</span>
          </div>
          <div className="flex items-center gap-2 font-bold uppercase text-xs">
            <Award className="w-8 h-8 text-soccer-green" />
            <span>Garantia de<br/>Originalidade</span>
          </div>
          <div className="flex items-center gap-2 font-bold uppercase text-xs">
            <Truck className="w-8 h-8 text-soccer-green" />
            <span>Transportadora<br/>Certificada</span>
          </div>
          <div className="flex items-center gap-2 font-bold uppercase text-xs">
            <Zap className="w-8 h-8 text-soccer-green" />
            <span>Pagamento<br/>Instantâneo via PIX</span>
          </div>
       </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="relative flex flex-col">
    <div className="bg-soccer-yellow text-black px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t-4 border-black">
      <div className="flex flex-wrap justify-center gap-8 text-[11px] font-black uppercase italic">
        <span>🏟️ Paixão Nacional</span>
        <span>⭐ Qualidade Premium</span>
        <span>⚽ O Sonho do Hexa</span>
      </div>
      <p className="text-[10px] font-bold opacity-70">© 2026 UNIVERSO DAS FIGURINHAS - PRE-VENDA OFICIAL</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <main className="font-sans selection:bg-soccer-yellow selection:text-soccer-black bg-black">
      <Navbar />
      <Hero />
      <TrustBar />
      <SocialProof />
      <PricingPackages />
      <SocialProofGallery />
      <FAQSection />
      <SecuritySection />
      
      {/* Final CTA Strip */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-soccer-green to-soccer-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              whileInView={{ scale: [0.9, 1.05, 1] }}
              className="inline-block mb-6 bg-soccer-yellow text-soccer-black px-4 md:px-6 py-2 rounded-full font-black text-xs md:text-base uppercase italic skew-label"
            >
              ÚLTIMAS UNIDADES DO LOTE 01
            </motion.div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-[8rem] text-soccer-white mb-6 md:mb-10 uppercase leading-[0.8] md:leading-none drop-shadow-2xl italic tracking-tighter">
              NÃO FIQUE DE <br className="md:hidden" /> FORA <br/>
              <span className="text-transparent text-stroke-yellow drop-shadow-[0_0_20px_rgba(254,221,0,0.4)]">DA HISTÓRIA!</span>
            </h2>
            <p className="text-lg md:text-2xl text-soccer-green font-black mb-8 md:mb-12 uppercase italic tracking-tight underline decoration-soccer-yellow underline-offset-8">Garanta sua coleção com desconto exclusivo do LOTE 01 agora mesmo.</p>
            <button 
              onClick={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-soccer-yellow text-soccer-black font-black text-2xl md:text-3xl px-12 md:px-20 py-6 md:py-8 rounded-sm hover:scale-110 transition-all transform gold-glow w-full max-w-xl mx-auto block uppercase italic tracking-tighter"
            >
              <span className="flex items-center justify-center gap-3">
                {PRIMARY_CTA}
                <span className="text-3xl md:text-4xl">➔</span>
              </span>
            </button>
        </div>
      </section>

      <Footer />

    </main>
  );
}
