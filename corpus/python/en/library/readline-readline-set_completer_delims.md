---
id: "python-en-function-readline-set_completer_delims"
language: "python"
lang: "en"
category: "function"
name: "set_completer_delims"
signature: "set_completer_delims(string)"
directive: "function"
module: "readline"
source_url: "https://docs.python.org/3/library/readline.html#readline.set_completer_delims"
license: "PSF"
updated: "2026-10-01"
---

# set_completer_delims

Set or get the word delimiters for completion.  These determine the
start of the word to be considered for completion (the completion scope).
These functions access the :c`rl_completer_word_break_characters`
variable in the underlying library.
