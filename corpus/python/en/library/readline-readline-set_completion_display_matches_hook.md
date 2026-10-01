---
id: "python-en-function-readline-set_completion_display_matches_hook"
language: "python"
lang: "en"
category: "function"
name: "set_completion_display_matches_hook"
signature: "set_completion_display_matches_hook([function])"
directive: "function"
module: "readline"
source_url: "https://docs.python.org/3/library/readline.html#readline.set_completion_display_matches_hook"
license: "PSF"
updated: "2026-10-01"
---

# set_completion_display_matches_hook

Set or remove the completion display function.  If *function* is
specified, it will be used as the new completion display function;
if omitted or `None`, any completion display function already
installed is removed.  This sets or clears the
:c`rl_completion_display_matches_hook` callback in the
underlying library.  The completion display function is called as
`function(substitution, [matches], longest_match_length)` once
each time matches need to be displayed.
