import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    title: 'Automatic Conformance Checking',
    previewImgSrc: 'assets/acc.png',
    page: {
      href: 'https://pyinsights.tech/',
      description:
        'A framework providing automatic conformance diagnostics on event logs uploaded to Celonis. (A Celonis account and application key is required)',
    },
    source: {
      href: 'https://github.com/lakhoune/Automatic-Conformance-Checking',
    },
  },
  {
    title: 'Social Bot Framework',
    subtitle: 'Bot modeling and development',
    previewImgSrc: 'assets/sbf-preview.webp',
    page: {
      href: 'https://sbf-dev.tech4comp.dbis.rwth-aachen.de',
      description:
        'A framework for building bots for social media platforms. It provides an intuitive approach to bot development',
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
      href: 'https://monitor.tech4comp.dbis.rwth-aachen.de/welcome',
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
      href: 'https://studygrow-cards.herokuapp.com/',
      description:
        'This application can be used to create flashcards and share them with the community',
    },
  },
];
