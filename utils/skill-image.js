
import angular from '../app/assets/svg/skills/angular.svg';
import aws from '../app/assets/svg/skills/aws.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';

import c from '../app/assets/svg/skills/c.svg';
import canva from '../app/assets/svg/skills/canva.svg';

import cplusplus from '../app/assets/svg/skills/cplusplus.svg';

import css from '../app/assets/svg/skills/css.svg';

import docker from '../app/assets/svg/skills/docker.svg';

import figma from '../app/assets/svg/skills/figma.svg';

import git from '../app/assets/svg/skills/git.svg';

import html from '../app/assets/svg/skills/html.svg';

import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';

import markdown from '../app/assets/svg/skills/markdown.svg';

import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import python from '../app/assets/svg/skills/python.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import pandas from '../app/assets/svg/skills/pandas.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'docker':
      return docker;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'tailwind':
      return tailwind;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'java':
      return java;
    case 'python':
      return python;
    case 'aws':
      return aws;
    case 'git':
      return git;
    case 'azure':
    case 'figma':
      return figma;
    case 'markdown':
      return markdown;
    case 'canva':
      return canva;
    case 'pandas':
      return pandas;
    default:
      break;
  }
}
