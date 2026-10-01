---
id: "python-en-function-bdb-breakpoint"
language: "python"
lang: "en"
category: "function"
name: "Breakpoint"
signature: "Breakpoint(self, file, line, temporary=False, cond=None, funcname=None)"
directive: "class"
module: "bdb"
source_url: "https://docs.python.org/3/library/bdb.html#bdb.Breakpoint"
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

`Breakpoint` instances have the following methods:

method:: deleteMe()

method:: enable()

method:: disable()

method:: bpformat()

method:: bpprint(out=None)

`Breakpoint` instances have the following attributes:

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
