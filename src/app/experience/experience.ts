export const experiences: ExperienceYear[] = [
  {
    year: 2022,
    experiences: [{ title: 'Bachelors Degree', date: new Date('2022-02-09') }],
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
      { title: 'Launch of Cards page', date: new Date('2020-02-07') },
    ],
  },
  { year: 2019 },
  { year: 2018 },
  {
    year: 2017,
    experiences: [
      { title: 'Highschool Graduation' },
      { title: 'Starting University' },
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
