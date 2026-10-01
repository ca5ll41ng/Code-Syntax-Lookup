---
id: "python-zh-function-test-check_warnings"
language: "python"
lang: "zh"
category: "function"
name: "check_warnings"
signature: "check_warnings(*filters, quiet=True)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/zh-cn/3/library/test.html#test.check_warnings"
license: "PSF"
updated: "2026-10-01"
---

# check_warnings

A convenience wrapper for `warnings.catch_warnings` that makes it
easier to test that a warning was correctly raised.  It is approximately
equivalent to calling `warnings.catch_warnings(record=True)` with
`warnings.simplefilter` set to `always` and with the option to
automatically validate the results that are recorded.

`check_warnings` accepts 2-tuples of the form `("message regexp",
WarningCategory)` as positional arguments. If one or more *filters* are
provided, or if the optional keyword argument *quiet* is `False`,
it checks to make sure the warnings are as expected:  each specified filter
must match at least one of the warnings raised by the enclosed code or the
test fails, and if any warnings are raised that do not match any of the
specified filters the test fails.  To disable the first of these checks,
set *quiet* to `True`.

如果未指定任何参数，则默认为::

   check_warnings(("", Warning), quiet=True)

在此情况下所有警告都会被捕获而不会引发任何错误。

On entry to the context manager, a `WarningRecorder` instance is
returned. The underlying warnings list from
`~warnings.catch_warnings` is available via the recorder object's
`warnings` attribute.  As a convenience, the attributes of the object
representing the most recent warning can also be accessed directly through
the recorder object (see example below).  If no warning has been raised,
then any of the attributes that would otherwise be expected on an object
representing a warning will return `None`.

The recorder object also has a `reset` method, which clears the
warnings list.

该上下文管理器被设计为像这样来使用::

   with check_warnings(("assertion is always true", SyntaxWarning),
                       ("", UserWarning)):
       exec('assert(False, "Hey!")')
       warnings.warn(UserWarning("Hide me!"))

In this case if either warning was not raised, or some other warning was
raised, `check_warnings` would raise an error.

When a test needs to look more deeply into the warnings, rather than
just checking whether or not they occurred, code like this can be used::

   with check_warnings(quiet=True) as w:
       warnings.warn("foo")
       assert str(w.args[0]) == "foo"
       warnings.warn("bar")
       assert str(w.args[0]) == "bar"
       assert str(w.warnings[0].args[0]) == "foo"
       assert str(w.warnings[1].args[0]) == "bar"
       w.reset()
       assert len(w.warnings) == 0

Here all warnings will be caught, and the test code tests the captured
warnings directly.

> *Changed in 3.2*: New optional arguments *filters* and *quiet*.
