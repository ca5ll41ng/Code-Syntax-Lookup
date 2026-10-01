---
id: "python-en-function-re-subn"
language: "python"
lang: "en"
category: "function"
name: "subn"
signature: "subn(pattern, repl, string, count=0, flags=0)"
directive: "function"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.subn"
license: "PSF"
updated: "2026-10-01"
---

# subn

Perform the same operation as `sub`, but return a tuple `(new_string,
number_of_subs_made)`.

The expression's behaviour can be modified by specifying a *flags* value.
Values can be any of the `flags`_ variables, combined using bitwise OR
(the `|` operator).
