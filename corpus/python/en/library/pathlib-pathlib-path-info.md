---
id: "python-en-function-pathlib-path-info"
language: "python"
lang: "en"
category: "function"
name: "Path.info"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.info"
license: "PSF"
updated: "2026-10-01"
---

# Path.info

A `~pathlib.types.PathInfo` object that supports querying file type
information. The object exposes methods that cache their results, which can
help reduce the number of system calls needed when switching on file type.
For example::

   >>> p = Path('src')
   >>> if p.info.is_symlink():
   ...     print('symlink')
   ... elif p.info.is_dir():
   ...     print('directory')
   ... elif p.info.exists():
   ...     print('something else')
   ... else:
   ...     print('not found')
   ...
   directory

If the path was generated from `Path.iterdir` then this attribute is
initialized with some information about the file type gleaned from scanning
the parent directory. Merely accessing `Path.info` does not perform
any filesystem queries.

To fetch up-to-date information, it's best to call `Path.is_dir`,
`~Path.is_file` and `~Path.is_symlink` rather than methods of
this attribute. There is no way to reset the cache; instead you can create
a new path object with an empty info cache via `p = Path(p)`.

> *Added in 3.14*
