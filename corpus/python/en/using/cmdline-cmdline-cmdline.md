---
id: "python-en-guide-cmdline-cmdline"
language: "python"
lang: "en"
category: "guide"
name: "cmdline"
title: "this file."
module: "cmdline"
source_url: "https://docs.python.org/3/using/cmdline.html"
license: "PSF"
updated: "2026-10-01"
---

# this file.

.. ATTENTION: You probably should update Misc/python.man, too, if you modify
   this file.

.. _using-on-general:

**Command line and environment**

The CPython interpreter scans the command line and the environment for various
settings.

impl-detail::

.. _using-on-cmdline:

**Command line**

When invoking Python, you may specify any of these options::

    python [-bBdEhiIOPqRsSuvVWx?] [-c command  -m module-name  script | - ] [args]

The most common use case is, of course, a simple invocation of a script::

    python myscript.py

.. _using-on-interface-options:

**Interface options**

The interpreter interface resembles that of the UNIX shell, but provides some
additional methods of invocation:

* When called with standard input connected to a tty device, it prompts for
  commands and executes them until an EOF (an end-of-file character, you can
  produce that with `Ctrl-D` on UNIX or `Ctrl-Z, Enter` on Windows) is read.
  For more on interactive mode, see `tut-interac`.
* When called with a file name argument or with a file as standard input, it
  reads and executes a script from that file.
* When called with a directory name argument, it reads and executes an
  appropriately named script from that directory.
* When called with `-c command`, it executes the Python statement(s) given as
  *command*.  Here *command* may contain multiple statements separated by
  newlines.
* When called with `-m module-name`, the given module is located using the standard
  import mechanism and executed as a script.

In non-interactive mode, the entire input is parsed before it is executed.

An interface option terminates the list of options consumed by the interpreter,
all consecutive arguments will end up in `sys.argv` -- note that the first
element, subscript zero (`sys.argv[0]`), is a string reflecting the program's
source.

option:: -c <command>

option:: -m <module-name>

.. _cmdarg-dash:

describe:: -

.. _cmdarg-script:

describe:: <script>

If no interface option is given, `-i` is implied, `sys.argv[0]` is
an empty string (`""`) and the current directory will be added to the
start of `sys.path`.  Also, tab-completion and history editing is
automatically enabled, if available on your platform (see
`rlcompleter-config`).

> **Seealso**
>
>

> *Changed in 3.4*: Automatic enabling of tab-completion and history editing.

.. _using-on-generic-options:

**Generic options**

option:: -?

option:: --help-env

option:: --help-xoptions

option:: --help-all

option:: -V

.. _using-on-misc-options:

**Miscellaneous options**

option:: -b

option:: -B

option:: --check-hash-based-pycs defaultalwaysnever

option:: -d

option:: -E

option:: -i

option:: -I

option:: -O

option:: -OO

option:: -P

option:: -q

option:: -R

option:: -s

option:: -S

option:: -u

option:: -v

.. _using-on-warnings:

option:: -W arg

option:: -x

option:: -X

> *Removed in 3.14*: :option:`!-J` is no longer reserved for use by Jython_, and now has no special meaning.  .. _Jython: https://www.jython.org/

.. _using-on-controlling-color:

**Controlling color**

The Python interpreter is configured by default to use colors to highlight
output in certain situations such as when displaying tracebacks. This
behavior can be controlled by setting different environment variables.

Setting the environment variable `TERM` to `dumb` will disable color.

If the FORCE_COLOR_ environment variable is set, then color will be
enabled regardless of the value of TERM. This is useful on CI systems which
aren’t terminals but can still display ANSI escape sequences.

If the NO_COLOR_ environment variable is set, Python will disable all color
in the output. This takes precedence over `FORCE_COLOR`.

All these environment variables are used also by other tools to control color
output. To control the color output only in the Python interpreter, the
`PYTHON_COLORS` environment variable can be used. This variable takes
precedence over `NO_COLOR`, which in turn takes precedence over
`FORCE_COLOR`.

.. _using-on-envvars:

**Environment variables**

These environment variables influence Python's behavior, they are processed
before the command-line switches other than -E or -I.  It is customary that
command-line switches override environmental variables where there is a
conflict.

envvar:: PYTHONHOME

envvar:: PYTHONPATH

envvar:: PYTHONSAFEPATH

envvar:: PYTHONPLATLIBDIR

envvar:: PYTHONSTARTUP

envvar:: PYTHONOPTIMIZE

envvar:: PYTHONBREAKPOINT

envvar:: PYTHONDEBUG

envvar:: PYTHONINSPECT

envvar:: PYTHONUNBUFFERED

envvar:: PYTHONVERBOSE

envvar:: PYTHONCASEOK

envvar:: PYTHONDONTWRITEBYTECODE

envvar:: PYTHONPYCACHEPREFIX

envvar:: PYTHONHASHSEED

envvar:: PYTHONINTMAXSTRDIGITS

envvar:: PYTHONIOENCODING

envvar:: PYTHONNOUSERSITE

envvar:: PYTHONUSERBASE

envvar:: PYTHONEXECUTABLE

envvar:: PYTHONWARNINGS

envvar:: PYTHONFAULTHANDLER

envvar:: PYTHONTRACEMALLOC

envvar:: PYTHONPROFILEIMPORTTIME

envvar:: PYTHONASYNCIODEBUG

envvar:: PYTHONMALLOC

envvar:: PYTHONMALLOCSTATS

envvar:: PYTHON_PYMALLOC_HUGEPAGES

envvar:: PYTHONLEGACYWINDOWSFSENCODING

envvar:: PYTHONLEGACYWINDOWSSTDIO

envvar:: PYTHONCOERCECLOCALE

envvar:: PYTHONDEVMODE

envvar:: PYTHONUTF8

envvar:: PYTHONWARNDEFAULTENCODING

envvar:: PYTHONNODEBUGRANGES

envvar:: PYTHONPERFSUPPORT

envvar:: PYTHON_PERF_JIT_SUPPORT

envvar:: PYTHON_DISABLE_REMOTE_DEBUG

envvar:: PYTHON_CPU_COUNT

envvar:: PYTHON_FROZEN_MODULES

envvar:: PYTHON_COLORS

envvar:: PYTHON_BASIC_REPL

envvar:: PYTHON_BASIC_COMPLETER

envvar:: PYTHON_HISTORY

envvar:: PYTHON_GIL

envvar:: PYTHON_THREAD_INHERIT_CONTEXT

envvar:: PYTHON_CONTEXT_AWARE_WARNINGS

envvar:: PYTHON_PATHCONFIG_WARNINGS

envvar:: PYTHON_JIT

envvar:: PYTHON_TLBC

envvar:: PYTHON_LAZY_IMPORTS

**Debug-mode variables**

envvar:: PYTHONDUMPREFS

envvar:: PYTHONDUMPREFSFILE

envvar:: PYTHON_PRESITE
