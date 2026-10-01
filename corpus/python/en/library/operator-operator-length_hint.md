---
id: "python-en-function-operator-length_hint"
language: "python"
lang: "en"
category: "function"
name: "length_hint"
signature: "length_hint(obj, default=0)"
directive: "function"
module: "operator"
source_url: "https://docs.python.org/3/library/operator.html#operator.length_hint"
license: "PSF"
updated: "2026-10-01"
---

# length_hint

Return an estimated length for the object *obj*. First try to return its
actual length, then an estimate using `object.__length_hint__`, and
finally return the default value.

> *Added in 3.4*
