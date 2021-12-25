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
	9: 'green'
}

const version = (version: number | string) => <td className={versionColors[version] ?? 'yellow'}>{version}</td>

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Discord API Library Comparisons</title>
				<meta name="description" content="Compares Discord libraries and their support of new API features" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<main>
				<h1 id="title" className="title has-text-white mb-6">
					Discord API Library Comparisons
				</h1>

				{langs.map(lang => <div key={lang} className="mb-4 fw">
					<h2 id={lang.toLowerCase()} className="title is-4 mb-3 has-text-white">{lang}</h2>

					<div className="table-container">
						<table className="table is-bordered mb-4 has-text-centered has-text-white fw">
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
				}

				table {
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

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	)
}
