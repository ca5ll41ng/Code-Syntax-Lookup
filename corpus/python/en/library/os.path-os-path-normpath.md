---
id: "python-en-function-os-path-normpath"
language: "python"
lang: "en"
category: "function"
name: "normpath"
signature: "normpath(path)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.normpath"
license: "PSF"
updated: "2026-10-01"
---

# normpath

Normalize a pathname by collapsing redundant separators and up-level
references so that `A//B`, `A/B/`, `A/./B` and `A/foo/../B` all
become `A/B`.  This string manipulation may change the meaning of a path
that contains symbolic links.  On Windows, it converts forward slashes to
backward slashes. To normalize case, use `normcase`.

> **Note**
>
> On POSIX systems, in accordance with `IEEE Std 1003.1 2013 Edition; 4.13
> Pathname Resolution <https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_13>`_,
> if a pathname begins with exactly two slashes, the first component
> following the leading characters may be interpreted in an implementation-defined
> manner, although more than two leading characters shall be treated as a
> single character.
>

> *Changed in 3.6*: Accepts a :term:`path-like object`.
