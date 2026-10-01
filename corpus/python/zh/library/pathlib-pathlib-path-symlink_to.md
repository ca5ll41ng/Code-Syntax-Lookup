---
id: "python-zh-function-pathlib-path-symlink_to"
language: "python"
lang: "zh"
category: "function"
name: "Path.symlink_to"
signature: "Path.symlink_to(target, target_is_directory=False)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.symlink_to"
license: "PSF"
updated: "2026-10-01"
---

# Path.symlink_to

使该路径成为一个指向 *target* 的符号链接。

On Windows, a symlink represents either a file or a directory, and does not
morph to the target dynamically.  If the target is present, the type of the
symlink will be created to match. Otherwise, the symlink will be created
as a directory if *target_is_directory* is true or a file symlink (the
default) otherwise.  On non-Windows platforms, *target_is_directory* is ignored.

::

   >>> p = Path('mylink')
   >>> p.symlink_to('setup.py')
   >>> p.resolve()
   PosixPath('/home/antoine/pathlib/setup.py')
   >>> p.stat().st_size
   956
   >>> p.lstat().st_size
   8

> **Note**
>
> The order of arguments (link, target) is the reverse
> of `os.symlink`'s.
>

> *Changed in 3.13*: Raises :exc:`UnsupportedOperation` if :func:`os.symlink` is not available. In previous versions, :exc:`NotImplementedError` was raised.
