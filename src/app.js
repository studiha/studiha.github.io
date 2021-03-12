"use strict"

const config = {
  language: 'vi',
  app: 'dev',
  endpoint: {
    account: 'https://studiha.github.io',
    programs: 'https://studiha.github.io/api/programs.json',
    courses: 'https://studiha.github.io/api/courses',
    promotions: 'https://studiha.github.io/api/promotions.json',
    logo: 'https://studiha.github.io/public/img/logo.png',
  },
};

import app from '@studiha/coursestore-webapp';

app(config);
