<h1 style="text-align:centre"> VS CODE GUIDE </h1>

<ul>
<li><a href="#introduction">Introduction</a></li>
<li><a href="#should-i-switch-to-vs-code-and-why">Should I switch to VS Code? And why?</a></li>
<li><a href="#getting-started">Getting started</a></li>
<li><a href="#explorer">Explorer</a></li>
<li><a href="#search">Search</a></li>
<li><a href="#source-control">Source Control</a></li>
<li><a href="#debugger">Debugger</a></li>
<li><a href="#extensions">Extensions</a></li>
<li><a href="#the-terminal">The Terminal</a></li>
<li><a href="#the-command-palette">The Command Palette</a></li>
<li><a href="#themes">Themes</a></li>
<li><a href="#customization">Customization</a></li>
<li><a href="#workspaces">Workspaces</a></li>
<li><a href="#editing">Editing</a>

<ul>
<li><a href="#intellisense">IntelliSense</a></li>
<li><a href="#code-formatting">Code Formatting</a></li>
<li><a href="#errors-and-warnings">Errors and warnings</a></li>
<li><a href="#keyboard-shortcuts">Keyboard shortcuts</a></li>
<li><a href="#keymaps">Keymaps</a></li>
</ul></li>
<li><a href="#code-snippets">Code snippets</a></li>
<li><a href="#extensions-showcase">Extensions showcase</a></li>
</ul>

<h2 id="introduction">Introduction</h2>

<p>Since the beginning, editors are a strange beast. Some people defend their editor choice strenuously. In the Unix world you have those <code>Emacs</code> vs <code>vi</code> &ldquo;wars&rdquo;, and I kind of imagine <em>why</em> so much time is spend debating the advantages of one versus another.</p>

<p>I used tons of editors and IDEs in the past few years. I can remember TextMate, TextWrangler, Espresso, BBEdit, XCode, Coda, Brackets, Sublime Text, Atom, vim, PHPStorm. The difference between an IDE and an editor is mostly in the feature set, and complexity.</p>

<p>I largely prefer an editor over an IDE, as it&rsquo;s faster and gets less in the way.</p>

<p>In the last 12 months I&rsquo;ve been using VS Code, the Open Source editor from Microsoft, and it&rsquo;s quickly become my favorite editor ever.</p>

<h2 id="should-i-switch-to-vs-code-and-why">Should I switch to VS Code? And why?</h2>

<p>If you&rsquo;re looking for suggestions for whether to use it or not, let me say <strong>yes</strong>, you should switch to it from whatever other editor you are using now.</p>

<p>This editor builds on top of decades of editor experience from Microsoft.</p>

<p>The code of the editor is completely Open Source, and there&rsquo;s no payment required to use it.</p>

<p>It uses <a href="https://electronjs.org/">Electron</a> as its base, which enables it to be cross platform and work on Mac, Windows and Linux. It&rsquo;s built using Node.js, and you can extend it using JavaScript (which makes it a win for all us JavaScript developers).</p>

<p>It&rsquo;s <strong>fast</strong>, easily the fastest editor I&rsquo;ve used after Sublime Text.</p>

<p>It has won the enthusiasm of the community: there are thousands of <strong>extensions</strong>, some official, and some made by the community, and it&rsquo;s <a href="https://insights.stackoverflow.com/survey/2018/">winning surveys</a>.</p>

<p>Microsoft releases an update every month. Frequent updates foster innovation and Microsoft is listening to its users, while keeping the platform as stable as possible (I should say I never had an issue with VS Code in 1 year of using it every day almost all day).</p>

<h2 id="getting-started">Getting started</h2>

<p>The home page of Visual Studio Code on the internet is <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>.</p>

<p>Go to that site to download the latest stable release of the editor.</p>

<p><img src="https://flaviocopes.com/vscode/vscode-site.png" alt="VS Code site" /></p>

<p>The installation process depends on the platform, and you should be used to it.</p>

<p>When you start the editor for the first time you will see the welcome screen:</p>

<p><img src="https://flaviocopes.com/vscode/vscode-first-screen.png" alt="Welcome screen for VS Code" /></p>

<p>There is a toolbar on the left with 5 icons. That gives access to:</p>

