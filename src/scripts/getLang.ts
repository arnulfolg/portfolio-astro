export const getLang = (pathname: string) => {
	return pathname.split('/')[1];
};
