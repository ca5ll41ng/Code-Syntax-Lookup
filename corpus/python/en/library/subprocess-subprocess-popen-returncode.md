---
id: "python-en-function-subprocess-popen-returncode"
language: "python"
lang: "en"
category: "function"
name: "Popen.returncode"
directive: "attribute"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.Popen.returncode"
license: "PSF"
updated: "2026-10-01"
---

# Popen.returncode

The child return code. Initially `None`, `returncode` is set by
a call to the `poll`, `wait`, or `communicate` methods
if they detect that the process has terminated.

A `None` value indicates that the process hadn't yet terminated at the
time of the last method call.

A negative value `-N` indicates that the child was terminated by signal
`N` (POSIX only).

When `shell=True`, the return code reflects the exit status of the shell
itself (e.g. `/bin/sh`), which may map signals to codes such as
`128+N`. See the documentation of the shell (for example, the Bash
manual's Exit Status) for details.
