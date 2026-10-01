---
id: "python-en-function-array-array"
language: "python"
lang: "en"
category: "function"
name: "array"
title: "The string representation of array objects has the form"
directive: "module"
module: "array"
source_url: "https://docs.python.org/3/library/array.html#module-array"
license: "PSF"
updated: "2026-10-01"
---

# The string representation of array objects has the form

The string representation of array objects has the form
`array(typecode, initializer)`.
The *initializer* is omitted if the array is empty, otherwise it is
a Unicode string if the *typecode* is `'w'`, otherwise it is
a list of numbers.
The string representation is guaranteed to be able to be converted back to an
array with the same type and value using `eval`, so long as the
`~array.array` class has been imported using `from array import array`.
Variables `inf` and `nan` must also be defined if it contains
corresponding floating-point values.
Examples::

   array('l')
   array('w', 'hello \u2641')
   array('l', [1, 2, 3, 4, 5])
   array('d', [1.0, 2.0, 3.14, -inf, nan])

> **Seealso**
>
> Module `struct`
>    Packing and unpacking of heterogeneous binary data.
>
> [NumPy](https://numpy.org/)
>    The NumPy package defines another array type.
>

.. _ieee 754 standard: https://en.wikipedia.org/wiki/IEEE_754-2008_revision
