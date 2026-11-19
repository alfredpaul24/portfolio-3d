# Portfolio 3D — sans personnage

Le bonhomme 3D a été remplacé par :

1. **Hero** → nuage de particules qui forme `</>` (ou ton prénom) — se disperse au curseur  
2. **Architecture** → réseau de nœuds Front / API / MySQL / Auth / Deploy + impulsions  
3. **Ce que je fais** → laptop qui s’ouvre, code qui défile, inclinaison souris  

```bash
npm install
npm run dev
```

Contenu : `src/data.js`  
Scènes : `ParticleCloud.jsx`, `DataNetwork.jsx`, `LaptopScene.jsx`

## À personnaliser avant la mise en ligne
1. `index.html` : remplace `https://TON-SITE.vercel.app` (4 occurrences) par l'adresse réelle du site.
2. `src/data.js` : renseigne `SOCIALS` (GitHub, LinkedIn) et, pour chaque projet de `WORKS`, `demo`, `repo` et `img` (capture dans `public/projects/`). Un champ vide n'affiche rien.
3. `public/CV-Alfred-NDri.pdf` : CV de départ généré depuis les données du site, à remplacer par ton vrai CV (même nom de fichier).
4. `src/data.js` → `CAREER` : complète les descriptions « . » (Bac D, BTS 1).
