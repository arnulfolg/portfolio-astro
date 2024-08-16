import type { EntryFieldTypes } from 'contentful';
import { contentfulClient } from '../lib/contentful';
import type {
	ContentfulAboutCollection,
	CVAbout,
} from './Interfaces/AboutInterface';
import type { ContentfulCertificationCollection, CVCertificationCollection } from './Interfaces/CertificationInterface';
import type {
	ContentfulEducationCollection,
	CVEducation,
} from './Interfaces/EducationInterface';
import type { CVFile } from './Interfaces/FileInterface';
import type {
	ContentfulHeaders,
	CVHeading,
} from './Interfaces/HeaderInterfaces';
import type {
	ContentfulPortfolioCollection,
	CVPortfolio,
} from './Interfaces/PortfolioInterface';
import type {
	CVSkills,
	CVSkillsCollection,
} from './Interfaces/SkillsInterface';
import type { ContentfulTitles, CVTitles } from './Interfaces/TitlesInterfaces';
import type { ContentfulDegreeCollection, CVDegree } from './Interfaces/DegreeInterface';
import type { ContentfulProject, CVProject } from './Interfaces/ProjectInterface';

export const getContentHeader = async (id: string, locale: string) => {
	const contentfulEntry = await contentfulClient.getEntry<ContentfulHeaders>(
		id,
		{
			locale,
		}
	);
	return contentfulEntry as unknown as CVHeading;
};

export const getContentTitles = async (locale: string) => {
	const entries = await contentfulClient.getEntries<ContentfulTitles>({
		content_type: 'cvTitle',
		locale,
	});
	return entries as unknown as CVTitles;
};

export const getSkills = async (locale: string) => {
	const entries = await contentfulClient.getEntries<CVSkillsCollection>({
		content_type: 'skills',
		locale,
	});

	return entries as unknown as CVSkills;
};

export const getFile = async (id: string, locale: string) => {
	const downloadfile = await contentfulClient.getAsset(id, {
		locale,
	});

	return downloadfile as unknown as CVFile;
};

export const getEducation = async (locale: string) => {
	const entries =
		await contentfulClient.getEntries<ContentfulEducationCollection>({
			content_type: 'education',
			locale,
			limit: 3,
		});

	return entries as unknown as CVEducation;
};

export const getPortfolio = async (locale: string, limit: number = 12) => {
	const entries =
		await contentfulClient.getEntries<ContentfulPortfolioCollection>({
			content_type: 'portfolio',
			locale,
			limit
		});

	return entries as unknown as CVPortfolio;
};

export const getAbout = async (locale: string) => {
	const entries =
		await contentfulClient.getEntries<ContentfulAboutCollection>({
			content_type: 'aboutMe',
			locale: locale,
		});

	return entries as unknown as CVAbout;
};

export const getCertificationCollection = async (locale: string) => {
	const entries =
		await contentfulClient.getEntries<ContentfulCertificationCollection>({
			content_type: 'education',
			locale: locale,
		});

	return entries as unknown as CVCertificationCollection;
};

export const getDegrees = async (locale: string) => {
	const entries =
		await contentfulClient.getEntries<ContentfulDegreeCollection>({
			content_type: 'degree',
			locale: locale,
		});

	return entries as unknown as CVDegree;
};

export const getProject = async (id: string, locale: string) => {
	const contentfulProject = await contentfulClient.getEntry<ContentfulProject>(
		id,
		{
			locale,
		}
	);

	return contentfulProject as unknown as CVProject;
};
