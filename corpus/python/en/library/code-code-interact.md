---
id: "python-en-function-code-interact"
language: "python"
lang: "en"
category: "function"
name: "interact"
signature: "interact(banner=None, readfunc=None, local=None, exitmsg=None, local_exit=False)"
directive: "function"
module: "code"
source_url: "https://docs.python.org/3/library/code.html#code.interact"
license: "PSF"
updated: "2026-10-01"
---

# interact

Convenience function to run a read-eval-print loop.  This creates a new
instance of `InteractiveConsole` and sets *readfunc* to be used as
the `InteractiveConsole.raw_input` method, if provided.  If *local* is
provided, it is passed to the `InteractiveConsole` constructor for
use as the default namespace for the interpreter loop.  If *local_exit* is provided,
it is passed to the `InteractiveConsole` constructor.  The `~InteractiveConsole.interact`
method of the instance is then run with *banner* and *exitmsg* passed as the
banner and exit message to use, if provided.  The console object is discarded
after use.

> *Changed in 3.6*: Added *exitmsg* parameter.

> *Changed in 3.13*: Added *local_exit* parameter.
