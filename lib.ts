type version = 6 | 7 | 8 | 9 | 10 | string
export type LinkableString = string | { text: string; url: string }

export interface Lib {
	name: string
	url: string
	language: string
	apiVer: version
	gwVer: version
	slashCommands: LinkableString
	buttons: LinkableString
	selectMenus: LinkableString
	threads: LinkableString
	guildStickers: LinkableString
	contextMenus: LinkableString
	autocomplete: LinkableString
	scheduledEvents: LinkableString
	timeouts: LinkableString
	modals: LinkableString
	permsv2: LinkableString
	automod: LinkableString
	localization: LinkableString
	forums: LinkableString,
	selectMenusv2: LinkableString
}
