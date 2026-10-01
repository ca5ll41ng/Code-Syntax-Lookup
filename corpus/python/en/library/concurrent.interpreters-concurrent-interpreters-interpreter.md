---
id: "python-en-function-concurrent-interpreters-interpreter"
language: "python"
lang: "en"
category: "function"
name: "Interpreter"
signature: "Interpreter(id)"
directive: "class"
module: "concurrent.interpreters"
source_url: "https://docs.python.org/3/library/concurrent.interpreters.html#concurrent.interpreters.Interpreter"
license: "PSF"
updated: "2026-10-01"
---

# Interpreter

A single interpreter in the current process.

Generally, `Interpreter` shouldn't be called directly.
Instead, use `create` or one of the other module functions.

attribute:: id

attribute:: whence

method:: is_running()

method:: close()

method:: prepare_main(ns=None, **kwargs)

method:: exec(code, /, dedent=True)

method:: call(callable, /, *args, **kwargs)

.. _interp-call-in-thread:

method:: call_in_thread(callable, /, *args, **kwargs)
