---
id: "python-en-function-glob-iglob-pathname-root_dir-none-dir_fd-none-recursive-false"
language: "python"
lang: "en"
category: "function"
name: "iglob(pathname, *, root_dir=None, dir_fd=None, recursive=False, \\"
directive: "function"
module: "glob"
source_url: "https://docs.python.org/3/library/glob.html#glob.iglob(pathname, *, root_dir=None, dir_fd=None, recursive=False, \\"
license: "PSF"
updated: "2026-10-01"
---

# iglob(pathname, *, root_dir=None, dir_fd=None, recursive=False, \

Return an `iterator` which yields the same values as `glob`
without actually storing them all simultaneously.

audit-event:: glob.glob pathname,recursive glob.iglob

audit-event:: glob.glob/2 pathname,recursive,root_dir,dir_fd glob.iglob

> **Note**
>
> This function may return duplicate path names if *pathname*
> contains multiple "`**`" patterns and *recursive* is true.
>

> **Note**
>
> Any `OSError` exceptions raised from scanning the filesystem are
> suppressed. This includes `PermissionError` when accessing
> directories without read permission.
>

> *Changed in 3.5*: Support for recursive globs using "``**``".

> *Changed in 3.10*: Added the *root_dir* and *dir_fd* parameters.

> *Changed in 3.11*: Added the *include_hidden* parameter.
