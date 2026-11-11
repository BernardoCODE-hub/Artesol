import { useState, type FormEvent } from 'react'
import './App.css'

type View = 'store' | 'admin' | 'profile'
type CustomerProfile = {
  fullName: string
  cpf: string
  phone: string
  email: string
}

const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER ?? '').replace(/\D/g, '')
const currentYear = new Date().getFullYear()
const emptyProfile: CustomerProfile = { fullName: '', cpf: '', phone: '', email: '' }

function BrandLogo() {
  return (
    <img className="brand-logo" src="/artesol-logo.png" alt="Artesol" />
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 8.5h14l1 12H4l1-12Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3.5 10h13m-5-5 5 5-5 5" />
    </svg>
  )
}

function StoreHeader({
  onAdmin,
  onCart,
  onProfile,
}: {
  onAdmin: () => void
  onCart: () => void
  onProfile: () => void
}) {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Artesol, início">
        <BrandLogo />
      </a>
      <nav className="main-nav" aria-label="Navegação principal">
        <a className="nav-link active" href="#inicio">Início</a>
        <a className="nav-link" href="#catalogo">Catálogo</a>
        <a className="nav-link" href="#sobre">A Artesol</a>
      </nav>
      <div className="header-actions">
        <button className="icon-button profile-button" type="button" onClick={onProfile} aria-label="Meu perfil">
          <UserIcon />
        </button>
        <button className="icon-button cart-button" type="button" onClick={onCart} aria-label="Abrir carrinho">
          <BagIcon />
          <span className="cart-count">0</span>
        </button>
        <button className="button button-dark header-admin" type="button" onClick={onAdmin}>
          Área administrativa
          <ArrowIcon />
        </button>
      </div>
    </header>
  )
}

function HeroArtwork() {
  return (
    <div className="hero-artwork" aria-hidden="true">
      <div className="artwork-glow" />
      <div className="artwork-sun" />
      <div className="artwork-arch">
        <div className="artwork-bottle bottle-tall">
          <span className="bottle-neck" />
          <span className="bottle-label"><i /></span>
        </div>
        <div className="artwork-bottle bottle-small">
          <span className="bottle-neck" />
          <span className="bottle-label"><i /></span>
        </div>
        <div className="artwork-sparkle sparkle-one">✳</div>
        <div className="artwork-sparkle sparkle-two">✦</div>
        <div className="artwork-dot dot-one" />
        <div className="artwork-dot dot-two" />
      </div>
      <div className="artwork-caption">
        <span className="caption-dot" />
        <span>ARTESOL <i>/</i> LIMPEZA &amp; HIGIENE</span>
      </div>
    </div>
  )
}

