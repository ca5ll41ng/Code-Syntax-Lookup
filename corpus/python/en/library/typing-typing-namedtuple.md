---
id: "python-en-function-typing-namedtuple"
language: "python"
lang: "en"
category: "function"
name: "NamedTuple"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.NamedTuple"
license: "PSF"
updated: "2026-10-01"
---

# NamedTuple

Typed version of `collections.namedtuple`.

Usage::

    class Employee(NamedTuple):
        name: str
        id: int

This is equivalent to::

    Employee = collections.namedtuple('Employee', ['name', 'id'])

To give a field a default value, you can assign to it in the class body::

   class Employee(NamedTuple):
       name: str
       id: int = 3

   employee = Employee('Guido')
   assert employee.id == 3

Fields with a default value must come after any fields without a default.

The types for each field name can be retrieved by calling
`annotationlib.get_annotations` on the resulting class. (The field
names are in the `_fields` attribute and the default values are in the
`_field_defaults` attribute, both of which are part of the `~collections.namedtuple`
API.)

`NamedTuple` subclasses can also have docstrings and methods::

   class Employee(NamedTuple):
       """Represents an employee."""
       name: str
       id: int = 3

       def __repr__(self) -> str:
           return f'<Employee {self.name}, id={self.id}>'

`NamedTuple` subclasses can be generic::

   class Group[T](NamedTuple):
       key: T
       group: list[T]

Backward-compatible usage::

    # For creating a generic NamedTuple on Python 3.11
    T = TypeVar("T")

    class Group(NamedTuple, Generic[T]):
        key: T
        group: list[T]

    # A functional syntax is also supported
    Employee = NamedTuple('Employee', [('name', str), ('id', int)])

> *Changed in 3.6*: Added support for :pep:`526` variable annotation syntax.

> *Changed in 3.6.1*: Added support for default values, methods, and docstrings.

> *Changed in 3.8*: The ``_field_types`` and ``__annotations__`` attributes are now regular dictionaries instead of instances of ``OrderedDict``.

> *Changed in 3.9*: Removed the ``_field_types`` attribute in favor of the more standard ``__annotations__`` attribute which has the same information.

> *Changed in 3.9*: ``NamedTuple`` is now a function rather than a class. It can still be used as a class base, as described above.

> *Changed in 3.11*: Added support for generic namedtuples.

> *Changed in 3.14*: Using :func:`super` (and the ``__class__`` :term:`closure variable`) in methods of ``NamedTuple`` subclasses is unsupported and causes a :class:`TypeError`.
