---
id: "python-en-function-asyncio-subprocess-asyncio-subprocess-process"
language: "python"
lang: "en"
category: "function"
name: "asyncio.subprocess.Process"
directive: "class"
module: "asyncio-subprocess"
source_url: "https://docs.python.org/3/library/asyncio-subprocess.html#asyncio-subprocess.asyncio.subprocess.Process"
license: "PSF"
updated: "2026-10-01"
---

# asyncio.subprocess.Process

An object that wraps OS processes created by the
`~asyncio.create_subprocess_exec` and `~asyncio.create_subprocess_shell`
functions.

This class is designed to have a similar API to the
`subprocess.Popen` class, but there are some
notable differences:

* unlike Popen, Process instances do not have an equivalent to
  the `~subprocess.Popen.poll` method;

* the `~asyncio.subprocess.Process.communicate` and
  `~asyncio.subprocess.Process.wait` methods don't have a
  *timeout* parameter: use the `~asyncio.wait_for` function;

* the `Process.wait()` method
  is asynchronous, whereas `subprocess.Popen.wait` method
  is implemented as a blocking busy loop;

* the *universal_newlines* parameter is not supported.

This class is `not thread safe`.

See also the `Subprocess and Threads`
section.

method:: wait()

method:: communicate(input=None)

method:: send_signal(signal)

method:: terminate()

method:: kill()

attribute:: stdin

attribute:: stdout

attribute:: stderr

> **Warning**
>
> Use the `communicate` method rather than
> `process.stdin.write()`,
> `await process.stdout.read()` or
> `await process.stderr.read()`.
> This avoids deadlocks due to streams pausing reading or writing
> and blocking the child process.
>

attribute:: pid

attribute:: returncode