<ul>
<li>The File Explorer</li>
<li>Search</li>
<li>Source Control</li>
<li>The Debugger</li>
<li>The Extensions</li>
</ul>

<h2 id="explorer">Explorer</h2>

<p>Let&rsquo;s start the exploration with the explorer (pun intended).</p>

<p><img src="https://flaviocopes.com/vscode/explorer.png" alt="VS Code Explorer" /></p>

<p>Press the &ldquo;Open Folder&rdquo; button in the sidebar, or the <code>Open folder...</code> link in the Welcome page. Both will trigger the file picker view.</p>

<p>Choose one folder where you have source code, or even just text files, and open it.</p>

<p>VS Code will show that folder content in your view:</p>

<p><img src="https://flaviocopes.com/vscode/opened-folder.png" alt="Opened folder" /></p>

<p>On the right, the empty view shows some commands to perform some quick operations, and their keyboard shortcut.</p>

<p>If you select a file on the left, that file will open on the main panel:</p>

<p><img src="https://flaviocopes.com/vscode/files-list.png" alt="Files list" /></p>

<p>and if you start editing it, notice a dot will appear next to the file name in the tab, and in the sidebar as well:</p>

<p><img src="https://flaviocopes.com/vscode/editing-file.png" alt="Editing file" /></p>

<p>Pressing <code>CMD+P</code> will show you a quick file picker to easily move in files on large projects:</p>

<p><img src="https://flaviocopes.com/vscode/file-picker.png" alt="Quick file picker" /></p>

<p>You can hide the sidebar that hosts the file using the shortcut <code>CMD+B</code>.</p>

<blockquote>
<p>Note: I&rsquo;m using the Mac keyboard shortcuts. Most of the times, on Windows and Linux you just change CMT to CTRL and it works, but not always. Print your <a href="https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference">keyboard shortcuts reference</a>.</p>
</blockquote>

<h2 id="search">Search</h2>

<p>The second icon in the toolbar is &ldquo;Search&rdquo;. Clicking it shows the search interface:</p>

<p><img src="https://flaviocopes.com/vscode/search.png" alt="Search" /></p>

<p>You can click the icons to make the search case sensitive, to match whole words (not substrings), and to use a regular expression for the search string.</p>

<p>To perform the search, press <code>enter</code>.</p>

<p>Clicking the ▷ symbol on the left enables the search and replace tool.</p>

<p>Clicking the 3 dots shows a panel that lets you just include some specific kind of files, and exclude other files:</p>

<p><img src="https://flaviocopes.com/vscode/search-replace.png" alt="Search and replace" /></p>

<h2 id="source-control">Source Control</h2>

<p>The Source Control tab is enabled by clicking the third icon in the toolbar.</p>

<p><img src="https://flaviocopes.com/vscode/source-control.png" alt="Source control" /></p>

<p>VS Code comes with Git support out of the box. In this case the folder we opened does not have source control initialized.</p>

<p>Clicking the first icon on top, with the Git logo, allows us to initialize the Git repository:</p>

<p><img src="https://flaviocopes.com/vscode/git-repo-initialized.png" alt="Git repo is initialized" /></p>

<p>The <code>U</code> beside each file means that it&rsquo;s been updated since the last commit (since we never did a commit in the first place, all files are updated).</p>

<p>Create the first commit by writing a text message and pressing <code>Cmd-Enter</code>, or clicking the ✔︎ icon on top.</p>

<p><img src="https://flaviocopes.com/vscode/first-commit.png" alt="First commit" /></p>

<p>I usually set this to automatically stage the changes when I commit them.</p>

<p>The 3 dots icon, when clicked, offers lots of options for interacting with Git:</p>

<p><img src="https://flaviocopes.com/vscode/git-options.png" alt="Git options" /></p>

<h2 id="debugger">Debugger</h2>

<p>The fourth icon in the toolbar opens the JavaScript debugger. This deserves an article on its own. In the meantime check out <a href="https://code.visualstudio.com/docs/editor/debugging">the official docs</a>.</p>

<h2 id="extensions">Extensions</h2>

<p>The fifth icon brings us to extensions.</p>

<p><img src="https://flaviocopes.com/vscode/extensions.png" alt="Extensions" /></p>

<p>Extensions are one killer feature of VS Code.</p>

