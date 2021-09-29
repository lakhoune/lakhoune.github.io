import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    title: 'MobSOS Evaluation Center',
    subtitle: 'Community Analytics',
    previewImgSrc: 'assets/mobsos-preview.png',
    page: {
      href: 'https://sbf-dev.tech4comp.dbis.rwth-aachen.de/monitor/join/cb276112c6c7f5e1bbf11a4b136c6f44bcd36bcbb69ecb59274a4f71ee51eadd06cf3b6ca5e50ca154d8680e4d7a081265741f039da19c19f6dd176c82b03a87/i5.las2peer.services.tmitocar.TmitocarService/lakhoune',
      description: 'Current Project',
    },
    source: {
      href: 'https://github.com/rwth-acis/mobsos-evaluation-center',
    },
  },
  {
    title: 'StudyGrow Cards',
    subtitle: 'Digital Flashcards',
    previewImgSrc: 'assets/cards-preview.png',
    page: {
      href: 'https://studydrive.me',
      description:
        'Past Project. This application can be used to create flashcards and share them with the community',
    },
  },
];
