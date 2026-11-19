// ====== À MODIFIER : tes informations ======
export const ME = { nom: 'KHOLORE', prenom: 'ALFRED N DRI', email: 'kholorepaul@gmail.com', lieu: 'Côte d’Ivoire,Abidjan' }
export const ROLES = ['DÉVELOPPEUR', 'INGÉNIEUR']

export const ABOUT = 'Je suis développeur full-stack diplômé en Informatique Génie Logiciel. J’aime transformer un vrai besoin en une application claire, solide et agréable à utiliser, de la modélisation jusqu’à la mise en ligne.'

export const DO = [
  { t: 'DÉVELOPPER', d: 'Interfaces React et API Laravel, base MySQL, authentification Sanctum : je construis des applications complètes, du clic de l’utilisateur jusqu’à la base de données.' },
  { t: 'CONCEVOIR', d: 'Avant de coder, je modélise avec MERISE et je découpe les besoins par rôle (admin, agent, propriétaire, locataire) pour obtenir une base propre.' },
  { t: 'DÉPLOYER', d: 'Front sur Vercel, API sur Render, base MySQL sur Aiven : j’aime qu’un projet soit en ligne et accessible, pas seulement sur mon ordinateur.' },
]

export const CAREER = [
  { r: 'BACCALAURÉAT Série D', o: 'COLLÈGE EBURNIE', y: '2022-2023', d: '.' },
  { r: 'BTS 1 Informatique Developpeur d Application (IDA)', o: 'IIPEA', y: '2023-2024', d: 'Premier pas dans l univers du développement informatique.' },
  { r: 'BTS 2 Informatique Developpeur d Application (IDA)', o: 'IIPEA', y: '2024-2025', d: 'Admis au BTS le 20 aout 2026 en candidature libre .' },
  { r: 'Licence 3 en Informatique Génie Logiciel (IGL)', o: 'IIPEA', y: '2025-2026', d: 'Soutenance réussie le samedi 3 octobre 2026, avec un mémoire consacré à la conception d’une plateforme de gestion immobilière.' },
 
]

// demo / repo / img sont optionnels : renseigne-les (ex. demo: 'https://...') et ils s'affichent.
// img : chemin d'une capture dans /public (ex. '/projects/ges-immob.png') -> remplace la maquette grise.
export const WORKS = [
  { n: '01', t: 'GES-IMMOB.CI', c: 'Plateforme web', tools: 'React.js, Laravel, MySQL, Sanctum, MERISE, signature de contrats, quittances, messagerie, vérification d’identité par CNI et selfie.', demo: '', repo: 'alfredpaul24', img: 'GES-IMMOB.CI.png' },
  { n: '02', t: 'N ZO SIGNATURE', c: 'plateforme web', tools: 'HTML, CSS, JAVASCRIPT ,firebase, notifications, espace user, espace admin.', demo: 'https://nzo-signature.vercel.app', repo: 'alfredpaul24/nzo-signature', img: 'nzo.jpg' },
  { n: '03', t: 'PORTFOLIO', c: 'Site vitrine', tools: 'React, Three.js, React Three Fiber, physique Rapier, animations au scroll.', demo: 'https://portfolio-3d-three-rho.vercel.app/', repo: 'alfredpaul24', img: 'portfolio.png' },
  { n: '04', t: 'Need To Speak', c: 'Plateforme web', tools: 'React.js, Laravel, MySQL, Sanctum, FastApi, Assitance de soutien pour personne ayant envie de se confier sans etre jugée et de soutien mental.', demo: '', repo: 'alfredpaul24', img: 'ntsp.png' },
]

export const TECH = [
  ['React', '#0e7490'], ['Laravel', '#e11d48'], ['PHP', '#4f46e5'], ['MySQL', '#0369a1'], ['JS', '#ca8a04'],
  ['HTML', '#ea580c'], ['CSS', '#2563eb'], ['Vite', '#7c3aed'], ['Git', '#dc2626'], ['GitHub', '#27272a'],
  ['Sanctum', '#059669'], ['REST', '#c026d3'], ['Vercel', '#111111'], ['Render', '#0d9488'], ['Aiven', '#ea580c'],
  ['MERISE', '#65a30d'], ['RN', '#0891b2'], ['SQL', '#1d4ed8'], ['JSON', '#52525b'], ['Fetch', '#9333ea'],
]