function StoreView({
  onAdmin,
  onCart,
  onProfile,
  search,
  onSearch,
}: {
  onAdmin: () => void
  onCart: () => void
  onProfile: () => void
  search: string
  onSearch: (value: string) => void
}) {
  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de conhecer os produtos da Artesol.')}`
    : undefined

  return (
    <>
      <div className="announcement">
        <span className="announcement-star">✳</span>
        Produtos para limpeza e higiene
        <span className="announcement-divider" />
        Conheça a Artesol
      </div>
      <StoreHeader onAdmin={onAdmin} onCart={onCart} onProfile={onProfile} />
      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span /> BEM-VINDO À ARTESOL</div>
            <h1>Cuidado em cada <span>detalhe.</span></h1>
            <p className="hero-description">
              Um novo espaço para encontrar soluções em limpeza e higiene.
              Estamos preparando nosso catálogo para você.
            </p>
            <div className="hero-actions">
              <a className="button button-yellow" href="#catalogo">
                Explorar catálogo <ArrowIcon />
              </a>
              {whatsappLink ? (
                <a className="button button-outline" href={whatsappLink} target="_blank" rel="noreferrer">
                  Fale pelo WhatsApp
                </a>
              ) : (
                <span className="contact-note">WhatsApp em configuração</span>
              )}
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <span>Artesol <b>·</b> Limpeza &amp; Higiene</span>
            </div>
          </div>
          <HeroArtwork />
          <div className="hero-index"><span>01</span><i /> 03</div>
        </section>

        <section className="home-highlights" aria-label="Explore a Artesol">
          <a className="highlight-card" href="#catalogo">
            <span className="highlight-number">01</span>
            <span className="highlight-copy"><strong>Catálogo</strong><small>Conheça nossos produtos em breve</small></span>
            <ArrowIcon />
          </a>
          <a className="highlight-card" href="#sobre">
            <span className="highlight-number">02</span>
            <span className="highlight-copy"><strong>Quem somos</strong><small>Saiba mais sobre a Artesol</small></span>
            <ArrowIcon />
          </a>
          <button className="highlight-card" type="button" onClick={onProfile}>
            <span className="highlight-number">03</span>
            <span className="highlight-copy"><strong>Minha conta</strong><small>Acesse seus dados de cliente</small></span>
            <ArrowIcon />
          </button>
        </section>

        <section className="catalog-section" id="catalogo">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> PRODUTOS ARTESOL</div>
              <h2>Nosso catálogo</h2>
              <p>Encontre aqui os produtos de limpeza e higiene da Artesol.</p>
            </div>
            <div className="catalog-search">
              <div className={`search-field${search ? ' has-query' : ''}`}>
                <span className="search-icon"><SearchIcon /></span>
                <label className="visually-hidden" htmlFor="catalog-search">Buscar produtos</label>
                <input
                  id="catalog-search"
                  type="search"
                  placeholder="Ex.: detergente, desinfetante..."
                  value={search}
                  onChange={(event) => onSearch(event.target.value)}
                />
                {search && (
                  <button className="clear-search" type="button" onClick={() => onSearch('')} aria-label="Limpar busca">
                    ×
                  </button>
                )}
              </div>
              <span className="search-hint">Digite o nome do produto que procura</span>
            </div>
          </div>
          <div className="catalog-empty">
            <div className="empty-illustration">
              <div className="empty-orbit orbit-one" />
              <div className="empty-orbit orbit-two" />
              <div className="empty-box">
                <div className="empty-box-flap" />
                <span className="empty-sparkle">✳</span>
              </div>
              <span className="empty-dot dot-a" />
              <span className="empty-dot dot-b" />
              <span className="empty-dot dot-c" />
            </div>
            <div className="empty-copy">
              <span className="empty-label">CATÁLOGO EM PREPARAÇÃO</span>
              <h3>{search ? 'Não encontramos esse produto.' : 'Em breve, novidades por aqui.'}</h3>
              <p>
                {search
                  ? 'O catálogo oficial ainda está sendo organizado. Tente novamente mais tarde.'
                  : 'Estamos organizando as informações oficiais dos produtos para apresentar tudo com cuidado.'}
              </p>
              <span className="empty-rule"><i /></span>
            </div>
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="about-mark"><BrandLogo /></div>
          <div className="about-copy">
            <div className="eyebrow"><span /> QUEM SOMOS</div>
            <h2>Conheça a <span>Artesol.</span></h2>
            <p>
              A Artesol atua no segmento de limpeza e higiene. Este espaço
              apresenta a empresa e, em breve, reunirá seu catálogo oficial.
            </p>
          </div>
          <a className="about-link" href="#inicio" aria-label="Voltar ao início">
            <ArrowIcon />
          </a>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">
          <BrandLogo />
        </a>
        <span className="footer-copy">© {currentYear} Artesol. Todos os direitos reservados.</span>
        <button className="footer-admin" type="button" onClick={onAdmin}>Acesso administrativo</button>
      </footer>
    </>
  )
}

