export const experiences: ExperienceYear[] = [
  {
    year: 2022,
    experiences: [
      { title: 'Bachelors Degree', date: new Date('2022-02-07') },
      {
        title: 'Celonis Hackathon at digitalCHURCH ',
        date: new Date('2022-04-29'),
      },
      {
        title: 'Practical Lab at E.ON',
        date: new Date('2022-08-01'),
      },
    ],
  },
  {
    year: 2021,
    experiences: [
      {
        title: 'Work as research assistant at RWTH Aachen University',
        date: new Date('2021-01-05'),
      },
      {
        title: 'Work as webmaster for the AVL academic circle',
        date: new Date('2021-10-31'),
      },
    ],
  },
  {
    year: 2020,
    experiences: [
      { title: 'Launch of Cards webpage', date: new Date('2020-02-07') },
    ],
  },
];

export interface ExperienceYear {
  year: number;
  experiences?: Experience[];
}
export interface Experience {
  title: string;
  subtitle?: string;
  date?: Date;
}
