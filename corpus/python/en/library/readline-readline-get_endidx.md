---
id: "python-en-function-readline-get_endidx"
language: "python"
lang: "en"
category: "function"
name: "get_endidx"
signature: "get_endidx()"
directive: "function"
module: "readline"
source_url: "https://docs.python.org/3/library/readline.html#readline.get_endidx"
license: "PSF"
updated: "2026-10-01"
---

# get_endidx

Get the beginning or ending index of the completion scope.
These indexes are the *start* and *end* arguments passed to the
:c`rl_attempted_completion_function` callback of the
underlying library.  The values may be different in the same
input editing scenario based on the underlying C readline implementation.
Ex: libedit is known to behave differently than libreadline.
