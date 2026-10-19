import { useState, type FormEvent } from 'react';
import portrait from './assets/portrait.jpg';
import adncImage from './assets/projects/adnc-automobile.png';
import emailjs from "@emailjs/browser";

const skills = [
  {
    name: 'Développement web',
    level: 'Pratique',
    description:
      'Réalisation de projets web et mise en œuvre d’interfaces.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    name: 'Python',
    level: 'Bases',
    description:
      'Connaissances fondamentales de la programmation Python.',
    technologies: ['Python'],
  },
  {
    name: 'Java',
    level: 'Bases',
    description:
      'Connaissances fondamentales de la programmation Java.',
    technologies: ['Java'],
  },
  {
    name: 'Réseaux informatiques',
    level: 'Bases',
    description:
      'Acquisition des fondamentaux des réseaux informatiques.',
    technologies: ['Réseaux', 'Architecture informatique'],
  },
  {
    name: 'Analyse de données',
    level: 'Bases',
    description:
      'Initiation au nettoyage et à la préparation des données.',
    technologies: ['Python', 'Pandas'],
  },
  {
    name: 'Git et GitHub',
    level: 'En apprentissage',
    description:
      'Découverte du contrôle de version et de la gestion de dépôts.',
    technologies: ['Git', 'GitHub'],
  },
]



const projects = [
  

{
  number: '01',
  category: 'Automobile · Développement front-end',
  title: 'ADNC AUTOMOBILE',
  status: 'Projet réalisé en équipe',
  image: adncImage,
  description:
    'Participation au développement d’un site web dédié à la vente et à la location de véhicules. Contribution à la création des pages, à la mise en forme des cartes de véhicules, à la navigation et à l’adaptation de l’interface aux écrans mobiles.',
  tags: [
    'HTML',
    'CSS',
    'JavaScript',
    'Responsive design',
    'Navigation web',
    'Travail en équipe',
  ],
},

{
  number: '02',
  category: 'Obligation religieuse · Web & mobile',
  title: 'Hajjrah',
  status: 'En phase de conception',
  description:
    'Conception d’une application web et mobile destinée à accompagner les pèlerins dans l’organisation de leur Hajj et de leur Oumrah à La Mecque, avec pour objectif de simplifier leur parcours.',
  tags: ['Application web', 'Application mobile', 'Hajj & Oumrah'],
},
  {
    number: '03',
    category: 'Développement d’application',
    title: 'Gaindé Eats',
    description:
      'Projet de gestion de commandes de restauration intégrant des données sur les clients, les restaurants, les plats et les commandes.',
    tags: ['Python', 'Streamlit', 'PostgreSQL', 'Psycopg2'],
  },
  {
    number: '04',
    category: 'Cloud computing',
    title: 'Simulation d’un environnement cloud',
    description:
      'Simulation de ressources cloud avec CloudSim, exécution de tâches informatiques et observation des performances du système.',
    tags: ['Java', 'CloudSim', 'Maven'],
  },
  {
    number: '05',
    category: 'Data & Python',
    title: 'Analyse et nettoyage de données',
    description:
      'Exploration, nettoyage et organisation de données afin de préparer leur analyse et d’en extraire des informations pertinentes.',
    tags: ['Python', 'Pandas', 'Data analysis'],
  },
]


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});


const [isSending, setIsSending] = useState(false);
const [formStatus, setFormStatus] = useState("");


