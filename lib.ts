type version = 6 | 7 | 8 | 9 | 10 | string
type voiceVersion = "-" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | "E2EE" | string
export type LinkableString = string | { text: string; url: string }

export interface Lib {
	name: string
	url: string
	language: string
	apiVer: version
	gwVer: version
	voiceVer: voiceVersion
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
	forums: LinkableString
	monetization: LinkableString
	userApps: LinkableString
	polls: LinkableString
	forwarding: LinkableString
	appEmoji: LinkableString
}
