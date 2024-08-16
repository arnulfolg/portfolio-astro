export interface ContentfulPortfolioCollection {
	contentTypeId: 'portfolio';
	fields: {};
}

export interface CVPortfolio {
	sys: Sys;
	total: number;
	skip: number;
	limit: number;
	items: ItemsEntity[];
	includes: Includes;
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
	project_name: string;
	tumbnail: GalleryEntityOrTumbnailOrSummaryPictureOrIaPictureOrAssetEntity;
	client: string;
	role: string;
	time: string;
	summary: string;
	summaryPicture: GalleryEntityOrTumbnailOrSummaryPictureOrIaPictureOrAssetEntity;
	description: string;
	iaPicture: GalleryEntityOrTumbnailOrSummaryPictureOrIaPictureOrAssetEntity;
	gallery?:
		| GalleryEntityOrTumbnailOrSummaryPictureOrIaPictureOrAssetEntity[]
		| null;
	takeaway: string;
}
export interface GalleryEntityOrTumbnailOrSummaryPictureOrIaPictureOrAssetEntity {
	metadata: Metadata;
	sys: Sys3;
	fields: Fields1;
}
export interface Sys3 {
	space: SpaceOrContentTypeOrEnvironment;
	type: string;
	id: string;
	revision: number;
	createdAt: string;
	updatedAt: string;
	environment: SpaceOrContentTypeOrEnvironment;
	locale: string;
}
export interface Fields1 {
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
	image: Image;
}
export interface Image {
	width: number;
	height: number;
}
export interface Includes {
	Asset?:
		| GalleryEntityOrTumbnailOrSummaryPictureOrIaPictureOrAssetEntity[]
		| null;
}
