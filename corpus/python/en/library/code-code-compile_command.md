---
id: "python-en-function-code-compile_command"
language: "python"
lang: "en"
category: "function"
name: "compile_command"
signature: "compile_command(source, filename=\"<input>\", symbol=\"single\")"
directive: "function"
module: "code"
source_url: "https://docs.python.org/3/library/code.html#code.compile_command"
license: "PSF"
updated: "2026-10-01"
---

# compile_command

This function is useful for programs that want to emulate Python's interpreter
main loop (a.k.a. the read-eval-print loop).  The tricky part is to determine
when the user has entered an incomplete command that can be completed by
entering more text (as opposed to a complete command or a syntax error).  This
function *almost* always makes the same decision as the real interpreter main
loop.

*source* is the source string; *filename* is the optional filename from which
source was read, defaulting to `'<input>'`; and *symbol* is the optional
grammar start symbol, which should be `'single'` (the default), `'eval'`
or `'exec'`.

Returns a code object (the same as `compile(source, filename, symbol)`) if the
command is complete and valid; `None` if the command is incomplete; raises
`SyntaxError` if the command is complete and contains a syntax error, or
raises `OverflowError` or `ValueError` if the command contains an
invalid literal.
