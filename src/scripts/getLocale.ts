const Languages = {
	ES: 'es-419',
  	EN: 'en-US',
}

export const getLocale = (locale: string) => {
	const language = locale.trim().toUpperCase()
	
	if(Object.keys(Languages).includes(language)) {
		//@ts-ignore
		return Languages[language]
	} else {
		return Languages.EN
	}
}