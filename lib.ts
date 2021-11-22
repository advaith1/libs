type version = 6 | 7 | 8 | 9 | string
export type LinkableString = string | { text: string; url: string }
export interface ListAppCommands {
	slashCommands: LinkableString,
	contextMenus: LinkableString,
	autocomplete: LinkableString
}
export interface ListMessageComponents {
	buttons: LinkableString,
	selectMenus: LinkableString
}

export interface Lib {
	name: string
	url: string
	language: string
	apiVer: version
	gwVer: version
	applicationCommands: ListAppCommands
	messageComponents: ListMessageComponents
	threads: LinkableString
	guildStickers: LinkableString
}