const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setIsSending(true);
  setFormStatus("");

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      { 
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    setFormStatus("Message envoyé avec succès !");
    setFormData({ name: "", email: "", message: "" });
  } catch (error: unknown) {
    console.error("Échec de l'envoi EmailJS :", error);

    if (typeof error === "object" && error !== null) {
      const details = error as {
        status?: unknown;
        text?: unknown;
        message?: unknown;
      };

      console.error("Détails techniques EmailJS :", {
        status: details.status,
        text: details.text,
        message: details.message,
      });
    }

    setFormStatus(
      "L'envoi a échoué. Vérifiez la configuration et réessayez."
    );
  } finally {
    setIsSending(false);
  }
};


  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a className="brand" href="#accueil" onClick={closeMenu}>
            DK<span>.</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#accueil" onClick={closeMenu}>Accueil</a>
            <a href="#apropos" onClick={closeMenu}>À propos</a>
            <a href="#competences" onClick={closeMenu}>Compétences</a>
            <a href="#projets" onClick={closeMenu}>Projets</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Me contacter ↗
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="accueil">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              Étudiant en informatique · En évolution
            </div>

            <p className="eyebrow">BONJOUR, JE SUIS</p>
            
            
        <h1>
        Concevoir.
        <br />
        <span>Comprendre.</span>
        <br />
        Construire.
        </h1>

        <p className="hero-name">
        Dioukamady Keita Badiane · Développeur en devenir
        </p>


            <p className="hero-description">
            Étudiant en informatique, je m’intéresse au développement
            logiciel, aux réseaux et à l’intelligence artificielle.
            J’aime comprendre avant de construire, apprendre avec méthode
            et transformer des idées en solutions concrètes.
            Mon ambition : développer des compétences solides et créer
            une technologie utile, pensée avec rigueur et créativité.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projets">
                Découvrir mes projets <span>↗</span>
              </a>
              <a className="button button-secondary" href="#apropos">
                En savoir plus
              </a>
            </div>

            <div className="hero-social">
              <span>Basé à Dakar, Sénégal</span>
              <span className="social-separator">/</span>
              <span>Informatique & technologie</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
           
            <div className="profile-card profile-card-photo">
            <div className="profile-top">
                <span className="profile-dot" />
                <span className="profile-dot" />
                <span className="profile-dot" />
                <span className="profile-label">PROFILE.EXE</span>
            </div>

            <img
                src={portrait}
                alt="Portrait professionnel de Dioukamady Keita Badiane"
                className="profile-photo"
            />

            <div className="profile-info profile-photo-info">
                <span>FOCUS</span>
                <strong>Programmation · Réseaux · AI</strong>
            </div>

            <div className="profile-info profile-photo-info">
                <span>MINDSET</span>
                <strong>Curiosité · Réflexion · Discipline</strong>
            </div>
            </div>

            <div className="floating-chip chip-top">✳ Créativité</div>
            <div className="floating-chip chip-bottom">{"{ }"} Code & idées</div>
            <div className="visual-glow" />
          </div>

          <a href="#apropos" className="scroll-indicator">
            <span className="scroll-line" />
            DÉFILER POUR EXPLORER
          </a>
        </section>

        <section className="section about-section" id="apropos">
          <div className="container">
            <p className="eyebrow">01 / À PROPOS</p>
            <div className="about-grid">
              <h2>
                Apprendre aujourd’hui.
                <br />
                <span>Construire demain.</span>
              </h2>
              <div className="about-text">
                
                <p>
                Je suis étudiant en informatique, animé par la curiosité,
                l’envie d’apprendre et le goût de la résolution de problèmes.
                </p>

                <p>
                Je m’intéresse particulièrement au développement logiciel,
                aux réseaux informatiques, au cloud computing et à
                l’intelligence artificielle. À travers mes projets, je cherche
                à consolider mes connaissances, à expérimenter différentes
                technologies et à transformer progressivement mes idées
                en solutions concrètes.
                </p>

                <p>
                De la réalisation de sites web à la simulation d’environnements
                cloud, chaque projet représente pour moi une occasion de
                progresser, de renforcer ma méthode de travail et de mieux
                comprendre les enjeux techniques.
                </p>

                <p>
                Mon objectif est de devenir un professionnel compétent,
                rigoureux et capable de concevoir des solutions numériques
                utiles, fiables et adaptées aux besoins réels.
                </p>

                <a className="text-link" href="#contact">
                  Parlons de votre projet <span>↗</span>
                </a>
              </div>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <strong>01<span>+</span></strong>
                <p>Curiosité sans limite</p>
              </div>
              <div className="stat-card">
                <strong>∞</strong>
                <p>Choses à apprendre</p>
              </div>
              <div className="stat-card">
                <strong>100<span>%</span></strong>
                <p>Volonté de progresser</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="competences">
          <div className="container">
            <p className="eyebrow">02 / COMPÉTENCES</p>
            <div className="section-heading">
              <h2>Ma boîte à outils<span>.</span></h2>
              <p>
                Des bases solides, une pratique régulière et l’envie
                d’aller toujours plus loin.
              </p>
            </div>

            <div className="skills-grid">
            {skills.map((skill) => (
                <article className="skill-card" key={skill.name}>
                <div className="skill-card-header">
                    <h3>{skill.name}</h3>
                    <span className="skill-level">{skill.level}</span>
                </div>

                <p>{skill.description}</p>

                <div className="skill-tags">
                    {skill.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                    ))}
                </div>
                </article>
            ))}
            </div>
            <p className="skills-note">
              Les niveaux affichés sont indicatifs et représentent une
              autoévaluation, pas une certification.
            </p>
          </div>
        </section>

        <section className="section projects-section" id="projets">
          <div className="container">
            <p className="eyebrow">03 / PROJETS</p>
            <div className="section-heading projects-heading">
              <h2>Du concret, pas seulement des idées<span>.</span></h2>
              <p>
                Quelques exemples de travaux et de domaines explorés
                dans mon parcours.
              </p>
            </div>

            <div className="projects-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>   
                {project.image && (
                <div className="project-image-wrapper">
                    <img
                    src={project.image}
                    alt={`Aperçu du projet ${project.title}`}
                    className="project-image"
                    loading="lazy"
                    />
                </div>
                )}
                  <span className="project-number">{project.number}</span>
                  <div className="project-main">
                    
                    <p className="project-category">{project.category}</p>

                    {project.status && (
                    <span className="project-status">{project.status}</span>
                    )}

                    <h3>{project.title}</h3>
                    <p className="project-description">
                      {project.description}
                    </p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    
                        
                    {project.title === 'ADNC AUTOMOBILE' ? (
                    <a className="project-link" href="#contact">
                        Discuter d’un projet similaire
                        <span aria-hidden="true"> ↗</span>
                    </a>
                    ) : project.title === 'Hajjrah' ? (
                    <a className="project-link" href="#contact">
                        Discuter du concept
                        <span aria-hidden="true"> ↗</span>
                    </a>
                    ) : null}

                  </div>
                  <span className="project-icon">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        
