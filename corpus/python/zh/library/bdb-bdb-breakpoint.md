---
id: "python-zh-function-bdb-breakpoint"
language: "python"
lang: "zh"
category: "function"
name: "Breakpoint"
signature: "Breakpoint(self, file, line, temporary=False, cond=None, funcname=None)"
directive: "class"
module: "bdb"
source_url: "https://docs.python.org/zh-cn/3/library/bdb.html#bdb.Breakpoint"
license: "PSF"
updated: "2026-10-01"
---

# Breakpoint

This class implements temporary breakpoints, ignore counts, disabling and
(re-)enabling, and conditionals.

Breakpoints are indexed by number through a list called `bpbynumber`
and by `(file, line)` pairs through `bplist`.  The former points to
a single instance of class `Breakpoint`.  The latter points to a list
of such instances since there may be more than one breakpoint per line.

When creating a breakpoint, its associated `file name` should
be in canonical form.  If a `funcname` is defined, a breakpoint
`hit` will be counted when the first line of that function is
executed.  A `conditional` breakpoint always counts a
`hit`.

:class:`Breakpoint` 的实例具有下列方法：

method:: deleteMe()

method:: enable()

method:: disable()

method:: bpformat()

method:: bpprint(out=None)

:class:`Breakpoint` 实例具有以下属性：

attribute:: file

attribute:: line

attribute:: temporary

attribute:: cond

attribute:: funcname

attribute:: enabled

attribute:: bpbynumber

attribute:: bplist

attribute:: ignore

attribute:: hits
