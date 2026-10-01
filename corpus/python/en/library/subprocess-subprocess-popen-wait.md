---
id: "python-en-function-subprocess-popen-wait"
language: "python"
lang: "en"
category: "function"
name: "Popen.wait"
signature: "Popen.wait(timeout=None)"
directive: "method"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.Popen.wait"
license: "PSF"
updated: "2026-10-01"
---

# Popen.wait

Wait for child process to terminate.  Set and return
`~Popen.returncode` attribute.

If the process does not terminate after *timeout* seconds, raise a
`TimeoutExpired` exception.  It is safe to catch this exception and
retry the wait.

> **Note**
>
> This will deadlock when using `stdout=PIPE` or `stderr=PIPE`
> and the child process generates enough output to a pipe such that
> it blocks waiting for the OS pipe buffer to accept more data.
> Use `Popen.communicate` when using pipes to avoid that.
>

> **Note**
>
> When `timeout` is not `None` and the platform supports it, an
> efficient event-driven mechanism is used to wait for process termination:
>
> - Linux >= 5.3 uses `os.pidfd_open` + `select.poll`
> - macOS and other BSD variants use `select.kqueue` +
>   `KQ_FILTER_PROC` + `KQ_NOTE_EXIT`
> - Windows uses `WaitForSingleObject`
>
> If none of these mechanisms are available, the function falls back to a
> busy loop (non-blocking call and short sleeps).
>

> **Note**
>
> Use the `asyncio` module for an asynchronous wait: see
> `asyncio.create_subprocess_exec`.
>

> *Changed in 3.3*: *timeout* was added.

> *Changed in 3.15*: if *timeout* is not ``None``, use efficient event-driven implementation on Linux >= 5.3 and macOS / BSD.
