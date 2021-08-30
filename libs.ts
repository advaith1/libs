import { Lib } from "./lib";

// the data powering the chart
// please keep in the same order as Discord's docs (https://discord.dev/topics/community-resources#libraries-discord-libraries):
// sort language alphabetically and then name alphabetically

export const libs: Lib[] = [
	{
		name: 'D++',
		url: 'https://github.com/brainboxdotcc/DPP',
		language: 'C++',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes'
	},
	{
		name: 'disgo',
		url: 'https://github.com/DisgoOrg/disgo',
		language: 'Go',
		apiVer: 8,
		gwVer: 8,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: {
			text: 'Has a PR',
			url: 'https://github.com/DisgoOrg/disgo/pull/17'
		},
		guildStickers: {
			text: 'Has a PR',
			url: 'https://github.com/DisgoOrg/disgo/pull/63'
		},
		contextMenus: 'Yes'
	},
	{
		name: 'Calamity',
		url: 'https://github.com/simmsb/calamity',
		language: 'Haskell',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No'
	},
	{
		name: 'JDA',
		url: 'https://github.com/DV8FromTheWorld/JDA',
		language: 'Java',
		apiVer: 8,
		gwVer: 8,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: {
			text: 'Has a PR',
			url: 'https://github.com/DV8FromTheWorld/JDA/pull/1613'
		},
		guildStickers: 'No',
		contextMenus: {
			text: 'Has a PR',
			url: 'https://github.com/DV8FromTheWorld/JDA/pull/1769'
		}
	},
	{
		name: 'Discord4J',
		url: 'https://github.com/Discord4J/Discord4J',
		language: 'Java',
		apiVer: '6 stable, 8 dev',
		gwVer: '6 stable, 8 dev',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: {
			text: 'Has PRs',
			url: 'https://github.com/Discord4J/Discord4J/issues/958'
		},
		guildStickers: 'No',
		contextMenus: 'No'
	},
	{
		name: 'discord.js',
		url: 'https://github.com/discordjs/discord.js',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes'
	},
	{
		name: 'Eris',
		url: 'https://github.com/abalabahaha/eris',
		language: 'JavaScript',
		apiVer: '7 stable, 8 dev',
		gwVer: '6 stable, 8 dev',
		slashCommands: {
			text: 'Has a PR',
			url: 'https://github.com/abalabahaha/eris/pull/1210'
		},
		buttons: {
			text: 'Has PRs',
			url: 'https://github.com/abalabahaha/eris/pull/1189'
		},
		selectMenus: {
			text: 'Has PRs',
			url: 'https://github.com/abalabahaha/eris/pull/1189'
		},
		threads: {
			text: 'Has a PR',
			url: 'https://github.com/abalabahaha/eris/pull/1216'
		},
		guildStickers: {
			text: 'Has a PR',
			url: 'https://github.com/abalabahaha/eris/pull/1258'
		},
		contextMenus: {
			text: 'Has a PR',
			url: 'https://github.com/abalabahaha/eris/pull/1210'
		}
	},
	{
		name: 'Detritus',
		url: 'https://github.com/detritusjs/client',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes'
	},
	{
		name: 'Kord',
		url: 'https://github.com/kordlib/kord',
		language: 'Kotlin',
		apiVer: '8 stable, 9 dev',
		gwVer: '8 stable, 9 dev',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Dev Version',
		guildStickers: {
			text: 'Has a PR',
			url: 'https://github.com/kordlib/kord/pull/328'
		},
		contextMenus: {
			text: 'Has a PR',
			url: 'https://github.com/kordlib/kord/pull/366'
		}
	},
	{
		name: 'discord.py',
		url: 'https://github.com/Rapptz/discord.py',
		language: 'Python',
		apiVer: '7 stable, 8 dev',
		gwVer: '6 stable, 9 dev',
		slashCommands: 'No',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'Dev Version',
		guildStickers: 'Dev Version',
		contextMenus: 'No'
	},
	{
		name: 'Serenity',
		url: 'https://github.com/serenity-rs/serenity',
		language: 'Rust',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: {
			text: 'Has a PR',
			url: 'https://github.com/serenity-rs/serenity/pull/1460'
		}
	}
]
