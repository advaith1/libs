import { Lib } from "./lib";

// the data powering the chart
// please keep in the same order as Discord's docs (https://discord.dev/topics/community-resources#libraries-discord-libraries):
// sort language alphabetically and then name alphabetically

export const libs: Lib[] = [
	{
		name: 'Orca',
		url: 'https://github.com/cee-studio/orca',
		language: 'C',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'No',
		contextMenus: 'Yes',
		autocomplete: 'No',
		scheduledEvents: 'No'
	},
	{
		name: 'Discord.Net',
		url: 'https://github.com/discord-net/Discord.Net',
		language: 'C#',
		apiVer: '6 stable, 9 dev',
		gwVer: '6 stable, 9 dev',
		slashCommands: 'Dev Version',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'Dev Version',
		guildStickers: 'Dev Version',
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: 'Dev Version'
	},
	{
		name: 'Discord.Net Labs',
		url: 'https://github.com/Discord-Net-Labs/Discord.Net-Labs',
		language: 'C#',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes'
	},
	{
		name: 'DSharpPlus',
		url: 'https://github.com/DSharpPlus/DSharpPlus',
		language: 'C#',
		apiVer: '8 stable, 9 dev',
		gwVer: '8 stable, 9 dev',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Dev Version',
		guildStickers: 'Yes',
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/DSharpPlus/DSharpPlus/pull/1165'
		}
	},
	{
		name: 'DisCatSharp',
		url: 'https://github.com/Aiko-IT-Systems/DisCatSharp',
		language: 'C#',
		apiVer: '9',
		gwVer: '9',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes'
	},
	{
		name: 'Remora.Discord',
		url: 'https://github.com/Nihlus/Remora.Discord',
		language: 'C#',
		apiVer: '8 stable, 9 dev',
		gwVer: '8 stable, 9 dev',
		slashCommands: 'Yes',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'Dev Version',
		guildStickers: 'Dev Version',
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: 'Dev Version'
	},
	{
		name: 'aegis.cpp 🪦',
		url: 'https://github.com/zeroxs/aegis.cpp',
		language: 'C++',
		apiVer: 6,
		gwVer: 6,
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No'
	},
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
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes'
	},
	{
		name: 'Discord++',
		url: 'https://github.com/DiscordPP/discordpp',
		language: 'C++',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'No',
		scheduledEvents: 'No'
	},
	{
		name: 'Sleepy Discord',
		url: 'https://github.com/yourWaifu/sleepy-discord',
		language: 'C++',
		apiVer: '6 stable, 8 dev',
		gwVer: '6 stable, 8 dev',
		slashCommands: 'Dev Version',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No'
	},
	{
		name: 'discljord',
		url: 'https://github.com/discljord/discljord',
		language: 'Clojure',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'No'
	},
	{
		name: 'discordcr',
		url: 'https://github.com/shardlab/discordcr',
		language: 'Crystal',
		apiVer: '6 stable, 9 dev',
		gwVer: '6 stable, 9 dev',
		slashCommands: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		buttons: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		selectMenus: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		threads: 'Dev Version',
		guildStickers: 'No',
		contextMenus: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		autocomplete: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		scheduledEvents: 'No'
	},
	{
		name: 'nyxx',
		url: 'https://github.com/nyxx-discord/nyxx',
		language: 'Dart',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/nyxx-discord/nyxx/pull/248'
		}
	},
	{
		name: 'coxir',
		url: 'https://github.com/satom99/coxir',
		language: 'Elixir',
		apiVer: 9,
		gwVer: 8,
		slashCommands: 'No',
		buttons: 'Yes',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No'
	},
	{
		name: 'Nostrum',
		url: 'https://github.com/Kraigie/nostrum',
		language: 'Elixir',
		apiVer: '7 stable, 8 dev',
		gwVer: '6 stable, 8 dev',
		slashCommands: 'Dev Version',
		buttons: {
			text: 'Has a PR',
			url: 'https://github.com/Kraigie/nostrum/pull/357'
		},
		selectMenus: {
			text: 'Has a PR',
			url: 'https://github.com/Kraigie/nostrum/pull/357'
		},
		threads: 'Dev Version',
		guildStickers: 'No',
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: 'No'
	},
	{
		name: 'arikawa',
		url: 'https://github.com/diamondburned/arikawa',
		language: 'Go',
		apiVer: '8 stable, 9 dev',
		gwVer: '8 stable, 9 dev',
		slashCommands: 'Dev Version',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: 'No'
	},
	{
		name: 'DiscordGo',
		url: 'https://github.com/bwmarrin/discordgo',
		language: 'Go',
		apiVer: 8,
		gwVer: 8,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: {
			text: 'Has a PR',
			url: 'https://github.com/bwmarrin/discordgo/pull/982'
		},
		guildStickers: {
			text: 'Has a PR',
			url: 'https://github.com/bwmarrin/discordgo/pull/982'
		},
		contextMenus: 'Yes',
		autocomplete: {
			text: 'Has a PR',
			url: 'https://github.com/bwmarrin/discordgo/pull/1014'
		},
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/bwmarrin/discordgo/pull/1032'
		}
	},
	{
		name: 'disgo',
		url: 'https://github.com/DisgoOrg/disgo',
		language: 'Go',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes'
	},
	{
		name: 'Disgord',
		url: 'https://github.com/andersfylling/disgord',
		language: 'Go',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Dev Version',
		buttons: 'Yes',
		selectMenus: 'No',
		threads: 'Dev Version',
		guildStickers: 'Yes',
		contextMenus: 'Dev Version',
		autocomplete: 'No',
		scheduledEvents: 'No'
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
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No'
	},
	{
		name: 'Discord4J',
		url: 'https://github.com/Discord4J/Discord4J',
		language: 'Java',
		apiVer: '8 stable, 9 dev',
		gwVer: '8 stable, 9 dev',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: {
			text: 'Dev Version',
			url: 'https://github.com/Discord4J/Discord4J/issues/958'
		},
		guildStickers: 'No',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/Discord4J/Discord4J/pull/1046'
		}
	},
	{
		name: 'Javacord',
		url: 'https://github.com/Javacord/Javacord',
		language: 'Java',
		apiVer: 8,
		gwVer: 8,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No'
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
		threads: 'Dev Version',
		guildStickers: 'No',
		contextMenus: {
			text: 'Has a PR',
			url: 'https://github.com/DV8FromTheWorld/JDA/pull/1769'
		},
		autocomplete: {
			text: 'Has a PR',
			url: 'https://github.com/DV8FromTheWorld/JDA/pull/1868'
		},
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/DV8FromTheWorld/JDA/pull/1905'
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
		contextMenus: 'Yes',
		autocomplete: 'Dev Version',
		scheduledEvents: 'No'
	},
	{
		name: 'Discordeno',
		url: 'https://github.com/discordeno/discordeno',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Dev Version'
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
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/discordjs/discord.js/pull/6493'
		}
	},
	{
		name: 'droff',
		url: 'https://github.com/tim-smart/droff',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'No',
		scheduledEvents: 'No'
	},
	{
		name: 'Eris',
		url: 'https://github.com/abalabahaha/eris',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/abalabahaha/eris/pull/1275'
		}
	},
	{
		name: 'Harmony',
		url: 'https://github.com/harmonyland/harmony',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'No'
	},
	{
		name: 'Discord.jl',
		url: 'https://github.com/Xh4H/Discord.jl',
		language: 'Julia',
		apiVer: 6,
		gwVer: 6,
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No'
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
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: 'No'
	},
	{
		name: 'Discordia',
		url: 'https://github.com/SinisterRectus/Discordia',
		language: 'Lua',
		apiVer: '7 stable, 8 dev',
		gwVer: '6 stable, 8 dev',
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No'
	},
	{
		name: 'lacord',
		url: 'https://github.com/Mehgugs/lacord',
		language: 'Lua',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes'
	},
	{
		name: 'Dimscord',
		url: 'https://github.com/krisppurg/dimscord',
		language: 'Nim',
		apiVer: '6, 8, and 9',
		gwVer: '8 and 9',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Dev Version',
		scheduledEvents: 'No'
	},
	{
		name: 'DiscordPHP',
		url: 'https://github.com/discord-php/DiscordPHP',
		language: 'PHP',
		apiVer: 8,
		gwVer: 8,
		slashCommands: 'No',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No'
	},
	{
		name: 'RestCord',
		url: 'https://github.com/restcord/restcord',
		language: 'PHP',
		apiVer: '6 stable, 9 dev',
		gwVer: 'N/A',
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'Dev Version',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/restcord/restcord/pull/166'
		}
	},
	{
		name: 'discord.py 🪦',
		url: 'https://github.com/Rapptz/discord.py',
		language: 'Python',
		apiVer: '7 stable, 8 dev',
		gwVer: '6 stable, 9 dev',
		slashCommands: 'No',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'Dev Version',
		guildStickers: 'Dev Version',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No'
	},
	{
		name: 'hata',
		url: 'https://github.com/HuyaneMatsu/hata',
		language: 'Python',
		apiVer: '6, 7, 8, and 9',
		gwVer: '6, 7, 8, and 9',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'No'
	},
	{
		name: 'hikari',
		url: 'https://github.com/hikari-py/hikari',
		language: 'Python',
		apiVer: 8,
		gwVer: 8,
		slashCommands: 'Yes',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'No',
		guildStickers: 'Yes',
		contextMenus: {
			text: 'Has a PR',
			url: 'https://github.com/hikari-py/hikari/pull/924'
		},
		autocomplete: {
			text: 'Has a PR',
			url: 'https://github.com/hikari-py/hikari/pull/924'
		},
		scheduledEvents: 'No'
	},
	{
		name: 'discord-py-interactions',
		url: 'https://github.com/goverfl0w/discord-interactions',
		language: 'Python',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes'
	},
	{
		name: 'discordrb',
		url: 'https://github.com/shardlab/discordrb',
		language: 'Ruby',
		apiVer: '6 stable, 9 dev',
		gwVer: '6 stable, 9 dev',
		slashCommands: 'Dev Version',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'Dev Version',
		guildStickers: 'Dev Version',
		contextMenus: 'Dev Version',
		autocomplete: 'No',
		scheduledEvents: 'No'
	},
	{
		name: 'discord-rs',
		url: 'https://github.com/SpaceManiac/discord-rs',
		language: 'Rust',
		apiVer: 6,
		gwVer: 6,
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No'
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
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: 'No'
	},
	{
		name: 'Twilight',
		url: 'https://github.com/twilight-rs/twilight',
		language: 'Rust',
		apiVer: 8,
		gwVer: 8,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'No'
	},
	{
		name: 'AckCord',
		url: 'https://github.com/Katrix/AckCord',
		language: 'Scala',
		apiVer: '6 stable, 9 dev',
		gwVer: '6 stable, 9 dev',
		slashCommands: 'Dev Version',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'Dev Version',
		guildStickers: 'Dev Version',
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: 'Dev Version'
	}
]