// n = touche, c = couleur, t = texte, tip = phrase affichée au survol
export const KEYS = [
  { n: 'React', c: '#22d3ee', t: '#042f2e', tip: 'Des interfaces vivantes, composant par composant.' },
  { n: 'Laravel', c: '#f43f5e', t: '#fff', tip: 'Mon framework PHP pour des API propres et rapides.' },
  { n: 'PHP', c: '#6366f1', t: '#fff', tip: 'Le langage qui fait tourner mon back-end.' },
  { n: 'MySQL', c: '#38bdf8', t: '#082f49', tip: 'Là où vivent les biens, les contrats et les paiements.' },
  { n: 'JS', c: '#facc15', t: '#27210a', tip: 'Le langage du navigateur, partout.' },
  { n: 'HTML', c: '#fb923c', t: '#2a1204', tip: 'Le squelette de chaque page.' },
  { n: 'CSS', c: '#3b82f6', t: '#fff', tip: 'Là où l’interface prend des couleurs.' },
  { n: 'Vite', c: '#a78bfa', t: '#1e1038', tip: 'Un serveur de dev instantané.' },
  { n: 'Git', c: '#ef4444', t: '#fff', tip: 'Ma machine à remonter le temps.' },
  { n: 'GitHub', c: '#3f3f46', t: '#fff', tip: 'Le code en lieu sûr, et en équipe.' },
  { n: 'Sanctum', c: '#10b981', t: '#022c22', tip: 'Authentification par jetons, simple et sûre.' },
  { n: 'REST', c: '#e879f9', t: '#2e0a33', tip: 'Le langage commun entre le front et le back.' },
  { n: 'Vercel', c: '#18181b', t: '#fff', tip: 'Mon front en ligne en un push.' },
  { n: 'Render', c: '#14b8a6', t: '#042f2e', tip: 'Là où tourne mon API Laravel.' },
  { n: 'Aiven', c: '#f97316', t: '#2a1204', tip: 'Ma base MySQL hébergée dans le cloud.' },
  { n: 'MERISE', c: '#84cc16', t: '#1a2e05', tip: 'On modélise d’abord, on code ensuite.' },
  { n: 'RN', c: '#06b6d4', t: '#083344', tip: 'React Native : une même idée sur mobile.' },
  { n: 'SQL', c: '#60a5fa', t: '#0c1e3d', tip: 'Poser les bonnes questions à la base.' },
  { n: 'JSON', c: '#d4d4d8', t: '#18181b', tip: 'Le format des échanges avec l’API.' },
  { n: 'Fetch', c: '#c084fc', t: '#2e1065', tip: 'Appeler l’API depuis le navigateur.' },
]

export const EXP = [
  { r: 'Développeur full-stack', o: 'GES-IMMOB.CI · projet de fin de licence', date: '2026',
    b: ['Conçu une plateforme de gestion immobilière pour les agences d’Abidjan.', 'Modélisé la base avec MERISE et construit l’API REST sous Laravel.', 'Livré une interface React avec des tableaux de bord par rôle.', 'Ajouté la signature de contrats, les quittances et la messagerie.'],
    tags: ['React', 'Laravel', 'MySQL', 'Sanctum', 'MERISE'] },
]

// ====== Liens & CV ======
// Renseigne tes liens : un lien laissé vide n'est pas affiché.
export const SOCIALS = {
  github: 'https://github.com/alfredpaul24',   
  linkedin: 'https://www.linkedin.com/in/kholore-n-dri-131744237', 
  instagram:'https://www.instagram.com/paulkholore?hvrq=NzhnNTNmMXF4aXJv', 
whatsapp:'https://wa.me/qr/5EFMOIEVA2D6D1', 
}
// Dépose ton CV (PDF) dans /public sous ce nom (un CV de départ y est déjà, à remplacer).
export const CV = { url: '/CV-Alfred-NDri.pdf', label: 'Télécharger mon CV' }

// ====== Compétences (version lisible, en complément des sphères 3D) ======
export const SKILLS = [
  { g: 'Front-end', t: ['React', 'HTML', 'CSS', 'JavaScript', 'Vite'] },
  { g: 'Back-end & API', t: ['Laravel', 'PHP', 'API REST', 'Sanctum', 'JSON'] },
  { g: 'Données & conception', t: ['MySQL', 'SQL', 'MERISE'] },
  { g: 'Outils & déploiement', t: ['Git', 'GitHub', 'Vercel', 'Firebase'] },
]
