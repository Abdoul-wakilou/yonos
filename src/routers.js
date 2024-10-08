import MonCompteComponent from './components/MonCompteComponent.vue'
import AccueilComponent from './components/AccueilComponent.vue'
import ObjectifComponent from './components/ObjectifComponent.vue'
import AssurranceComponent from './components/AssurranceComponent.vue'
import FormationComponent from './components/FormationComponent.vue'
import AstuceComponent from './components/AstuceComponent.vue'
import InscriptionComponent from './components/InscriptionComponent.vue'
import CommencerComponent from './components/CommencerComponent.vue'
import DevisComponent from './components/DevisComponent.vue'
import ContratComponent from './components/ContratComponent.vue'
import ComprendreAssurranceComponent from './components/ComprendreAssurranceComponent.vue'
import ContexteComponent from './components/ContexteComponent.vue'
import CalendrierComponent from './components/CalendrierComponent.vue'
import TemoignageComponent from './components/TemoignageComponent.vue'
import ResultatComponent from './components/ResultatComponent.vue'



import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Accueil',
        component: AccueilComponent,
        path: '/'
    },
    {
        name: 'MonCompte',
        component: MonCompteComponent,
        path: '/mon-compte'
    },
    {
        name: 'Contexte',
        component: ContexteComponent,
        path: '/contexte'
    },
    {
        name: 'resultat',
        component: ResultatComponent,
        path: '/resultat'
    },
    {
        name: 'Objectif',
        component: ObjectifComponent,
        path: '/objectif'
    },
    {
        name: 'Assurance',
        component: AssurranceComponent,
        path: '/assurrance'
    },
    {
        name: 'Formation',
        component: FormationComponent,
        path: '/formation'
    },
    {
        name: 'Astuce',
        component: AstuceComponent,
        path: '/astuce'
    },
    {
        name: 'Inscription',
        component: InscriptionComponent,
        path: '/inscription'
    },
    {
        name: 'Commencer',
        component: CommencerComponent,
        path: '/commencer'
    },
    {
        name: 'Devis',
        component: DevisComponent,
        path: '/devis'
    },
    {
        name: 'Contrat',
        component: ContratComponent,
        path: '/contrat'
    },
    {
        name: 'ComprendreAssurance',
        component: ComprendreAssurranceComponent,
        path: '/comprendre-assurance'
    },
    {
        name: 'CalendrierComponent',
        component: CalendrierComponent,
        path: '/calendrier'
    },
    {
        name: 'TemoignageComponent',
        component: TemoignageComponent,
        path: '/temoignage'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
