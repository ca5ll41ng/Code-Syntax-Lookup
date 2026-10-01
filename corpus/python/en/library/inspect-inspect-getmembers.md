---
id: "python-en-function-inspect-getmembers"
language: "python"
lang: "en"
category: "function"
name: "getmembers"
signature: "getmembers(object[, predicate])"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getmembers"
license: "PSF"
updated: "2026-10-01"
---

# getmembers

Return all the members of an object in a list of `(name, value)`
pairs sorted by name. If the optional *predicate* argument—which will be
called with the `value` object of each member—is supplied, only members
for which the predicate returns a true value are included.

> **Note**
>
> `getmembers` will only return class attributes defined in the
> metaclass when the argument is a class and those attributes have been
> listed in the metaclass' custom `~object.__dir__`.
>
