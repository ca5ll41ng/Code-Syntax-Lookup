---
id: "python-en-function-builtins-baseexceptiongroup"
language: "python"
lang: "en"
category: "function"
name: "BaseExceptionGroup"
signature: "BaseExceptionGroup(msg, excs)"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#BaseExceptionGroup"
license: "PSF"
updated: "2026-10-01"
---

# BaseExceptionGroup

Both of these exception types wrap the exceptions in the sequence `excs`.
The `msg` parameter must be a string. The difference between the two
classes is that `BaseExceptionGroup` extends `BaseException` and
it can wrap any exception, while `ExceptionGroup` extends `Exception`
and it can only wrap subclasses of `Exception`. This design is so that
`except Exception` catches an `ExceptionGroup` but not
`BaseExceptionGroup`.

The `BaseExceptionGroup` constructor returns an `ExceptionGroup`
rather than a `BaseExceptionGroup` if all contained exceptions are
`Exception` instances, so it can be used to make the selection
automatic. The `ExceptionGroup` constructor, on the other hand,
raises a `TypeError` if any contained exception is not an
`Exception` subclass.

Exception groups are `generic` over the type of their
contained exceptions.

impl-detail::

attribute:: message

attribute:: exceptions

method:: subgroup(condition)

method:: split(condition)

method:: derive(excs)

Note that `BaseExceptionGroup` defines `~object.__new__`, so
subclasses that need a different constructor signature need to
override that rather than `~object.__init__`. For example, the following
defines an exception group subclass which accepts an exit_code and
constructs the group's message from it. ::

   class Errors(ExceptionGroup):
      def __new__(cls, errors, exit_code):
         self = super().__new__(Errors, f"exit code: {exit_code}", errors)
         self.exit_code = exit_code
         return self

      def derive(self, excs):
         return Errors(excs, self.exit_code)

Like `ExceptionGroup`, any subclass of `BaseExceptionGroup` which
is also a subclass of `Exception` can only wrap instances of
`Exception`.

> *Added in 3.11*
