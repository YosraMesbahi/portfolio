/* ========================= MENU HAMBURGER ========================= */

function toggleMenu(event) {
  const hamburgerMenu = event.currentTarget.closest('.hamburger-menu');
  if (!hamburgerMenu) return;

  const menu = hamburgerMenu.querySelector('.menu-links');
  const icon = hamburgerMenu.querySelector('.hamburger-icon');

  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// ============= DONNÉES DES PROJETS ============= 
// Centralisation des données pour faciliter la maintenance
const projectsData = {
  1: {
    title: "Site web pour le BUT MMI",
    type: "code",
    description: "Ce projet universitaire m'a permis de réaliser un site web complet pour présenter la formation BUT MMI. J'ai développé toute l'interface en respectant les contraintes du cahier des charges, en mettant l'accent sur l'ergonomie et l'accessibilité.",
    learnings: "Ce projet m'a permis de découvrir l'importance de la planification en amont. J'ai appris à structurer mon code de manière logique, à respecter les standards du web, et surtout à gérer mon temps efficacement pour livrer un projet complet dans les délais. La collaboration avec mes pairs m'a également enseigné l'importance de la communication dans un projet technique.",
    technologies: ["HTML", "CSS", "PHP"],
    skills: [
      "Conception d'interfaces web responsive",
      "Intégration de contenu dynamique avec PHP",
      "Respect des standards web et de l'accessibilité",
      "Gestion de projet et respect des délais"
    ],
    github: "https://github.com/YosraMesbahi/site-statique-mmi.git",
    demo: "https://mesbahi.alwaysdata.net/Semestre-1%20/SAE-105/SITE-WEB-BUT-MMI/index.php"
  },
  2: {
    title: "Création d'un CRUD",
    type: "code",
    description: "Développement d'une application web complète avec système CRUD (Create, Read, Update, Delete). Ce projet m'a permis de maîtriser la manipulation de bases de données et la création d'interfaces d'administration robustes et sécurisées.",
    learnings: "Ce projet a été un véritable tournant dans ma compréhension du développement back-end. J'ai appris à concevoir une base de données relationnelle cohérente, à sécuriser mes requêtes SQL contre les injections, et à structurer mon code selon l'architecture MVC. Les difficultés rencontrées lors du débogage m'ont enseigné la patience et l'importance des tests.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    skills: [
      "Conception et gestion de bases de données relationnelles",
      "Développement d'opérations CRUD complètes",
      "Sécurisation des formulaires et des requêtes SQL",
      "Architecture MVC et séparation des préoccupations"
    ],
    github: "https://github.com/YosraMesbahi/site-bdd.git",
    demo: "https://glowcom.alwaysdata.net/SAE-203/DanYellow-cours-main-integration/code/index.php"
  },
  3: {
    title: "Dynamisation d'un site web",
    type: "code",
    description: "Transformation d'un site statique en site dynamique. J'ai implémenté un système de templates et de gestion de contenu pour faciliter la maintenance et l'évolutivité du site. Ce projet m'a permis de comprendre l'importance de la modularité dans le développement web.",
    learnings: "La refactorisation de code existant m'a appris à lire et comprendre du code que je n'avais pas écrit. J'ai découvert les avantages de la programmation modulaire et l'importance de créer des composants réutilisables. Ce projet m'a également sensibilisé à la notion de dette technique et à l'importance de documenter son code.",
    technologies: ["HTML", "PHP"],
    skills: [
      "Refactorisation de code HTML vers PHP",
      "Création de systèmes de templates réutilisables",
      "Optimisation du code et des performances",
      "Documentation technique du projet"
    ],
    github: "https://github.com/YosraMesbahi/dynamisation-tableau-php.git",
    demo: "https://mesbahi.alwaysdata.net/Semestre-3/Atelier-php/Mamba/index.php"
  },
  4: {
    title: "Visualisation de données",
    type: "code",
    description: "Projet en cours de développement axé sur la visualisation interactive de données. Utilisation de bibliothèques JavaScript modernes pour créer des graphiques et tableaux de bord dynamiques permettant d'analyser et de présenter des données complexes de manière claire et intuitive.",
    learnings: "Ce projet me permet d'explorer l'intersection entre design et développement. J'apprends à transformer des données brutes en récits visuels compréhensibles, à choisir les bonnes représentations graphiques selon le message à faire passer, et à optimiser les performances pour gérer de gros volumes de données.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    skills: [
      "Manipulation et traitement de données",
      "Création de visualisations interactives",
      "Développement front-end moderne",
      "Intégration de bibliothèques JavaScript",
      "Optimisation des performances avec de gros volumes de données"
    ],
    github: null,
    demo: null
  },
  5: {
    title: "Maquettes de site sur Figma",
    type: "design",
    description: "Collection de maquettes web réalisées sur Figma dans le cadre de projets universitaires et personnels. Focus sur l'UX/UI design et les tendances actuelles du web design. Ces maquettes reflètent ma démarche créative et ma capacité à conceptualiser des interfaces modernes et ergonomiques.",
    learnings: "Le design m'a appris à penser 'utilisateur d'abord'. J'ai développé ma sensibilité aux détails visuels, à la hiérarchie de l'information et à l'importance de la cohérence dans une interface. Les tests utilisateurs m'ont montré que mes intuitions ne sont pas toujours justes et qu'il faut savoir remettre en question ses choix pour créer de meilleures expériences.",
    technologies: ["Figma"],
    skills: [
      "Design d'interfaces utilisateur modernes",
      "Prototypage interactif",
      "Conception responsive mobile-first",
      "Création de systèmes de design cohérents",
      "Tests utilisateurs et itérations"
    ],
    github: null,
    demo: "https://www.figma.com/proto/SJqtcCVsUBsuKLdMjAa2Cw/Maquette---Agence-immobili%C3%A8re?node-id=1-269&p=f&t=fbaZdKtS0w81hRjO-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=1%3A269"
  },

   6: {
    title: "Système de Gestion d'Adhérents",
    type: "code",
    description: "Développement d'une application de back-office dédiée à la gestion des membres d'un club. Le projet inclut une interface d'administration complète permettant de piloter la base de données des adhérents de manière sécurisée et intuitive.",
    learnings: "Ce projet m'a permis de maîtriser le cycle de vie des données (CRUD) et de comprendre l'importance de la sécurité côté serveur. J'ai appris à sécuriser les accès via un système d'authentification et à protéger les données sensibles des utilisateurs en utilisant des techniques de hachage de mots de passe.",
    technologies: ["PHP", "MySQL", "HTML/CSS"],
    skills: [
      "Architecture de base de données relationnelle",
      "Implémentation d'un CRUD complet (Ajout, Lire, Modifier, Supprimer)",
      "Sécurisation des mots de passe (Fonction crypt/hash)",
      "Gestion de l'authentification et des sessions (Login)",
      "Développement de formulaires avec recherche dynamique"
    ],
    github: "https://github.com/YosraMesbahi/gestion-adherents-club.git",
    demo: "https://mesbahi.alwaysdata.net/backoffice-crud/login.php"
  }
};




