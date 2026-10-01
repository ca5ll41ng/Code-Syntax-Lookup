---
id: "python-en-function-builtins-type"
language: "python"
lang: "en"
category: "function"
name: "type"
signature: "type(object, /)"
directive: "class"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#type"
license: "PSF"
updated: "2026-10-01"
---

# type

With one argument, return the type of an *object*.  The return value is a
type object and generally the same object as returned by
`object.__class__`.

The `isinstance` built-in function is recommended for testing the type
of an object, because it takes subclasses into account.

With three arguments, return a new type object.  This is essentially a
dynamic form of the `class` statement. The *name* string is
the class name and becomes the `~type.__name__` attribute.
The *bases* tuple contains the base classes and becomes the
`~type.__bases__` attribute; if empty, `object`, the
ultimate base of all classes, is added.  The *dict* dictionary contains
attribute and method definitions for the class body; it may be copied
or wrapped before becoming the `~type.__dict__` attribute.
The following two statements create identical `type` objects:

   >>> class X:
   ...     a = 1
   ...
   >>> X = type('X', (), dict(a=1))

See also:

* `Documentation on attributes and methods on classes`.
* `bltin-type-objects`

Keyword arguments provided to the three argument form are passed to the
appropriate metaclass machinery (usually `~object.__init_subclass__`)
in the same way that keywords in a class
definition (besides *metaclass*) would.

Unlike a `class` statement, the three argument form does not
call the metaclass `__prepare__` method (see `prepare`).  Use
`types.new_class` to dynamically create a class using the
appropriate metaclass.

See also `class-customization`.

> *Changed in 3.6*: Subclasses of :class:`!type` which don't override ``type.__new__`` may no longer use the one-argument form to get the type of an object.

> *Changed in 3.15*: *dict* can now be a :class:`frozendict`.
