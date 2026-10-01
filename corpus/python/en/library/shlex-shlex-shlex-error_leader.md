---
id: "python-en-function-shlex-shlex-error_leader"
language: "python"
lang: "en"
category: "function"
name: "shlex.error_leader"
signature: "shlex.error_leader(infile=None, lineno=None)"
directive: "method"
module: "shlex"
source_url: "https://docs.python.org/3/library/shlex.html#shlex.error_leader"
license: "PSF"
updated: "2026-10-01"
---

# shlex.error_leader

This method generates an error message leader in the format of a Unix C compiler
error label; the format is `'"%s", line %d: '`, where the `%s` is replaced
with the name of the current source file and the `%d` with the current input
line number (the optional arguments can be used to override these).

This convenience is provided to encourage `shlex` users to generate error
messages in the standard, parseable format understood by Emacs and other Unix
tools.
