---
id: "python-en-function-profiling-tracing-runctx"
language: "python"
lang: "en"
category: "function"
name: "runctx"
signature: "runctx(command, globals, locals, filename=None, sort=-1)"
directive: "function"
module: "profiling.tracing"
source_url: "https://docs.python.org/3/library/profiling.tracing.html#profiling.tracing.runctx"
license: "PSF"
updated: "2026-10-01"
---

# runctx

Profile execution of a command with explicit namespaces.

Like `run`, but executes the command with the specified *globals*
and *locals* mappings instead of using the `__main__` module's namespace::

   exec(command, globals, locals)