/* ========================= MODALE PROJETS ========================= */

class ProjectModal {
  constructor() {
    this.modal = document.getElementById('modal-container');
    this.closeBtn = this.modal.querySelector('.modal-close');
    this.backdrop = this.modal.querySelector('.modal-backdrop');
    this.lastFocusedElement = null;

    this.initEvents();
  }

  initEvents() {
    this.closeBtn.addEventListener('click', () => this.close());
    this.backdrop.addEventListener('click', () => this.close());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.close();
      }
    });
  }

open(projectId) {
  const data = projectsData[projectId];
  if (!data) return;

  this.lastFocusedElement = document.activeElement;

  // Remplir les données de base
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-description').textContent = data.description;
  document.getElementById('modal-learnings').textContent = data.learnings;

  // Technologies
  const techContainer = document.getElementById('modal-tech-badges');
  techContainer.innerHTML = data.technologies
    .map(tech => `<span class="tech-badge">${tech}</span>`)
    .join('');

  // Compétences
  const skillsList = document.getElementById('modal-skills-list');
  skillsList.innerHTML = data.skills
    .map(skill => `<li>${skill}</li>`)
    .join('');

  // ✅ GESTION INTELLIGENTE DES BOUTONS
  const buttonsContainer = document.querySelector('.modal-buttons');
  
  // CAS 1 : Projet de type "design" (maquettes Figma)
  if (data.type === 'design') {
    if (data.demo) {
      buttonsContainer.innerHTML = `
        <a href="${data.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-color-1" style="width: 100%;">
          Voir la maquette
        </a>
      `;
    } else {
      buttonsContainer.innerHTML = `
        <p style="text-align: center; color: var(--color-text); margin: 0;">
          <em>Maquette en cours de finalisation</em>
        </p>
      `;
    }
  }
  // CAS 2 : Projet sans liens (en développement)
  else if (!data.github && !data.demo) {
    buttonsContainer.innerHTML = `
      <p style="text-align: center; color: var(--color-text); margin: 0;">
        <em>Projet en cours de développement - Disponible prochainement</em>
      </p>
    `;
  }
  // CAS 3 : Projet de code avec liens
  else {
    buttonsContainer.innerHTML = `
      <a id="modal-github" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-color-2">GitHub</a>
      <a id="modal-demo" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-color-1">Live Demo</a>
    `;
    
    const githubBtn = document.getElementById('modal-github');
    const demoBtn = document.getElementById('modal-demo');
    
    // Afficher/cacher selon disponibilité
    if (data.github) {
      githubBtn.href = data.github;
      githubBtn.style.display = 'inline-flex';
    } else {
      githubBtn.style.display = 'none';
    }
    
    if (data.demo) {
      demoBtn.href = data.demo;
      demoBtn.style.display = 'inline-flex';
    } else {
      demoBtn.style.display = 'none';
    }
  }

  // Afficher la modale
  this.modal.classList.add('active');
  document.body.classList.add('modal-open');
  this.closeBtn.focus();
}

  close() {
    this.modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    if (this.lastFocusedElement) this.lastFocusedElement.focus();
  }
}

