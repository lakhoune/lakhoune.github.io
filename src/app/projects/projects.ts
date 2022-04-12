import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    title: 'Social Bot Framework',
    subtitle: 'Bot modeling and development',
    previewImgSrc: 'assets/sbf-preview.webp',
    page: {
      href: 'https://sbf-dev.tech4comp.dbis.rwth-aachen.de',
      description:
        'A framework for building bots for social media platforms. It allows for intuitive approach to bot development',
    },
    source: {
      href: 'https://github.com/rwth-acis/Social-Bot-Framework',
    },
  },
  {
    title: 'MobSOS Evaluation Center',
    subtitle: 'Community Analytics',
    previewImgSrc: 'assets/mobsos-preview.webp',
    page: {
      href: 'https://sbf-dev.tech4comp.dbis.rwth-aachen.de/monitor/join/63e2005b47421f5f94b0e8a841985d120e1ac814b57686a0570a66ec1df7d791f38f5628fc74a1cb93c819a89d5ba6fab4f355cf22ada3bb9f6a387473fabd6c/i5.las2peer.services.mensaService.MensaService/lakhoune',
      description:
        'MobSOS is a framework for community information systems (CIS) success modeling. The goal is to increase success awareness in a community.',
    },
    source: {
      href: 'https://github.com/rwth-acis/mobsos-evaluation-center',
    },
  },
  {
    title: 'StudyGrow Cards',
    subtitle: 'Digital Flashcards',
    previewImgSrc: 'assets/cards-preview.webp',
    page: {
      href: 'https://cards.lakhoune.com/',
      description:
        'This application can be used to create flashcards and share them with the community',
    },
  },
];
