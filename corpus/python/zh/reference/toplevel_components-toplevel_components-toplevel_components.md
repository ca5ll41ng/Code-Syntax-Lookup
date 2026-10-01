---
id: "python-zh-syntax-toplevel_components-toplevel_components"
language: "python"
lang: "zh"
category: "syntax"
name: "toplevel_components"
title: "********************"
module: "toplevel_components"
source_url: "https://docs.python.org/zh-cn/3/reference/toplevel_components.html"
license: "PSF"
updated: "2026-10-01"
---

# ********************

.. _top-level:

********************
Top-level components
********************

The Python interpreter can get its input from a number of sources: from a script
passed to it as standard input or as program argument, typed in interactively,
from a module source file, etc.  This chapter gives the syntax used in these
cases.

.. _programs:

**Complete Python programs**

While a language specification need not prescribe how the language interpreter
is invoked, it is useful to have a notion of a complete Python program.  A
complete Python program is executed in a minimally initialized environment: all
built-in and standard modules are available, but none have been initialized,
except for `sys` (various system services), `builtins` (built-in
functions, exceptions and `None`) and `__main__`.  The latter is used to
provide the local and global namespace for execution of the complete program.

The syntax for a complete Python program is that for file input, described in
the next section.

The interpreter may also be invoked in interactive mode; in this case, it does
not read and execute a complete program but reads and executes one statement
(possibly compound) at a time.  The initial environment is identical to that of
a complete program; each statement is executed in the namespace of
`__main__`.

A complete program can be passed to the interpreter
in three forms: with the `-c` *string* command line option, as a file
passed as the first command line argument, or as standard input.  If the file
or standard input is a tty device, the interpreter enters interactive mode;
otherwise, it executes the file as a complete program.

.. _file-input:

**File input**

所有从非交互式文件读取的输入都具有相同的形式:

grammar-snippet::

此语法用于下列几种情况:

* when parsing a complete Python program (from a file or from a string);

* when parsing a module;

* when parsing a string passed to the `exec` function;

.. _interactive:

**Interactive input**

交互模式下的输入使用以下语法进行解析:

grammar-snippet::

Note that a (top-level) compound statement must be followed by a blank line in
interactive mode; this is needed to help the parser detect the end of the input.

.. _expression-input:

**Expression input**

`eval` is used for expression input.  It ignores leading whitespace. The
string argument to `eval` must have the following form:

grammar-snippet::
