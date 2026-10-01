---
id: "python-en-function-locale-strxfrm"
language: "python"
lang: "en"
category: "function"
name: "strxfrm"
signature: "strxfrm(string)"
directive: "function"
module: "locale"
source_url: "https://docs.python.org/3/library/locale.html#locale.strxfrm"
license: "PSF"
updated: "2026-10-01"
---

# strxfrm

Transforms a string to one that can be used in locale-aware
comparisons.  For example, `strxfrm(s1) < strxfrm(s2)` is
equivalent to `strcoll(s1, s2) < 0`.  This function can be used
when the same string is compared repeatedly, e.g. when collating a
sequence of strings.
