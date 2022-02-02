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
      href: 'https://sbf-dev.tech4comp.dbis.rwth-aachen.de/monitor/join/70ed3c02f918ea91605a02e79c1fdde08e329ba1c2f64ddc556e5542aba40fbefdfa0f4aee8a9d80dc1942dce76d9ba93d667bc54bce4c0674eba5629701e391/i5.las2peer.services.mensaService.MensaService/lakhoune',
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
      href: 'https://studydrive.me',
      description:
        'This application can be used to create flashcards and share them with the community',
    },
  },
];
