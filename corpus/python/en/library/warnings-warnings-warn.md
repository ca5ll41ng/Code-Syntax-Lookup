---
id: "python-en-function-warnings-warn"
language: "python"
lang: "en"
category: "function"
name: "warn"
signature: "warn(message, category=None, stacklevel=1, source=None, *, skip_file_prefixes=())"
directive: "function"
module: "warnings"
source_url: "https://docs.python.org/3/library/warnings.html#warnings.warn"
license: "PSF"
updated: "2026-10-01"
---

# warn

Issue a warning, or maybe ignore it or raise an exception.  The *category*
argument, if given, must be a `warning category class`; it
defaults to `UserWarning`.  Alternatively, *message* can be a `Warning` instance,
in which case *category* will be ignored and `message.__class__` will be used.
In this case, the message text will be `str(message)`. This function raises an
exception if the particular warning issued is changed into an error by the
`warnings filter`.  The *stacklevel* argument can be used by wrapper
functions written in Python, like this::

   def deprecated_api(message):
       warnings.warn(message, DeprecationWarning, stacklevel=2)

This makes the warning refer to `deprecated_api`'s caller, rather than to
the source of `deprecated_api` itself (since the latter would defeat the
purpose of the warning message).

The *skip_file_prefixes* keyword argument can be used to indicate which
stack frames are ignored when counting stack levels. This can be useful when
you want the warning to always appear at call sites outside of a package
when a constant *stacklevel* does not fit all call paths or is otherwise
challenging to maintain. If supplied, it must be a tuple of strings. When
prefixes are supplied, stacklevel is implicitly overridden to be `max(2,
stacklevel)`. To cause a warning to be attributed to the caller from
outside of the current package you might write::

   # example/lower.py
   _warn_skips = (os.path.dirname(__file__),)

   def one_way(r_luxury_yacht=None, t_wobbler_mangrove=None):
       if r_luxury_yacht:
           warnings.warn("Please migrate to t_wobbler_mangrove=.",
                         skip_file_prefixes=_warn_skips)

   # example/higher.py
   from . import lower

   def another_way(**kw):
       lower.one_way(**kw)

This makes the warning refer to both the `example.lower.one_way()` and
`example.higher.another_way()` call sites only from calling code living
outside of `example` package.

*source*, if supplied, is the destroyed object which emitted a
`ResourceWarning`.

> *Changed in 3.6*: Added *source* parameter.

> *Changed in 3.12*: Added *skip_file_prefixes*.
