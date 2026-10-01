---
id: "python-en-function-string-templatelib-interpolation"
language: "python"
lang: "en"
category: "function"
name: "Interpolation"
directive: "class"
module: "string.templatelib"
source_url: "https://docs.python.org/3/library/string.templatelib.html#string.templatelib.Interpolation"
license: "PSF"
updated: "2026-10-01"
---

# Interpolation

The `Interpolation` type represents an expression inside a template string.
It is immutable, meaning that attributes of an interpolation cannot be reassigned.

Interpolations support pattern matching, allowing you to match against
their attributes with the `match statement`:

>>> from string.templatelib import Interpolation
>>> interpolation = t'{1. + 2.:.2f}'.interpolations[0]
>>> interpolation
Interpolation(3.0, '1. + 2.', None, '.2f')
>>> match interpolation:
...     case Interpolation(value, expression, conversion, format_spec):
...         print(value, expression, conversion, format_spec, sep='  ')
...
3.0  1. + 2.  None  .2f

Interpolations are `generic` over the types of their values.

#### Attributes

attribute:: value

attribute:: expression

attribute:: conversion

attribute:: format_spec

#### Methods

method:: __new__(value: object, \
