---
id: "python-en-function-readline-set_completer"
language: "python"
lang: "en"
category: "function"
name: "set_completer"
signature: "set_completer([function])"
directive: "function"
module: "readline"
source_url: "https://docs.python.org/3/library/readline.html#readline.set_completer"
license: "PSF"
updated: "2026-10-01"
---

# set_completer

Set or remove the completer function.  If *function* is specified, it will be
used as the new completer function; if omitted or `None`, any completer
function already installed is removed.  The completer function is called as
`function(text, state)`, for *state* in `0`, `1`, `2`, ..., until it
returns a non-string value.  It should return the next possible completion
starting with *text*.

The installed completer function is invoked by the *entry_func* callback
passed to :c`rl_completion_matches` in the underlying library.
The *text* string comes from the first parameter to the
:c`rl_attempted_completion_function` callback of the
underlying library.
