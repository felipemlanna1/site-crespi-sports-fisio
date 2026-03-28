import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Star, WhatsappLogo, Bone, PersonSimpleRun, Heartbeat, Leaf, Sparkle, FirstAidKit, Phone, MapPin } from '@phosphor-icons/react'
import './App.css'

const WA = 'https://wa.me/554832333000?text=Olá! Gostaria de agendar uma avaliação na Crespi Sports Fisio.'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

function Stars({ size = 14 }) {
  return <div style={{ display: 'flex', gap: 2 }}>{[0,1,2,3,4].map(i => <Star key={i} size={size} weight="fill" color="#EF4444" />)}</div>
}

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">Crespi <span>Sports Fisio</span></div>
      <a href={WA} target="_blank" rel="noopener noreferrer" className="nb">
        <Phone size={16} weight="duotone" /> Agendar
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <motion.div className="hero-badge" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <FirstAidKit size={14} weight="fill" /> FISIOTERAPIA INTEGRADA
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
        Crespi Sports<br /><span className="a">Fisio</span>
      </motion.h1>
      <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        Clínica de fisioterapia integrada na Trindade, Florianópolis. Ortopedia,
        esportiva, naturologia e dermatofuncional com equipamentos de última geração
        e tratamentos personalizados.
      </motion.p>
      <motion.a href={WA} target="_blank" rel="noopener noreferrer" className="big" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} whileHover={{ scale: 1.05 }}>
        <WhatsappLogo size={22} weight="duotone" /> Agendar Avaliação
      </motion.a>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { n: '180+', l: 'Avaliações' },
    { n: '4.7', l: 'Nota Google' },
    { n: '4', l: 'Especialidades' },
    { n: '2', l: 'Unidades' },
  ]
  return (
    <section className="stats sp">
      <div className="mx">
        <motion.div className="stats-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const servicos = [
  { icon: <Bone size={26} weight="duotone" />, title: 'Ortopédica', desc: 'Tratamento de lesões articulares, musculares, pós-operatórios e reabilitação postural.' },
  { icon: <PersonSimpleRun size={26} weight="duotone" />, title: 'Esportiva', desc: 'Recuperação de lesões esportivas, prevenção e retorno seguro à performance.' },
  { icon: <Leaf size={26} weight="duotone" />, title: 'Naturologia', desc: 'Terapias naturais complementares para equilíbrio do corpo e bem-estar.' },
  { icon: <Sparkle size={26} weight="duotone" />, title: 'Dermatofuncional', desc: 'Pré e pós-operatório de cirurgias plásticas com técnicas especializadas.' },
  { icon: <Heartbeat size={26} weight="duotone" />, title: 'GDS', desc: 'Método de cadeias musculares para análise postural e tratamento global.' },
  { icon: <FirstAidKit size={26} weight="duotone" />, title: 'Reabilitação', desc: 'Programas de recuperação funcional com acompanhamento individualizado.' },
]

function Servicos() {
  return (
    <section className="srv sp" id="servicos">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Especialidades</span>
          <h2>Fisioterapia de excelência</h2>
          <p>Tratamento completo com equipe multidisciplinar</p>
        </motion.div>
        <motion.div className="srv-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {servicos.map((s, i) => (
            <motion.div key={i} className="sc" variants={fadeUp} custom={i}>
              <div className="si">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const reviews = [
  { text: 'Equipamentos de ponta e profissionais atualizados. Melhor clínica de fisio que já frequentei.', author: 'Marcos A.' },
  { text: 'Me recuperei de uma lesão no ombro que outros profissionais não conseguiam resolver.', author: 'Juliana P.' },
  { text: 'O Dr. Geovany Crespi é referência em fisioterapia esportiva. Atendimento excepcional.', author: 'Rafael C.' },
  { text: 'Fiz pós-operatório de cirurgia plástica aqui. Resultado impecável na recuperação.', author: 'Camila S.' },
  { text: 'Tratamento personalizado de verdade. Cada sessão é diferente, evolução constante.', author: 'Pedro H.' },
  { text: 'Clínica moderna, bem localizada e com profissionais que realmente se importam.', author: 'Ana L.' },
]

function Reviews() {
  return (
    <section className="sp" id="avaliacoes">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Depoimentos</span>
          <h2>Pacientes aprovam</h2>
          <p>180 avaliações com nota 4.7 no Google</p>
        </motion.div>
        <motion.div className="rev-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {reviews.map((r, i) => (
            <motion.div key={i} className="rc" variants={fadeUp} custom={i}>
              <div className="rc-stars"><Stars /></div>
              <p className="rc-txt">&ldquo;{r.text}&rdquo;</p>
              <div className="rc-auth">{r.author}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="cta sp">
      <div className="mx">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Sua recuperação<br /><span className="a">começa agora</span></h2>
          <p>Agende sua avaliação e inicie o tratamento mais adequado para o seu caso.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="big">
            <WhatsappLogo size={22} weight="duotone" /> Agendar Avaliação
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="mx">
        <div className="footer-brand">Crespi <span>Sports Fisio</span></div>
        <div className="footer-info">
          <MapPin size={12} weight="duotone" style={{ verticalAlign: 'middle' }} /> R. Lauro Linhares, 2055 - Torre Max, Salas 101/508 - Trindade, Florianópolis<br />
          (48) 3233-3000
        </div>
        <div className="footer-copy">© 2026 Crespi Sports Fisio. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

function FloatingCta() {
  return (
    <motion.a href={WA} target="_blank" rel="noopener noreferrer" className="fbtn" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} whileHover={{ scale: 1.05 }}>
      <WhatsappLogo size={18} weight="duotone" /> Agendar
    </motion.a>
  )
}

function App() {
  return (
    <>
      <Helmet>
        <title>Crespi Sports Fisio | Fisioterapia Integrada — Florianópolis</title>
        <meta name="description" content="Fisioterapia integrada na Trindade. Nota 4.7 com 180 avaliações. Ortopédica, esportiva, dermatofuncional." />
      </Helmet>
      <Navbar />
      <Hero />
      <StatsSection />
      <Servicos />
      <Reviews />
      <Cta />
      <Footer />
      <FloatingCta />
    </>
  )
}

export default App
