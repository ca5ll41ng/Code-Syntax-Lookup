---
id: "python-en-function-dataclasses-make_dataclass"
language: "python"
lang: "en"
category: "function"
name: "make_dataclass"
signature: "make_dataclass(cls_name, fields, *, bases=(), namespace=None, init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False, match_args=True, kw_only=False, slots=False, weakref_slot=False, module=None, qualname=None, decorator=dataclass)"
directive: "function"
module: "dataclasses"
source_url: "https://docs.python.org/3/library/dataclasses.html#dataclasses.make_dataclass"
license: "PSF"
updated: "2026-10-01"
---

# make_dataclass

Creates a new dataclass with name *cls_name*, fields as defined
in *fields*, base classes as given in *bases*, and initialized
with a namespace as given in *namespace*.  *fields* is an
iterable whose elements are each either `name`, `(name, type)`,
or `(name, type, Field)`.  If just `name` is supplied,
`typing.Any` is used for `type`.  The values of *init*,
*repr*, *eq*, *order*, *unsafe_hash*, *frozen*,
*match_args*, *kw_only*, *slots*, and *weakref_slot* have
the same meaning as they do in `dataclass`.

If *module* is defined, the `__module__` attribute
of the dataclass is set to that value.
By default, it is set to the module name of the caller.

If *qualname* is defined, the `~type.__qualname__` attribute of the dataclass
is set to that value. By default, it is set to the value passed to *cls_name*.

The *decorator* parameter is a callable that will be used to create the dataclass.
It should take the class object as a first argument and the same keyword arguments
as `dataclass`. By default, the `dataclass`
function is used.

This function is not strictly required, because any Python
mechanism for creating a new class with `~object.__annotations__` can
then apply the `dataclass` function to convert that class to
a dataclass.  This function is provided as a convenience.  For
example::

  C = make_dataclass('C',
                     [('x', int),
                       'y',
                      ('z', int, field(default=5))],
                     namespace={'add_one': lambda self: self.x + 1})

Is equivalent to::

  @dataclass
  class C:
      x: int
      y: 'typing.Any'
      z: int = 5

      def add_one(self):
          return self.x + 1

> *Added in 3.14*: Added the *decorator* parameter.

> *Added in next*: Added the *qualname* parameter.
