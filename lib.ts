type version = 6 | 7 | 8 | 9 | string

export interface Lib {
	name: string
	url: string
	language: string
	apiVer: version
	gwVer: version
	slashCommands: string
	buttons: string
	selectMenus: string
	threads: string
	guildStickers: string
	contextMenus: string
}