<p>They can provide so much value that you&rsquo;ll surely end up using tons of them.</p>

<p>I have lots of extensions installed.</p>

<p>One thing to remember is that every extension you install is going to impact (more or less) the performance of your editor.</p>

<p>You can disable an extension you install, and enable only when you need it.</p>

<p>You can also disable an extension for a specific workspace (we&rsquo;ll talk about work workspaces later). For example, you don&rsquo;t want to enable the JavaScript extensions in a Go project.</p>

<p>There is a list of recommended extensions, which include all the most popular tools.</p>

<p><img src="https://flaviocopes.com/vscode/recommended-extensions.png" alt="Recommended extensions" /></p>

<p>Since I edit lots of markdown files for my blog, VS Code suggests me the <code>markdownlint</code> extension, which provides linting and syntax checking for Markdown files.</p>

<p>As an example, let&rsquo;s install it.</p>

<p>First, I inspect the number of views. It&rsquo;s 1.2M, so many! And the reviews are positive (4.<sup>5</sup>&frasl;<sub>5</sub>). Clicking the extension name opens the details on the right.</p>

<p><img src="https://flaviocopes.com/vscode/extension-details.png" alt="Extension details" /></p>

<p>Pressing the green Install button starts the installation process, which is straightforward. It does everything for you, and you just need to click the &ldquo;Reload&rdquo; button to activate it, which basically reboots the editor window.</p>

<p>Done! Let&rsquo;s test it by creating a markdown file with an error, like a missing <code>alt</code> attribute on an image. It successfully tells us so:</p>

<p><img src="https://flaviocopes.com/vscode/markdownlint.png" alt="markdownlint extension" /></p>

<p>Down below I introduce some popular extensions you don&rsquo;t want to miss, and the ones I use the most.</p>

<h2 id="the-terminal">The Terminal</h2>

<p>VS Code has an integrated terminal.</p>

