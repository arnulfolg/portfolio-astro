
export const isPathRoot = (pathname: string) => {
	if(pathname === '/en/' || pathname === '/es/') {
		return true
	} else {
		return false
	}
}