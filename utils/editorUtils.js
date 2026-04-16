// Utility to select the user's preferred editor.
// Extracted from cli.js so other modules can reuse it.
const path = require('path');
function getEditor() {
  return process.env.EDITOR || process.env.VISUAL || (process.platform === 'win32' ? 'notepad' : 'vim');
}

// Returns the argument list to open filePath and jump to the last line in insert mode.
function getEditorArgs(editor, filePath) {
  const base = path.basename(editor);
  if (base === 'vim' || base === 'nvim' || base === 'vi') {
    // +normal! GA  =>  go to last line (G), enter insert mode at end of line (A)
    return ['+normal! GA', filePath];
  } else if (base === 'nano') {
    // nano +line goes to that line; use a large number to land on the last line
    return ['+99999', filePath];
  }
  return [filePath];
}

module.exports = { getEditor, getEditorArgs };
