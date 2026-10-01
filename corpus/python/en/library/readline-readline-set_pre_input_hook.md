---
id: "python-en-function-readline-set_pre_input_hook"
language: "python"
lang: "en"
category: "function"
name: "set_pre_input_hook"
signature: "set_pre_input_hook([function])"
directive: "function"
module: "readline"
source_url: "https://docs.python.org/3/library/readline.html#readline.set_pre_input_hook"
license: "PSF"
updated: "2026-10-01"
---

# set_pre_input_hook

Set or remove the function invoked by the :c`rl_pre_input_hook`
callback of the underlying library.  If *function* is specified, it will
be used as the new hook function; if omitted or `None`, any
function already installed is removed.  The hook is called
with no arguments after the first prompt has been printed and just before
readline starts reading input characters.  This function only exists
if Python was compiled for a version of the library that supports it.
