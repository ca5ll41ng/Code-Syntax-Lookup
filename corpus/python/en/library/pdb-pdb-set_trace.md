---
id: "python-en-function-pdb-set_trace"
language: "python"
lang: "en"
category: "function"
name: "set_trace"
signature: "set_trace(*, header=None, commands=None)"
directive: "function"
module: "pdb"
source_url: "https://docs.python.org/3/library/pdb.html#pdb.set_trace"
license: "PSF"
updated: "2026-10-01"
---

# set_trace

Enter the debugger at the calling stack frame.  This is useful to hard-code
a breakpoint at a given point in a program, even if the code is not
otherwise being debugged (e.g. when an assertion fails).  If given,
*header* is printed to the console just before debugging begins.
The *commands* argument, if given, is a list of commands to execute
when the debugger starts.

> *Changed in 3.7*: The keyword-only argument *header*.

> *Changed in 3.13*: :func:`set_trace` will enter the debugger immediately, rather than on the next line of code to be executed.

> *Added in 3.14*: The *commands* argument.
