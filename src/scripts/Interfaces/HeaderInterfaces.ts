export interface ContentfulHeaders {
	contentTypeId: 'headings';
	fields: {
	};
}

export interface CVHeading {
	metadata: Metadata;
	sys: Sys;
	fields: Fields;
}
export interface Metadata {
	tags?: null[] | null;
}
export interface Sys {
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
	sys: Sys1;
}
export interface Sys1 {
	type: string;
	linkType: string;
	id: string;
}
export interface Fields {
	heading: string;
}