<section className="section contact-section" id="contact">
  <div className="container">
    <p className="eyebrow">04 / CONTACT</p>

    <div className="contact-grid">
      <div className="contact-intro">
        <h2>
          Un projet en tête ?
          <br />
          <span>Parlons-en.</span>
        </h2>

        <p>
          Vous avez une idée, un projet ou une opportunité
          professionnelle ? Envoyez-moi un message. Je serai
          ravi d’échanger avec vous.
        </p>

        <div className="contact-links">
          <a href="mailto:dioukamadykeitabadiane@gmail.com">
            dioukamadykeitabadiane@gmail.com
          </a>

          <a
            href="https://github.com/Abdurazzak02"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/dioukamady-keita-badiane-14bba4316"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Votre nom</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Entrez votre nom"
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Votre adresse e-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="exemple@email.com"
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="message">Votre message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Présentez-moi votre projet..."
            value={formData.message}
            onChange={(event) =>
              setFormData({ ...formData, message: event.target.value })
            }
            required
          />
        </div>

            <button
    className="contact-submit"
    type="submit"
    disabled={isSending}
    >
    {isSending ? "Envoi en cours..." : "Envoyer le message"}
    {!isSending && <span>↗</span>}
    </button>
            {formStatus && (
    <p role="status" aria-live="polite">
        {formStatus}
    </p>
    )}
      </form>
    </div>
  </div>
</section>

      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#accueil">DK<span>.</span></a>
          <p>Conçu avec curiosité et beaucoup de café.</p>
          <a href="#accueil" className="back-top">Retour en haut ↑</a>
          <span className="copyright">© {new Date().getFullYear()} · Tous droits réservés</span>
        </div>
      </footer>
    </>
  )
}

export default App