---
id: "python-en-function-re-prefixmatch"
language: "python"
lang: "en"
category: "function"
name: "prefixmatch"
signature: "prefixmatch(pattern, string, flags=0)"
directive: "function"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.prefixmatch"
license: "PSF"
updated: "2026-10-01"
---

# prefixmatch

If zero or more characters at the beginning of *string* match the regular
expression *pattern*, return a corresponding `~re.Match`.  Return
`None` if the string does not match the pattern; note that this is
different from a zero-length match.

> **Note**
>
> Even in `MULTILINE` mode, this will only match at the
> beginning of the string and not at the beginning of each line.
>

If you want to locate a match anywhere in *string*, use `search`
instead (see also `search-vs-match`).

The expression's behaviour can be modified by specifying a *flags* value.
Values can be any of the `flags`_ variables, combined using bitwise OR
(the `|` operator).

This function now has two names and has long been known as
`~re.match`.  Use that name when you need to retain compatibility with
older Python versions.

> *Added in 3.15*
