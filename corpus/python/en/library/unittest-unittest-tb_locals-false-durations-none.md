---
id: "python-en-function-unittest-tb_locals-false-durations-none"
language: "python"
lang: "en"
category: "function"
name: "tb_locals=False, durations=None)"
directive: "class"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.tb_locals=False, durations=None)"
license: "PSF"
updated: "2026-10-01"
---

# tb_locals=False, durations=None)

A basic test runner implementation that outputs results to a stream. If *stream*
is `None`, the default, `sys.stderr` is used as the output stream. This class
has a few configurable parameters, but is essentially very simple.  Graphical
applications which run test suites should provide alternate implementations. Such
implementations should accept `**kwargs` as the interface to construct runners
changes when features are added to unittest.

By default this runner shows `DeprecationWarning`,
`PendingDeprecationWarning`, `ResourceWarning` and
`ImportWarning` even if they are `ignored by default`.  This behavior can
be overridden using Python's `-Wd` or `-Wa` options
(see `Warning control`) and leaving
*warnings* to `None`.

> *Changed in 3.2*: Added the *warnings* parameter.

> *Changed in 3.2*: The default stream is set to :data:`sys.stderr` at instantiation time rather than import time.

> *Changed in 3.5*: Added the *tb_locals* parameter.

> *Changed in 3.12*: Added the *durations* parameter.

method:: _makeResult()

method:: run(test)