function ProfileView({
  profile,
  onProfileChange,
  onBack,
}: {
  profile: CustomerProfile
  onProfileChange: (profile: CustomerProfile) => void
  onBack: () => void
}) {
  const [profileFeedback, setProfileFeedback] = useState('')

  function handleProfileSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setProfileFeedback('Dados atualizados nesta sessão. Para salvar as alterações na sua conta, é necessário conectar o sistema.')
  }

  return (
    <main className="account-page">
      <div className="admin-topbar account-topbar">
        <a className="brand" href="#inicio" onClick={(event) => { event.preventDefault(); onBack() }}>
          <BrandLogo />
        </a>
        <button className="back-link" type="button" onClick={onBack}>
          <span aria-hidden="true">←</span> Voltar à loja
        </button>
      </div>
      <div className="account-content">
        <div className="account-heading">
          <div className="eyebrow"><span /> ÁREA DO CLIENTE</div>
          <h1>Meu <span>perfil.</span></h1>
          <p>Consulte e atualize seus dados pessoais e de acesso.</p>
          <p className="account-preview-note" role="note">Prévia visual: não insira dados reais. Esta página ainda não está conectada a uma conta segura.</p>
        </div>
        <div className="account-grid">
          <section className="account-card">
            <div className="account-card-heading">
              <span className="account-card-icon"><UserIcon /></span>
              <div><h2>Dados pessoais</h2><p>Suas informações de cadastro</p></div>
            </div>
            <form className="account-form" onSubmit={handleProfileSubmit}>
              <label className="account-field account-field-wide" htmlFor="profile-name">
                Nome completo
                <input id="profile-name" type="text" autoComplete="name" placeholder="Digite seu nome completo" value={profile.fullName} onChange={(event) => onProfileChange({ ...profile, fullName: event.target.value })} required />
              </label>
              <label className="account-field" htmlFor="profile-cpf">
                CPF
                <input id="profile-cpf" type="text" inputMode="numeric" autoComplete="off" placeholder="000.000.000-00" value={profile.cpf} onChange={(event) => onProfileChange({ ...profile, cpf: event.target.value })} required />
              </label>
              <label className="account-field" htmlFor="profile-phone">
                Número de telefone
                <input id="profile-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000" value={profile.phone} onChange={(event) => onProfileChange({ ...profile, phone: event.target.value })} required />
              </label>
              <label className="account-field account-field-wide" htmlFor="profile-email">
                E-mail
                <input id="profile-email" type="email" autoComplete="email" placeholder="voce@exemplo.com" value={profile.email} onChange={(event) => onProfileChange({ ...profile, email: event.target.value })} required />
              </label>
              <div className="account-form-footer">
                {profileFeedback && <p className="account-feedback" role="status">{profileFeedback}</p>}
                <button className="button button-dark" type="submit">Atualizar dados <ArrowIcon /></button>
              </div>
            </form>
          </section>

          <section className="account-card password-card">
            <div className="account-card-heading">
              <span className="account-card-icon">
                <svg className="lock-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="5" y="10" width="14" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 1 1 8 0v3" />
                </svg>
              </span>
              <div><h2>Alterar senha</h2><p>Mantenha sua conta protegida</p></div>
            </div>
            <div className="account-form password-form">
              <fieldset className="account-fieldset" disabled>
                <label className="account-field" htmlFor="current-password">
                  Senha atual
                  <input id="current-password" type="password" autoComplete="off" />
                </label>
                <label className="account-field" htmlFor="new-password">
                  Nova senha
                  <input id="new-password" type="password" autoComplete="off" />
                  <small>Use pelo menos 8 caracteres.</small>
                </label>
                <label className="account-field" htmlFor="confirm-password">
                  Confirmar nova senha
                  <input id="confirm-password" type="password" autoComplete="off" />
                </label>
                <button className="button button-outline password-submit" type="button">Alterar senha</button>
              </fieldset>
              <p className="account-notice">A alteração será habilitada quando o serviço seguro de autenticação estiver conectado.</p>
            </div>
          </section>
        </div>
      </div>
      <footer className="admin-footer">
        <span>© {currentYear} Artesol</span>
        <span>Área do cliente</span>
      </footer>
    </main>
  )
}