/* ========================= CHARGEMENT DE LA MODALE ========================= */

async function loadModalAndInit() {
  const placeholder = document.getElementById('modal-placeholder');
  if (!placeholder) return;

  try {
    const response = await fetch('modale.html');
    if (!response.ok) throw new Error('Erreur de chargement de la modale');
    
    const html = await response.text();
    placeholder.innerHTML = html;

    const projectModal = new ProjectModal();

    document.querySelectorAll('.btn-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-project-id');
        projectModal.open(projectId);
      });
    });
  } catch (error) {
    console.error('Erreur lors du chargement de la modale:', error);
  }
}

/* ========================= INITIALISATION GLOBALE ========================= */

document.addEventListener('DOMContentLoaded', () => {

  // Menu hamburger
  document.querySelectorAll('.hamburger-icon').forEach(icon => {
    icon.addEventListener('click', toggleMenu);
  });

  document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
      const hamburgerMenu = link.closest('.hamburger-menu');
      if (!hamburgerMenu) return;

      hamburgerMenu.querySelector('.menu-links').classList.remove('open');
      hamburgerMenu.querySelector('.hamburger-icon').classList.remove('open');
    });
  });

  // Modales projets
  loadModalAndInit();

  // Bouton CV
  const cvBtn = document.querySelector('[data-action="download-cv"]');
  if (cvBtn) {
    cvBtn.addEventListener('click', () => {
      window.open('./assets/CV-MESBAHI.pdf', '_blank');
    });
  }

  // Gestion des icônes réseaux sociaux
  document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const social = icon.getAttribute('data-social');
      
      if (social === 'linkedin') {
        window.open('https://www.linkedin.com/in/yosra-mesbahi/', '_blank', 'noopener,noreferrer');
      } else if (social === 'github') {
        window.open('https://github.com/YosraMesbahi', '_blank', 'noopener,noreferrer');
      }
    });
  });

  // Gestion du bouton "Voir tous mes projets"
  const voirProjetsBtn = document.querySelector('[data-action="voir-projets"]');
  if (voirProjetsBtn) {
    voirProjetsBtn.addEventListener('click', () => {
      window.location.href = './projets.html';
    });
  }
});