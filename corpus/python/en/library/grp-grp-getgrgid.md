---
id: "python-en-function-grp-getgrgid"
language: "python"
lang: "en"
category: "function"
name: "getgrgid"
signature: "getgrgid(id)"
directive: "function"
module: "grp"
source_url: "https://docs.python.org/3/library/grp.html#grp.getgrgid"
license: "PSF"
updated: "2026-10-01"
---

# getgrgid

Return the group database entry for the given numeric group ID. `KeyError`
is raised if the entry asked for cannot be found.

> *Changed in 3.10*: :exc:`TypeError` is raised for non-integer arguments like floats or strings.
