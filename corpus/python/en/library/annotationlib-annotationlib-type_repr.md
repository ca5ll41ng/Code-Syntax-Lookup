---
id: "python-en-function-annotationlib-type_repr"
language: "python"
lang: "en"
category: "function"
name: "type_repr"
signature: "type_repr(value)"
directive: "function"
module: "annotationlib"
source_url: "https://docs.python.org/3/library/annotationlib.html#annotationlib.type_repr"
license: "PSF"
updated: "2026-10-01"
---

# type_repr

Convert an arbitrary Python value to a format suitable for use by the
`~Format.STRING` format. This calls `repr` for most
objects, but has special handling for some objects, such as type objects.

This is meant as a helper for user-provided
annotate functions that support the `~Format.STRING` format but
do not have access to the code creating the annotations. It can also
be used to provide a user-friendly string representation for other
objects that contain values that are commonly encountered in annotations.

> *Added in 3.14*
