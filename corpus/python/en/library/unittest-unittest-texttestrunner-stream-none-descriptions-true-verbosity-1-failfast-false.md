---
id: "python-en-function-unittest-texttestrunner-stream-none-descriptions-true-verbosity-1-failfast-false"
language: "python"
lang: "en"
category: "function"
name: "TextTestRunner(stream=None, descriptions=True, verbosity=1, failfast=False, \\"
directive: "class"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.TextTestRunner(stream=None, descriptions=True, verbosity=1, failfast=False, \\"
license: "PSF"
updated: "2026-10-01"
---

# TextTestRunner(stream=None, descriptions=True, verbosity=1, failfast=False, \

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
