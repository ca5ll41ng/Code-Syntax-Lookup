---
id: "python-en-function-os-path-split"
language: "python"
lang: "en"
category: "function"
name: "split"
signature: "split(path, /)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.split"
license: "PSF"
updated: "2026-10-01"
---

# split

Split the pathname *path* into a pair, `(head, tail)` where *tail* is the
last pathname component and *head* is everything leading up to that.  The
*tail* part will never contain a slash; if *path* ends in a slash, *tail*
will be empty.  If there is no slash in *path*, *head* will be empty.  If
*path* is empty, both *head* and *tail* are empty.  Trailing slashes are
stripped from *head* unless it is the root (one or more slashes only).  In
all cases, `join(head, tail)` returns a path to the same location as *path*
(but the strings may differ).  Also see the functions `join`,
`dirname` and `basename`.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
