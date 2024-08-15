import { contentfulClient } from "../lib/contentful";
import type { ContentfulEducationCollection, CVEducation } from "./Interfaces/EducationInterface";
import type { CVFile } from "./Interfaces/FileInterface";
import type { ContentfulHeaders, CVHeading } from "./Interfaces/HeaderInterfaces";
import type { ContentfulPortfolioCollection, CVPortfolio } from "./Interfaces/PortfolioInterface";
import type { CVSkills, CVSkillsCollection } from "./Interfaces/SkillsInterface";
import type { ContentfulTitles, CVTitles } from "./Interfaces/TitlesInterfaces";

export const getContentHeader = async (id: string, locale: string) => {
	const contentfulEntry = await contentfulClient.getEntry<ContentfulHeaders>(id, {
		locale
	});
	return contentfulEntry as unknown as CVHeading
}

export const getContentTitles = async (locale: string) => {
	const entries = await contentfulClient.getEntries<ContentfulTitles>({
		content_type: "cvTitle",
		locale
	});
	return entries as unknown as CVTitles
}

export const getSkills = async (locale: string) => {
	const entries = await contentfulClient.getEntries<CVSkillsCollection>({
		content_type: "skills",
		locale
	});

	return entries as unknown as CVSkills
}

export const getFile = async (id: string, locale: string) => {
	const downloadfile = await contentfulClient.getAsset(id, {
		locale
	});

	return downloadfile as unknown as CVFile
}

export const getEducation = async (locale: string) => {
	const entries = await contentfulClient.getEntries<ContentfulEducationCollection>({
		content_type: "education",
		locale,
		limit: 3
	});

	return entries as unknown as CVEducation
}

export const getPortfolio = async (locale: string) => {
	const entries = await contentfulClient.getEntries<ContentfulPortfolioCollection>({
		content_type: "portfolio",
		locale,
		limit: 3
	});

	return entries as unknown as CVPortfolio
}
