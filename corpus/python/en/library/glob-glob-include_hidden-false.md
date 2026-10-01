---
id: "python-en-function-glob-include_hidden-false"
language: "python"
lang: "en"
category: "function"
name: "include_hidden=False)"
directive: "function"
module: "glob"
source_url: "https://docs.python.org/3/library/glob.html#glob.include_hidden=False)"
license: "PSF"
updated: "2026-10-01"
---

# include_hidden=False)

Return a possibly empty list of path names that match *pathname*, which must be
a string containing a path specification. *pathname* can be either absolute
(like `/usr/src/Python-1.5/Makefile`) or relative (like
`../../Tools/\*/\*.gif`), and can contain shell-style wildcards. Broken
symlinks are included in the results (as in the shell). Whether or not the
results are sorted depends on the file system.  If a file that satisfies
conditions is removed or added during the call of this function, whether
a path name for that file will be included is unspecified.

If *root_dir* is not `None`, it should be a `path-like object`
specifying the root directory for searching.  It has the same effect on
`glob` as changing the current directory before calling it.  If
*pathname* is relative, the result will contain paths relative to
*root_dir*.

This function can support `paths relative to directory descriptors` with the *dir_fd* parameter.

If *recursive* is true, the pattern "`**`" will match any files and zero or
more directories, subdirectories and symbolic links to directories. If the
pattern is followed by an `os.sep` or `os.altsep` then files will not
match.

If *include_hidden* is true, wildcards can match path segments that
begin with a dot (`.`).

audit-event:: glob.glob pathname,recursive glob.glob

audit-event:: glob.glob/2 pathname,recursive,root_dir,dir_fd glob.glob

> **Note**
>
> Using the "`**`" pattern in large directory trees may consume
> an inordinate amount of time.
>

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
