---
id: "python-en-function-builtins-object"
language: "python"
lang: "en"
category: "function"
name: "object"
signature: "object()"
directive: "class"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#object"
license: "PSF"
updated: "2026-10-01"
---

# object

This is the ultimate base class of all other classes. It has methods
that are common to all instances of Python classes. When the constructor
is called, it returns a new featureless object. The constructor does not
accept any arguments.

> **Note**
>
> `object` instances do *not* have `~object.__dict__`
> attributes, so you can't assign arbitrary attributes to an instance of
> `object`.
>