function AdminView({ onBack }: { onBack: () => void }) {
  return (
    <main className="admin-page">
      <div className="admin-topbar">
        <a className="brand" href="#inicio" onClick={(event) => { event.preventDefault(); onBack() }}>
          <BrandLogo />
        </a>
        <button className="back-link" type="button" onClick={onBack}>
          <span aria-hidden="true">←</span> Voltar à loja
        </button>
      </div>
      <div className="admin-content">
        <div className="admin-intro">
          <div className="eyebrow"><span /> ARTESOL / ADMINISTRAÇÃO</div>
          <h1>Gestão simples,<br /><span>do seu jeito.</span></h1>
          <p>Área de administração da loja. O acesso seguro será habilitado quando o backend estiver conectado.</p>
          <div className="admin-preview">
            <div className="preview-top">
              <span className="preview-dot" />
              <span>PRÉVIA DO PAINEL</span>
              <span className="preview-menu">•••</span>
            </div>
            <div className="preview-title">Visão geral <span>Hoje</span></div>
            <div className="preview-stats">
              <div><small>Produtos</small><strong>—</strong><i>aguardando cadastro</i></div>
              <div><small>Categorias</small><strong>—</strong><i>aguardando cadastro</i></div>
            </div>
            <div className="preview-list">
              <span className="preview-list-icon"><BagIcon /></span>
              <span><b>Seu catálogo começa aqui</b><small>Produtos cadastrados aparecerão nesta área.</small></span>
              <span className="preview-chevron">›</span>
            </div>
          </div>
        </div>
        <section className="admin-login">
          <div className="login-icon"><BrandLogo /></div>
          <span className="login-kicker">ÁREA RESTRITA</span>
          <h2>Acesso administrativo</h2>
          <p>A autenticação estará disponível após a implementação do backend.</p>
          <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="admin-email">E-mail</label>
            <input id="admin-email" type="email" placeholder="seu@email.com" autoComplete="username" disabled />
            <label htmlFor="admin-password">Senha</label>
            <input id="admin-password" type="password" placeholder="••••••••••" autoComplete="current-password" disabled />
            <button className="button button-dark login-button" type="button" disabled>
              Acesso indisponível nesta etapa <ArrowIcon />
            </button>
          </form>
          <span className="login-footnote"><span /> Painel visual — sem autenticação conectada</span>
        </section>
      </div>
      <footer className="admin-footer">
        <span>© {currentYear} Artesol</span>
        <span>Prévia visual do painel administrativo</span>
      </footer>
    </main>
  )
}

function CartPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="cart-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <aside className="cart-panel" aria-label="Carrinho de compras">
        <div className="cart-panel-heading">
          <div><span className="eyebrow"><span /> SUA SELEÇÃO</span><h2>Meu carrinho</h2></div>
          <button className="close-button" type="button" onClick={onClose} aria-label="Fechar carrinho">×</button>
        </div>
        <div className="cart-empty">
          <div className="cart-empty-icon"><BagIcon /></div>
          <h3>Seu carrinho está vazio.</h3>
          <p>Os produtos estarão disponíveis assim que o catálogo oficial for publicado.</p>
          <button className="button button-yellow" type="button" onClick={onClose}>Continuar explorando <ArrowIcon /></button>
        </div>
        <div className="cart-panel-foot">
          <span>Pagamento e pedidos serão realizados diretamente com a Artesol.</span>
        </div>
      </aside>
    </div>
  )
}

function App() {
  const [view, setView] = useState<View>('store')
  const [cartOpen, setCartOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [profile, setProfile] = useState<CustomerProfile>(emptyProfile)

  return (
    <div className="app-shell">
      {view === 'store' ? (
        <StoreView
          onAdmin={() => { setView('admin'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          onProfile={() => { setView('profile'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          onCart={() => setCartOpen(true)}
          search={search}
          onSearch={setSearch}
        />
      ) : view === 'admin' ? (
        <AdminView onBack={() => { setView('store'); window.scrollTo({ top: 0, behavior: 'smooth' }) }} />
      ) : (
        <ProfileView
          profile={profile}
          onProfileChange={setProfile}
          onBack={() => { setView('store'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        />
      )}
      {cartOpen && <CartPanel onClose={() => setCartOpen(false)} />}
    </div>
  )
}

export default App
