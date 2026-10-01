---
id: "python-en-function-ctypes-structure"
language: "python"
lang: "en"
category: "function"
name: "Structure"
signature: "Structure(*args, **kw)"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.Structure"
license: "PSF"
updated: "2026-10-01"
---

# Structure

Abstract base class for structures in *native* byte order.

Concrete structure and union types must be created by subclassing one of these
types, and at least define a `_fields_` class variable. `ctypes` will
create `descriptor`\s which allow reading and writing the fields by direct
attribute accesses.  These are the

attribute:: _fields_

attribute:: _pack_

attribute:: _align_

attribute:: _layout_

attribute:: _anonymous_

It is possible to define sub-subclasses of structures, they inherit the
fields of the base class.  If the subclass definition has a separate
`_fields_` variable, the fields specified in this are appended to the
fields of the base class.

Structure and union constructors accept both positional and keyword
arguments.  Positional arguments are used to initialize member fields in the
same order as they are appear in `_fields_`.  Keyword arguments in the
constructor are interpreted as attribute assignments, so they will initialize
`_fields_` with the same name, or create new attributes for names not
present in `_fields_`.
