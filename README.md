# Générateur METCON

Application web qui génère aléatoirement un METCON de cross training (AMRAP, EMOM, For Time) à partir de quelques critères : durée, nombre de mouvements, équipement disponible.

Pas de compte, pas de sauvegarde, pas de backend. Tout le calcul se fait localement dans le navigateur.

**Démo :** [norep.org](https://norep.org)

---

## Fonctionnalités

- **Trois formats** : AMRAP, EMOM (single ou multi-mouvements), For Time (rounds ou descending type 21-15-9).
- **Paramètres ajustables** : durée (4 à 40 min), nombre de mouvements (2 à 6), mix équilibré des catégories (gymnastics / weightlifting / monostructural).
- **Filtre équipement** avec raccourcis (Tous / Aucun / Poids du corps).
- **41 mouvements** couvrant les trois catégories du cross training, avec charges Rx homme/femme quand applicable.
- Mobile first, responsive, safe areas (écrans à bords incurvés).
- Aucune donnée personnelle collectée. Seule la fréquentation de la page est mesurée de façon anonyme via [Matomo](https://matomo.org/) (pas de cookie, conforme aux recommandations de la CNIL).

## Structure du projet

```
index.html    # structure de la page, meta SEO, Schema.org, FAQ
style.css     # variables CSS, layout, composants, responsive
script.js     # données des mouvements, moteur de génération, rendu, interactions
```

Aucun framework, aucune étape de build. Seule dépendance externe : les polices (Bebas Neue, DM Sans, DM Mono), chargées depuis Google Fonts.

## Utilisation en local

Cloner le dépôt puis ouvrir `index.html` dans un navigateur, ou servir le dossier avec un serveur statique :

```bash
git clone https://github.com/badconf/norep.git
cd norep
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Licence

Ce projet est publié sous licence **BSD-3-Clause**. Voir le texte complet : [opensource.org/license/bsd-3-clause](https://opensource.org/license/bsd-3-clause).
