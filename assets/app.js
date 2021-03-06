"use strict"

import React from 'react';
import { render } from 'react-dom';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import resources from '../locales/resources';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vi",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

const endpoint = window._env_data.endpoint;

import AccountClient from '@realmjs/account-client';

const acc = new AccountClient({
  app: 'coursestore',
  baseurl: endpoint.account,
  session: '_r_s_sess_',
});

acc
  .on('authenticating', () => { console.log('--> authenticating...'); })
  .on('authenticated', user => { console.log(`--> authenticated`); console.log(user); })
  .on('unauthenticated', () => { console.log('--> unauthenticated'); })

acc.sso();

import Webapp from '../Webapp';
import { fetch } from '../lib/request';

Promise.all([
  fetch(endpoint.programs),
  fetch(endpoint.courses),
  fetch(endpoint.promotions),
])
.then(data => {
  const [programs, courses, promotions] = data;
  render(<Webapp accountClient = {acc} programs = {programs} courses = {courses} promotions = {promotions} />, document.getElementById('root'));
})
.catch(err => console.log(err));

