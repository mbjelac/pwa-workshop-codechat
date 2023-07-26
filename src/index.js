import {useState} from "preact/hooks";
import ColorThemeToggle from "./app/color-theme-toggle";
import Install from "./app/install";
import CodeEditor from "./app/code-editor";
import Messaging from "./app/messaging";
import Share from "./app/share";

/*
*  @TODO 1.1
*  		Register sw.js
* */

/* END ********* */

export default function App() {

	const [asideOpen, setAsideOpen] = useState(false);

	const toggleAsideOpen = () => {
		setAsideOpen(!asideOpen);
	}

	return (
		<div id="site--root">
			<header id="site--header" className="flex-between">
				<img src="/assets/logo.svg" alt="CodeChat Logo" />
				<ul id="site--nav">
					<li><Install /></li>
					<li><Share /></li>
					<li><ColorThemeToggle /></li>
					<li>
						<a href="https://github.com/ireade/pwa-workshop-codechat" target="_blank">About</a>
					</li>
				</ul>
			</header>

			<main id="site--main">
				<h2 className="sr-only">Code Editor</h2>
				<CodeEditor />
			</main>

			<aside id="site--aside" className={asideOpen ? "open" : ""}>
				<button id="site--aside--toggle" className="button" onClick={() => toggleAsideOpen()}>
					{asideOpen ? "Close Messaging" : "Open Messaging"}
				</button>
				<h2 className="sr-only">Messaging</h2>
				<Messaging />
			</aside>
		</div>
	);
}
