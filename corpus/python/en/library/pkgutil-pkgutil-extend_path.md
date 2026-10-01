---
id: "python-en-function-pkgutil-extend_path"
language: "python"
lang: "en"
category: "function"
name: "extend_path"
signature: "extend_path(path, name)"
directive: "function"
module: "pkgutil"
source_url: "https://docs.python.org/3/library/pkgutil.html#pkgutil.extend_path"
license: "PSF"
updated: "2026-10-01"
---

# extend_path

Extend the search path for the modules which comprise a package.  Intended
use is to place the following code in a package's `__init__.py`::

   from pkgutil import extend_path
   __path__ = extend_path(__path__, __name__)

For each directory on `sys.path` that has a subdirectory that matches the
package name, add the subdirectory to the package's
`~module.__path__`. This is useful
if one wants to distribute different parts of a single logical package as multiple
directories.

It also looks for `\*.pkg` files beginning where `*` matches the
*name* argument.  This feature is similar to `\*.pth` files (see the
`site` module for more information), except that it doesn't special-case
lines starting with `import`.  A `\*.pkg` file is trusted at face
value: apart from skipping blank lines and ignoring comments, all entries
found in a `\*.pkg` file are added to the path, regardless of whether
they exist on the filesystem (this is a feature).

If the input path is not a list (as is the case for frozen packages) it is
returned unchanged.  The input path is not modified; an extended copy is
returned.  Items are only appended to the copy at the end.

It is assumed that `sys.path` is a sequence.  Items of `sys.path`
that are not strings referring to existing directories are ignored. Unicode
items on `sys.path` that cause errors when used as filenames may cause
this function to raise an exception (in line with `os.path.isdir`
behavior).
