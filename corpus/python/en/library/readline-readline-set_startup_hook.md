---
id: "python-en-function-readline-set_startup_hook"
language: "python"
lang: "en"
category: "function"
name: "set_startup_hook"
signature: "set_startup_hook([function])"
directive: "function"
module: "readline"
source_url: "https://docs.python.org/3/library/readline.html#readline.set_startup_hook"
license: "PSF"
updated: "2026-10-01"
---

# set_startup_hook

Set or remove the function invoked by the :c`rl_startup_hook`
callback of the underlying library.  If *function* is specified, it will
be used as the new hook function; if omitted or `None`, any function
already installed is removed.  The hook is called with no
arguments just before readline prints the first prompt.
