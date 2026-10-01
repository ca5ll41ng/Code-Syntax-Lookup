---
id: "python-en-function-pdb-nosigint-false-readrc-true-mode-none-backend-none-colorize-false"
language: "python"
lang: "en"
category: "function"
name: "nosigint=False, readrc=True, mode=None, backend=None, colorize=False)"
directive: "class"
module: "pdb"
source_url: "https://docs.python.org/3/library/pdb.html#pdb.nosigint=False, readrc=True, mode=None, backend=None, colorize=False)"
license: "PSF"
updated: "2026-10-01"
---

# nosigint=False, readrc=True, mode=None, backend=None, colorize=False)

`Pdb` is the debugger class.

The *completekey*, *stdin* and *stdout* arguments are passed to the
underlying `cmd.Cmd` class; see the description there.

The *skip* argument, if given, must be an iterable of glob-style module name
patterns.  The debugger will not step into frames that originate in a module
that matches one of these patterns. [1]_

By default, Pdb sets a handler for the SIGINT signal (which is sent when the
user presses `Ctrl-C` on the console) when you give a `continue` command.
This allows you to break into the debugger again by pressing `Ctrl-C`.  If you
want Pdb not to touch the SIGINT handler, set *nosigint* to true.

The *readrc* argument defaults to true and controls whether Pdb will load
.pdbrc files from the filesystem.

The *mode* argument specifies how the debugger was invoked.
It impacts the workings of some debugger commands.
Valid values are `'inline'` (used by the breakpoint() builtin),
`'cli'` (used by the command line invocation)
or `None` (for backwards compatible behaviour, as before the *mode*
argument was added).

The *backend* argument specifies the backend to use for the debugger. If `None`
is passed, the default backend will be used. See `set_default_backend`.
Otherwise the supported backends are `'settrace'` and `'monitoring'`.

The *colorize* argument, if set to `True`, will enable colorized output in the
debugger, if color is supported. This will highlight source code displayed in pdb.

Example call to enable tracing with *skip*::

   import pdb; pdb.Pdb(skip=['django.*']).set_trace()

audit-event:: pdb.Pdb "" pdb.Pdb

> *Changed in 3.1*: Added the *skip* parameter.

> *Changed in 3.2*: Added the *nosigint* parameter. Previously, a SIGINT handler was never set by Pdb.

> *Changed in 3.6*: The *readrc* argument.

> *Added in 3.14*: Added the *mode* argument.

> *Added in 3.14*: Added the *backend* argument.

> *Added in 3.14*: Added the *colorize* argument.

> *Changed in 3.14*: Inline breakpoints like :func:`breakpoint` or :func:`pdb.set_trace` will always stop the program at calling frame, ignoring the *skip* pattern (if any).

method:: run(statement, globals=None, locals=None)
