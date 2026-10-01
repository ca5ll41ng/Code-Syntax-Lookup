---
id: "python-en-function-_thread-_thread"
language: "python"
lang: "en"
category: "function"
name: "_thread"
title: "**Caveats:**"
directive: "module"
module: "_thread"
source_url: "https://docs.python.org/3/library/_thread.html#module-_thread"
license: "PSF"
updated: "2026-10-01"
---

# **Caveats:**

**Caveats:**

* Interrupts always go to the main thread (the `KeyboardInterrupt`
  exception will be received by that thread.)

* Calling `sys.exit` or raising the `SystemExit` exception is
  equivalent to calling `_thread.exit`.

* When the main thread exits, it is system defined whether the other threads
  survive.  On most systems, they are killed without executing
  `try` ... `finally` clauses or executing object
  destructors.
