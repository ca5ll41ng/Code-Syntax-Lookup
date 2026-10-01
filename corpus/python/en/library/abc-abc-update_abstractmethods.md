---
id: "python-en-function-abc-update_abstractmethods"
language: "python"
lang: "en"
category: "function"
name: "update_abstractmethods"
signature: "update_abstractmethods(cls)"
directive: "function"
module: "abc"
source_url: "https://docs.python.org/3/library/abc.html#abc.update_abstractmethods"
license: "PSF"
updated: "2026-10-01"
---

# update_abstractmethods

A function to recalculate an abstract class's abstraction status. This
function should be called if a class's abstract methods have been
implemented or changed after it was created. Usually, this function should
be called from within a class decorator.

Returns *cls*, to allow usage as a class decorator.

If *cls* is not an instance of `ABCMeta`, does nothing.

> **Note**
>
> This function assumes that *cls*'s superclasses are already updated.
> It does not update any subclasses.
>

> *Added in 3.10*
