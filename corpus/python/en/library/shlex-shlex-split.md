---
id: "python-en-function-shlex-split"
language: "python"
lang: "en"
category: "function"
name: "split"
signature: "split(s, comments=False, posix=True)"
directive: "function"
module: "shlex"
source_url: "https://docs.python.org/3/library/shlex.html#shlex.split"
license: "PSF"
updated: "2026-10-01"
---

# split

Split the string *s* using shell-like syntax. If *comments* is `False`
(the default), the parsing of comments in the given string will be disabled
(setting the `~shlex.commenters` attribute of the
`~shlex.shlex` instance to the empty string).  This function operates
in POSIX mode by default, but uses non-POSIX mode if the *posix* argument is
false.

> *Changed in 3.12*: Passing ``None`` for *s* argument now raises an exception, rather than reading :data:`sys.stdin`.
