import type { EntryFieldTypes } from 'contentful';

export interface ContentfulTitles {
	contentTypeId: 'cvTitle';
	fields: {
		title: EntryFieldTypes.Text;
		tagline: EntryFieldTypes.Text;
	};
}

export interface CVTitles {
	sys: Sys;
	total: number;
	skip: number;
	limit: number;
	items: ItemsEntity[];
}
export interface Sys {
	type: string;
}
export interface ItemsEntity {
	metadata: Metadata;
	sys: Sys1;
	fields: Fields;
}
export interface Metadata {
	tags?: null[] | null;
}
export interface Sys1 {
	space: SpaceOrContentTypeOrEnvironment;
	type: string;
	id: string;
	contentType: SpaceOrContentTypeOrEnvironment;
	revision: number;
	createdAt: string;
	updatedAt: string;
	environment: SpaceOrContentTypeOrEnvironment;
	locale: string;
}
export interface SpaceOrContentTypeOrEnvironment {
	sys: Sys2;
}
export interface Sys2 {
	type: string;
	linkType: string;
	id: string;
}
export interface Fields {
	title: string;
	tagline: string;
}
