export interface CVFile {
	metadata: Metadata;
	sys: Sys;
	fields: Fields;
}
export interface Metadata {
	tags?: null[] | null;
}
export interface Sys {
	space: SpaceOrEnvironment;
	type: string;
	id: string;
	revision: number;
	createdAt: string;
	updatedAt: string;
	environment: SpaceOrEnvironment;
	locale: string;
}
export interface SpaceOrEnvironment {
	sys: Sys1;
}
export interface Sys1 {
	type: string;
	linkType: string;
	id: string;
}
export interface Fields {
	title: string;
	file: File;
}
export interface File {
	url: string;
	details: Details;
	fileName: string;
	contentType: string;
}
export interface Details {
	size: number;
}
