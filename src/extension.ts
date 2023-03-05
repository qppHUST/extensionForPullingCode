// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extensionforpullingcode.pullCode', () => {

		const pannel = vscode.window.createWebviewPanel(
			"pullCode",
			"拉取代码",
			vscode.ViewColumn.Two,
			{
				enableScripts: true
			}
		);

		pannel.webview.html = getWebviewContent();
	});
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }

function getWebviewContent(): string {
	return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
		<div>
			拉取代码
		</div>
		<div>
			请配置拉取设置
		</div>
		<div>
			您希望每
		</div>
		<div>
			<input/>天<input/>小时<input/>分钟<input/>秒
		</div>
		<div>
			拉取代码
		</div><button>配置完成</button>
		<div>
			或者<button>立即拉取</button>
		</div>
	</body>
	</html>`;
}
