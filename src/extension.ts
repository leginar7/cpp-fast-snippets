import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
const insert = (text: string) => {
const editor = vscode.window.activeTextEditor;
if (editor) {
editor.edit(editBuilder => {
editBuilder.insert(editor.selection.active, text);
});
}
};

context.subscriptions.push(
vscode.commands.registerCommand('cppsnippets.insertInclude', () => {
insert('#include <iostream>\nusing namespace std;\n');
})
);

context.subscriptions.push(
vscode.commands.registerCommand('cppsnippets.insertMain', () => {
insert('int main() {\n \n return 0;\n}\n');
})
);

context.subscriptions.push(
vscode.commands.registerCommand('cppsnippets.insertForLoop', () => {
insert('for (int i = 0; i < n; i++) {\n \n}\n');
})
);

context.subscriptions.push(
vscode.commands.registerCommand('cppsnippets.insertWhileLoop', () => {
insert('while (condition) {\n \n}\n');
})
);

context.subscriptions.push(
vscode.commands.registerCommand('cppsnippets.insertIfElse', () => {
insert('if (condition) {\n \n} else {\n \n}\n');
})
);
}

export function deactivate() {}
