---
id: "python-en-function-pathlib-purepath-relative_to"
language: "python"
lang: "en"
category: "function"
name: "PurePath.relative_to"
signature: "PurePath.relative_to(other, walk_up=False)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.relative_to"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.relative_to

Compute a version of this path relative to the path represented by
*other*.  If it's impossible, `ValueError` is raised::

   >>> p = PurePosixPath('/etc/passwd')
   >>> p.relative_to('/')
   PurePosixPath('etc/passwd')
   >>> p.relative_to('/etc')
   PurePosixPath('passwd')
   >>> p.relative_to('/usr')
   Traceback (most recent call last):
     File "<stdin>", line 1, in <module>
     File "pathlib.py", line 941, in relative_to
       raise ValueError(error_message.format(str(self), str(formatted)))
   ValueError: '/etc/passwd' is not in the subpath of '/usr' OR one path is relative and the other is absolute.

When *walk_up* is false (the default), the path must start with *other*.
When the argument is true, `..` entries may be added to form the
relative path. In all other cases, such as the paths referencing
different drives, `ValueError` is raised.::

   >>> p.relative_to('/usr', walk_up=True)
   PurePosixPath('../etc/passwd')
   >>> p.relative_to('foo', walk_up=True)
   Traceback (most recent call last):
     File "<stdin>", line 1, in <module>
     File "pathlib.py", line 941, in relative_to
       raise ValueError(error_message.format(str(self), str(formatted)))
   ValueError: '/etc/passwd' is not on the same drive as 'foo' OR one path is relative and the other is absolute.

> **Warning**
>
> This function is part of `PurePath` and works with strings.
> It does not check or access the underlying file structure.
> This can impact the *walk_up* option as it assumes that no symlinks
> are present in the path; call `~Path.resolve` first if
> necessary to resolve symlinks.
>

> *Changed in 3.12*: The *walk_up* parameter was added (old behavior is the same as ``walk_up=False``).

deprecated-removed:: 3.12 3.14
