import Ajv from 'ajv';
import portfolioConfig from './portfolio.config.json';
import portfolioSchema from './portfolio.schema.json';

const ajv = new Ajv({ allErrors: true, strict: false });
const validatePortfolio = ajv.compile(portfolioSchema);

const isValidPortfolio = validatePortfolio(portfolioConfig);

if (!isValidPortfolio) {
  throw new Error(
    `Portfolio config validation failed: ${JSON.stringify(validatePortfolio.errors, null, 2)}`
  );
}

export const portfolio = portfolioConfig;
export const profile = portfolio.profile;
export const summary = portfolio.summary;
export const projects = portfolio.projects;
export const experience = portfolio.experience.jobs;
export const skills = portfolio.skills;
export const education = portfolio.education;
export const certifications = portfolio.certifications;