<p>You can activate it from the menu <code>View ➤ Integrated Terminal</code>, or using <code>CMD+\</code>` and it will open with your default shell.</p>

<p><img src="https://flaviocopes.com/vscode/terminal.png" alt="The terminal" /></p>

<p>This is very convenient because in modern web development you almost always have some <code>npm</code> or <code>yarn</code> process running in the background.</p>

<p>You can create more than one terminal tab, and show them one next to the other, and also stack them to the right rather than in the bottom of the window:</p>

<p><img src="https://flaviocopes.com/vscode/multiple-terminals.png" alt="Multiple terminals" /></p>

<h2 id="the-command-palette">The Command Palette</h2>

<p>The Command Palette is a very powerful tool. You enable it by clicking <code>View ➤ Command Palette</code>, or using <code>CMD+SHIFT+P</code></p>

<p>A modal window will appear at the top, offering you various options, depending on which plugins you have installed, and which commands you used last.</p>

<p>Common operations I perform are:</p>

<ul>
<li><strong>Extensions: Install Extensions</strong></li>
<li><strong>Preferences: Color Theme</strong> to change the color theme (I sometimes change from night to day)</li>
<li><strong>Format Document</strong>, which formats code automatically</li>
<li><strong>Run Code</strong>, which is provided by Code Runner, and executes the highlighted lines of JavaScript</li>
</ul>

<p>you can activate any of those by starting typing, and the autocomplete functionality will show you the one you want.</p>

<p>Remember when you typed <code>CMD+P</code> to see the list of files, before? That&rsquo;s a shortcut to a specific feature of the Command Palette. There are others:</p>

<ul>
<li><code>Ctrl-Shift-Tab</code> shows you the active files</li>
<li><code>Ctrl-G</code> opens the command palette to let you enter a line number to go to</li>
<li><code>CMD+SHIFT+O</code> shows the list of symbols found in the current file</li>
</ul>

<p>What symbols <em>are</em> depends on the file type. In JavaScript, those might be classes or functions. In Markdown, section titles.</p>

<h2 id="themes">Themes</h2>

<p>You can switch the color theme used by clicking <code>CMD-k</code> + <code>CMD-t</code>, or by invoking the <em>Preferences: Color Theme</em> command.</p>

<p>This will show you the list of themes installed:</p>

<p><img src="https://flaviocopes.com/vscode/themes.png" alt="Themes" /></p>

<p>you can click one, or move with the keyboard, and VS Code will show you a preview. Click enter to apply the theme:</p>

<p><img src="https://flaviocopes.com/vscode/light-theme.png" alt="Light Theme" /></p>

<p>Themes are just extensions. You can install new themes by going to the extensions manager.</p>

<p>Probably the best thing for discoverability is to use <a href="https://marketplace.visualstudio.com/search?target=VSCode&amp;category=Themes&amp;sortBy=Downloads">the marketplace website</a>.</p>

<p>My favorite theme is <a href="https://marketplace.visualstudio.com/items?itemName=teabyii.ayu">Ayu</a>, which provides a great style for any time of the day, night, morning/evenings and afternoon.</p>

<h2 id="customization">Customization</h2>

<p>Theme is just one customization you can make.</p>

<p>The sidebar icons that are assigned to a file are also a big part of a nice user experience.</p>

<p>You can change those by going to <code>Preferences ➤ File Icon Theme</code>. Ayu comes with its own icons theme, which perfectly matches the theme colors:</p>

<p><img src="https://flaviocopes.com/vscode/ayu-light.png" alt="Ayu Light" /></p>

<p>All those customizations we made so far, the theme and the icon theme, are saved to the user preferences.</p>

<p>Go to <code>Preferences ➤ Settings</code> (also reachable via <code>CMD-,</code>) to see them:</p>

<p><img src="https://flaviocopes.com/vscode/settings.png" alt="Settings" /></p>

<p>The view shows the default settings on the left, for an easy reference, and the overridden settings on the right. You can see the name of the theme and the icon theme we set up, in <code>workbench.colorTheme</code> and <code>workbench.iconTheme</code>.</p>

<p>I zoomed in using <code>CMD-+</code>, and this setting was saved as well to <code>window.zoomLevel</code>, so the next time VS Code starts up, it remembers my choice for zooming.</p>

<p>You can decide to apply some setting globally, in <strong>User Settings</strong>, or relative to a workspace, in <strong>Workspace settings</strong>.</p>

<p>Most of the times those settings are automatically added by extensions or by the VS Code itself, but in some cases you&rsquo;ll directly edit them in this place.</p>

<h2 id="workspaces">Workspaces</h2>

<p>All User settings can be overridden in Workspace settings. They take precedence. They are useful for example when you use a project that has linting rules different from all the other projects you use, and you don&rsquo;t want to edit your favorite settings just for it.</p>

<p>You create a workspace from an existing project by clicking the <code>File ➤ Save Workspace as...</code> menu.</p>

<p>The currently opened folder will be enabled as the workspace main folder.</p>

<p>The next time you open VS code, or you switch project, instead of opening a folder, you open a workspace, and that will automatically open the folder containing your code, and it will remember all the settings you set specific to that workspace.</p>

<p>In addition to having workspace-level settings, you can disable extensions for a specific workspace.</p>

<p>You can just work with folders until you have a specific reason for wanting a workspace.</p>

<p>One good reason is the ability to have multiple, separate root folders. You can use the <code>File ➤ Add Folder to Workspace</code> to add a new root folder, which can be located anywhere in the filesystem, but will be shown along with the other existing folder you had.</p>

<h2 id="editing">Editing</h2>

<h3 id="intellisense">IntelliSense</h3>

<p>When you edit in one of the supported languages (JavaScript, JSON, HTML, CSS, Less, Sass, C# and <a href="/typescript/">TypeScript</a>) VS Code has IntelliSense, a technology that hints at autocompletion of functions and parameters, as you type them.</p>

<h3 id="code-formatting">Code Formatting</h3>

<p>Two handy commands (<code>Format Document</code> and <code>Format Selection</code>) are available on the Commands Palette to autoformat the code. VS Code by defaults supports automatic formatting for HTML, JavaScript, TypeScript and JSON.</p>

<h3 id="errors-and-warnings">Errors and warnings</h3>

<p>When you open a file you will see on the right a bar with some colors. Those colors indicate some issues in your code. For example here&rsquo;s what I see right now:</p>

<p>Those are al warnings or errors. You can try to find them in the code, where you see pieces underlined in red, or you can also press <code>CMD-Shift-M</code> (or choose <code>View ➤ Problems</code>)</p>

<h3 id="keyboard-shortcuts">Keyboard shortcuts</h3>

<p>I showed you a lot of keyboard shortcuts up to now.</p>

<p>It&rsquo;s starting to get complicated to remember them all, but they are a nice productivity aid. I suggest to print the official shortcuts cheat sheet, for <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">Mac</a>, <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> and <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a>.</p>

<h3 id="keymaps">Keymaps</h3>

<p>If you&rsquo;re used to keyboard shortcuts from other editors, maybe because you worked with one editor for a long time, you can use a keymap.</p>

<p>The VS Code team provides keymaps for the most popular editors out of the box: vim, Sublime Text, Atom, IntelliJ, Eclipse and more. They are available as plugins. By opening the <code>Preferences ➤ Keymaps Extensions</code> menu.</p>

<h2 id="code-snippets">Code snippets</h2>

<p>Snippets are very cool.</p>

<p>For every language you might be developing in, there are extensions that provide ready-made snippets for you to use.</p>

<p>For JavaScript/React, one popular one is <a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets">VS Code ES7 React/Redux/React-Native/JS snippets</a></p>

<p>You just type <code>rfe</code>, press TAB and this appears in your editor:</p>
<div class="highlight"><pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-js" data-lang="js"><span style="color:#66d9ef">import</span> <span style="color:#a6e22e">React</span> <span style="color:#a6e22e">from</span> <span style="color:#e6db74">&#39;react&#39;</span>

<span style="color:#66d9ef">const</span> <span style="color:#a6e22e">$1</span> <span style="color:#f92672">=</span> <span style="color:#a6e22e">props</span> =&gt; {
  <span style="color:#66d9ef">return</span> <span style="color:#f92672">&lt;</span><span style="color:#a6e22e">div</span><span style="color:#f92672">&gt;</span><span style="color:#a6e22e">$0</span><span style="color:#f92672">&lt;</span><span style="color:#960050;background-color:#1e0010">/div&gt;</span>
}

<span style="color:#66d9ef">export</span> <span style="color:#66d9ef">default</span> <span style="color:#a6e22e">$1</span></code></pre></div>
<p>there are lots of these shortcuts, and they save a lot of time. Not just from typing, but also from looking up the correct syntax.</p>

<p>You can also define your own snippets. Click <code>Preferences ➤ User Snippets</code> and follow the instructions to create your own snippets file.</p>

<h2 id="extensions-showcase">Extensions showcase</h2>

<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"><strong>GitLens</strong></a>: visualize who made the last change to a line of your code, and when this happened</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory"><strong>Git History</strong></a> visualize and search the Git history</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek"><strong>CSS Peek</strong></a> lets you see and edit CSS definitions by inspecting the class of an HTML element. Very handy.</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner"><strong>Code Runner</strong></a> lets you run bits of code that you select in the editor, and much more. Supports lots of languages.</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome"><strong>Debugger for Chrome</strong></a> allows you to debug a JavaScript code running in the browser using the VS code debugger.</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer"><strong>Bracket Pair Colorizer</strong></a> handy for visualizing brackets endings in your code.</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow"><strong>Indent-Rainbow</strong></a> colors the indentation levels of your code.</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"><strong>Prettier</strong></a> check my <a href="/prettier/">Prettier guide</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"><strong>ESLint</strong></a> check my <a href="/eslint/">ESLint guide</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion"><strong>IntelliSense for CSS</strong></a> improved autocompletion for CSS based on your workspace definitions</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script"><strong>npm</strong></a> enables <a href="/npm/">npm</a> utility functions from the command palette</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"><strong>Auto Close Tag</strong></a> automatically close HTML/JSX/* tags</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"><strong>Auto Rename Tag</strong></a> automatically renames the closing tag when you change the opening one, and the opposite as well</li>
</ul>


<h6>References</h6>
<ul>
  <li>https://flaviocopes.com/vscode/</li>
  <li>https://code.visualstudio.com/docs/introvideos/basics</li>
  <li>https://code.visualstudio.com/docs/getstarted/introvideos</li>
  <li>https://code.visualstudio.com/docs/nodejs/angular-tutorial</li>
  <li>https://en.wikipedia.org/wiki/Visual_Studio_Code</li>
  </ul>
