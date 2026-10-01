---
id: "python-en-function-contextlib-redirect_stdout"
language: "python"
lang: "en"
category: "function"
name: "redirect_stdout"
signature: "redirect_stdout(new_target)"
directive: "function"
module: "contextlib"
source_url: "https://docs.python.org/3/library/contextlib.html#contextlib.redirect_stdout"
license: "PSF"
updated: "2026-10-01"
---

# redirect_stdout

Context manager for temporarily redirecting `sys.stdout` to
another `file object`.

This tool adds flexibility to existing functions or classes whose output
is hardwired to `sys.stdout`.

For example, the output of `help` normally is sent to *sys.stdout*.
You can capture that output in a string by redirecting the output to an
`io.StringIO` object. The replacement stream is returned from the
`~object.__enter__` method and so is available as the target of the
`with` statement::

     with redirect_stdout(io.StringIO()) as f:
         help(pow)
     s = f.getvalue()

To send the output of `help` to a file on disk, redirect the output
to a regular file::

     with open('help.txt', 'w') as f:
         with redirect_stdout(f):
             help(pow)

To send the output of `help` to *sys.stderr*::

     with redirect_stdout(sys.stderr):
         help(pow)

Note that the global side effect on `sys.stdout` means that this
context manager is not suitable for use in library code and most threaded
applications. It also has no effect on the output of subprocesses.
However, it is still a useful approach for many utility scripts.

This context manager is `reentrant`.

> *Added in 3.4*
