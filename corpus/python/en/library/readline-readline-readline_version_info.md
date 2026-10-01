---
id: "python-en-function-readline-readline_version_info"
language: "python"
lang: "en"
category: "function"
name: "READLINE_VERSION_INFO"
directive: "data"
module: "readline"
source_url: "https://docs.python.org/3/library/readline.html#readline.READLINE_VERSION_INFO"
license: "PSF"
updated: "2026-10-01"
---

# READLINE_VERSION_INFO

A named tuple containing the two components of the Readline library
version that was used for building the module: *major* and *minor*.
Both values are integers.
The components can also be accessed by name,
so `readline.READLINE_VERSION_INFO[0]` is equivalent to
`readline.READLINE_VERSION_INFO.major` and so on.
This may be different from the Readline library actually used at runtime,
which is available as `readline_version_info`.

With the `editline` backend, this is the version of the Readline
interface emulated by libedit, not the version of libedit.

> *Added in next*
