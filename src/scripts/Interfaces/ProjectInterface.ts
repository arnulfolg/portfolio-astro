export interface ContentfulProject {
	contentTypeId: 'portfolio';
	fields: {
	};
}

export interface CVProject {
  metadata: Metadata;
  sys: Sys;
  fields: Fields;
}
export interface Metadata {
  tags?: (null)[] | null;
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
  project_name: string;
  tumbnail: GalleryEntityOrTumbnailOrSummaryPictureOrIaPicture;
  client: string;
  role: string;
  time: string;
  summary: string;
  summaryPicture: GalleryEntityOrTumbnailOrSummaryPictureOrIaPicture;
  description: string;
  iaPicture: GalleryEntityOrTumbnailOrSummaryPictureOrIaPicture;
  gallery: (GalleryEntityOrTumbnailOrSummaryPictureOrIaPicture)[];
  takeaway: string;
}
export interface GalleryEntityOrTumbnailOrSummaryPictureOrIaPicture {
  metadata: Metadata;
  sys: Sys2;
  fields: Fields1;
}
export interface Sys2 {
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
