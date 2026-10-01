---
id: "python-en-function-_thread-interrupt_main"
language: "python"
lang: "en"
category: "function"
name: "interrupt_main"
signature: "interrupt_main(signum=signal.SIGINT, /)"
directive: "function"
module: "_thread"
source_url: "https://docs.python.org/3/library/_thread.html#_thread.interrupt_main"
license: "PSF"
updated: "2026-10-01"
---

# interrupt_main

Simulate the effect of a signal arriving in the main thread.
A thread can use this function to interrupt the main thread, though
there is no guarantee that the interruption will happen immediately.

If given, *signum* is the number of the signal to simulate.
If *signum* is not given, `signal.SIGINT` is simulated.

If the given signal isn't handled by Python (it was set to
`signal.SIG_DFL` or `signal.SIG_IGN`), this function does
nothing.

> *Changed in 3.10*: The *signum* argument is added to customize the signal number.

> **Note**
>
> This does not emit the corresponding signal but schedules a call to
> the associated handler (if it exists).
> If you want to truly emit the signal, use `signal.raise_signal`.
>
