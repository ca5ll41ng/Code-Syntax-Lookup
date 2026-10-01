---
id: "python-en-function-sys-remote_exec"
language: "python"
lang: "en"
category: "function"
name: "remote_exec"
signature: "remote_exec(pid, script)"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.remote_exec"
license: "PSF"
updated: "2026-10-01"
---

# remote_exec

Executes *script*, a file containing Python code in the remote
process with the given *pid*.

This function returns immediately, and the code will be executed by the
target process's main thread at the next available opportunity, similarly
to how signals are handled. There is no interface to determine when the
code has been executed. The caller is responsible for making sure that
the file still exists whenever the remote process tries to read it and that
it hasn't been overwritten.

The remote process must be running a CPython interpreter of the same major
and minor version as the local process. If either the local or remote
interpreter is pre-release (alpha, beta, or release candidate) then the
local and remote interpreters must be the same exact version.

See `remote-debugging` for more information about the remote debugging
mechanism.

audit-event:: sys.remote_exec pid script_path

audit-event:: cpython.remote_debugger_script script_path

availability:: Unix, Windows.

> *Added in 3.14*: See :pep:`768` for more details.
