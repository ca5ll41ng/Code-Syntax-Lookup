---
id: "python-en-function-os-path-join"
language: "python"
lang: "en"
category: "function"
name: "join"
signature: "join(path, /, *paths)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.join"
license: "PSF"
updated: "2026-10-01"
---

# join

Join one or more path segments intelligently.  The return value is the
concatenation of *path* and all members of *\*paths*, with exactly one
directory separator following each non-empty part, except the last. That is,
the result will only end in a separator if the last part is either empty or
ends in a separator.

If a segment is an absolute path (which on Windows requires both a drive and
a root), then all previous segments are ignored and joining continues from the
absolute path segment. On Linux, for example::

   >>> os.path.join('/home/foo', 'bar')
   '/home/foo/bar'
   >>> os.path.join('/home/foo', '/home/bar')
   '/home/bar'

On Windows, the drive is not reset when a rooted path segment (e.g.,
`r'\foo'`) is encountered. If a segment is on a different drive or is an
absolute path, all previous segments are ignored and the drive is reset. For
example::

   >>> os.path.join('c:\\', 'foo')
   'c:\\foo'
   >>> os.path.join('c:\\foo', 'd:\\bar')
   'd:\\bar'

Note that since there is a current directory for each drive,
`os.path.join("c:", "foo")` represents a path relative to the current
directory on drive `C:` (`c:foo`), not `c:\\foo`.

> *Changed in 3.6*: Accepts a :term:`path-like object` for *path* and *paths*.
