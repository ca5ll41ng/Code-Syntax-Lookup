---
id: "python-en-function-pdb-pdb"
language: "python"
lang: "en"
category: "function"
name: "pdb"
title: "Debugger commands"
directive: "module"
module: "pdb"
source_url: "https://docs.python.org/3/library/pdb.html#module-pdb"
license: "PSF"
updated: "2026-10-01"
---

# Debugger commands

.. _debugger-commands:

**Debugger commands**

The commands recognized by the debugger are listed below.  Most commands can be
abbreviated to one or two letters as indicated; e.g. `h(elp)` means that
either `h` or `help` can be used to enter the help command (but not `he`
or `hel`, nor `H` or `Help` or `HELP`).  Arguments to commands must be
separated by whitespace (spaces or tabs).  Optional arguments are enclosed in
square brackets (`[]`) in the command syntax; the square brackets must not be
typed.  Alternatives in the command syntax are separated by a vertical bar
(`|`).

Entering a blank line repeats the last command entered.  Exception: if the last
command was a `list` command, the next 11 lines are listed.

Commands that the debugger doesn't recognize are assumed to be Python statements
and are executed in the context of the program being debugged.  Python
statements can also be prefixed with an exclamation point (`!`).  This is a
powerful way to inspect the program being debugged; it is even possible to
change a variable or call a function.  When an exception occurs in such a
statement, the exception name is printed but the debugger's state is not
changed.

> *Changed in 3.13*: Expressions/Statements whose prefix is a pdb command are now correctly identified and executed.

The debugger supports `aliases`.  Aliases can have
parameters which allows one a certain level of adaptability to the context under
examination.

Multiple commands may be entered on a single line, separated by `;;`.  (A
single `;` is not used as it is the separator for multiple commands in a line
that is passed to the Python parser.)  No intelligence is applied to separating
the commands; the input is split at the first `;;` pair, even if it is in the
middle of a quoted string. A workaround for strings with double semicolons
is to use implicit string concatenation `';'';'` or `";"";"`.

To set a temporary global variable, use a *convenience variable*. A *convenience
variable* is a variable whose name starts with `$`.  For example, `$foo = 1`
sets a global variable `$foo` which you can use in the debugger session.  The
*convenience variables* are cleared when the program resumes execution so it's
less likely to interfere with your program compared to using normal variables
like `foo = 1`.

There are four preset *convenience variables*:

* `$_frame`: the current frame you are debugging
* `$_retval`: the return value if the frame is returning
* `$_exception`: the exception if the frame is raising an exception
* `$_asynctask`: the asyncio task if pdb stops in an async function

> *Added in 3.12*: Added the *convenience variable* feature.

> *Added in 3.14*: Added the ``$_asynctask`` convenience variable.

If a file `.pdbrc` exists in the user's home directory or in the current
directory, it is read with `'utf-8'` encoding and executed as if it had been
typed at the debugger prompt, with the exception that empty lines and lines
starting with `#` are ignored.  This is particularly useful for aliases.  If both
files exist, the one in the home directory is read first and aliases defined there
can be overridden by the local file.

> *Changed in 3.2*: :file:`.pdbrc` can now contain commands that continue debugging, such as :pdbcmd:`continue` or :pdbcmd:`next`.  Previously, these commands had no effect.

> *Changed in 3.11*: :file:`.pdbrc` is now read with ``'utf-8'`` encoding. Previously, it was read with the system locale encoding.

pdbcommand:: h(elp) [command]

pdbcommand:: w(here) [count]

pdbcommand:: d(own) [count]

pdbcommand:: u(p) [count]

pdbcommand:: b(reak) [([filename:]lineno | function) [, condition]]

pdbcommand:: tbreak [([filename:]lineno | function) [, condition]]

pdbcommand:: cl(ear) [filename:lineno | bpnumber ...]

pdbcommand:: disable bpnumber [bpnumber ...]

pdbcommand:: enable bpnumber [bpnumber ...]

pdbcommand:: ignore bpnumber [count]

pdbcommand:: condition bpnumber [condition]

pdbcommand:: commands [bpnumber]

pdbcommand:: s(tep)

pdbcommand:: n(ext)

pdbcommand:: unt(il) [lineno]

pdbcommand:: r(eturn)

pdbcommand:: c(ont(inue))

pdbcommand:: j(ump) lineno

pdbcommand:: l(ist) [first[, last]]

pdbcommand:: ll | longlist

pdbcommand:: a(rgs)

pdbcommand:: p expression

pdbcommand:: pp expression

pdbcommand:: whatis expression

pdbcommand:: source expression

pdbcommand:: display [expression]

pdbcommand:: undisplay [expression]

pdbcommand:: interact

.. _debugger-aliases:

pdbcommand:: alias [name [command]]

pdbcommand:: unalias name

pdbcommand:: ! statement

pdbcommand:: run [args ...]

pdbcommand:: q(uit)

pdbcommand:: debug code

pdbcommand:: retval

pdbcommand:: exceptions [excnumber]

#### Footnotes

.. [1] Whether a frame is considered to originate in a certain module
       is determined by the `__name__` in the frame globals.
