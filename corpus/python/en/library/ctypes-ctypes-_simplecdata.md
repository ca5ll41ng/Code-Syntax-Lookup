---
id: "python-en-function-ctypes-_simplecdata"
language: "python"
lang: "en"
category: "function"
name: "_SimpleCData"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes._SimpleCData"
license: "PSF"
updated: "2026-10-01"
---

# _SimpleCData

This non-public class is the base class of all fundamental ctypes data
types. It is mentioned here because it contains the common attributes of the
fundamental ctypes data types.  `_SimpleCData` is a subclass of
`_CData`, so it inherits their methods and attributes. ctypes data
types that are not and do not contain pointers can now be pickled.

Instances have a single attribute:

attribute:: value

Each subclass has a class attribute:

attribute:: _type_
