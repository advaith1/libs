import Head from 'next/head'
import { LinkableString } from '../lib'

import { libs } from '../libs'

const langs = Array.from(new Set(libs.map(lib => lib.language).sort()))

const statusColors = {
	Yes: 'green',
	No: 'red'
}

const status = (status: LinkableString) => typeof status === 'string'
	? <td className={statusColors[status] ?? 'yellow'}>{status}</td>
	: <td className={statusColors[status.text] ?? 'yellow'}><a href={status.url} target="_blank" rel="noopener">{status.text}</a></td>

const versionColors = {
	6: 'red',
	7: 'red',
	8: 'yellow',
	9: 'green',
	10: 'green',
	'-': 'gray'
}

const version = (version: number | string) =>
	<td className={versionColors[version] ?? ((typeof version === 'string' && version.startsWith('9')) ? 'green' : 'yellow')}>{version}</td>

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Discord API Library Comparisons</title>
				<meta name="description" content="Compares Discord libraries and their support of new API features" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="color-scheme" content="dark" />
			</Head>

			<main>
				<h1 id="title" className="title has-text-white mb-6">
					Discord API Library Comparisons
				</h1>

				{langs.map(lang => <div key={lang} className="mb-5 fw">
					<h2 id={lang.toLowerCase()} className="title is-4 mb-3 has-text-white"><a href={'#' + encodeURIComponent(lang.toLowerCase())}>{lang}</a></h2>

					<div className="table-container">
						<table className="table is-bordered has-text-centered has-text-white fw">
							<thead>
								<tr>
									<th>Library</th>
									<th>API Version</th>
									<th>Gateway Version</th>
									<th>Slash Commands</th>
									<th>Buttons</th>
									<th>Select Menus</th>
									<th>Threads</th>
									<th>Guild Stickers</th>
									<th>Context Menus</th>
									<th>Autocomplete</th>
									<th>Scheduled Events</th>
									<th>Timeouts</th>
									<th>Modals</th>
									<th>Perms v2</th>
									<th>AutoMod</th>
									<th>Localization</th>
									<th>Forums</th>
									<th>Monetization</th>
									<th>User Apps</th>
									<th>Polls</th>
									<th>Forwarding</th>
									<th>App Emoji</th>
								</tr>
							</thead>
							<tbody>
								{libs.filter(lib => lib.language === lang).map(lib => 
									<tr key={lib.name}>
										<td><a href={lib.url} target="_blank" rel="noopener">{lib.name}</a></td>
										{version(lib.apiVer)}
										{version(lib.gwVer)}
										{status(lib.slashCommands)}
										{status(lib.buttons)}
										{status(lib.selectMenus)}
										{status(lib.threads)}
										{status(lib.guildStickers)}
										{status(lib.contextMenus)}
										{status(lib.autocomplete)}
										{status(lib.scheduledEvents)}
										{status(lib.timeouts)}
										{status(lib.modals)}
										{status(lib.permsv2)}
										{status(lib.automod)}
										{status(lib.localization)}
										{status(lib.forums)}
										{status(lib.monetization)}
										{status(lib.userApps)}
										{status(lib.polls)}
										{status(lib.forwarding)}
										{status(lib.appEmoji)}
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>)}
			</main>

			<footer className="has-text-centered has-text-white">
				Created by <a href="https://advaith.io" target="_blank" rel="noopener">advaith</a><br />
				<a href="https://github.com/advaith1/libs" target="_blank" rel="noopener">Contribute data on GitHub</a><br />
				Not affiliated with Discord or any library<br />
			</footer>

			<style jsx>{`
				.container {
					min-height: 100vh;
					padding: 0 0.5rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					max-width: 100%;
				}

				footer {
					width: 100%;
					height: 100px;
					justify-content: center;
					align-items: center;
				}

				#title {
					margin: 0;
					line-height: 1.15;
					font-size: 4rem;
				}

				#title,
				.description {
					text-align: center;
				}

				.logo {
					height: 1em;
				}

				.table th {
					color: white;
					font-weight: 500;
					text-align: center !important;
				}

				table, tr > :first-child {
					background: #32353b;
				}

				.fw {
					width: 100%;
				}

				@media (max-width: 768px) {
					#title {
						font-size: 3rem;
					}
				}
				
				h2 a {
					color: white;
				}

				tr > :first-child {
					position: sticky;
					left: 0;
				}

				tr > :first-child:after,
				tr > :first-child:before {
					content: '';
					position: absolute;
					top: 0;
					height: 100%;
				}

				tr > :first-child:before {
					left: -0.6px;
					border-left: 1px solid #4f545c;
				}

				tr > :first-child:after {
					right: -1px;
					border-right: 1px solid #4f545c;
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
					background: #36393f;
				}

				a {
					color: #00aff4;
				}

				a:hover {
					color: #00aff4;
					text-decoration: underline;
				}

				.table td, .table th {
					border-color: #4f545c;
				}

				.green {
					background-color: #2f834a;
				}

				.yellow {
					background-color: #6e5b0f;
				}

				.yellow a {
					color: #99e2ff
				}

				.red {
					background-color: #a82426;
				}

				.gray {
					background-color: #40444b;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	)
}
