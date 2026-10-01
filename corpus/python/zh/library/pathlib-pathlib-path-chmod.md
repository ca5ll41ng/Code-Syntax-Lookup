---
id: "python-zh-function-pathlib-path-chmod"
language: "python"
lang: "zh"
category: "function"
name: "Path.chmod"
signature: "Path.chmod(mode, *, follow_symlinks=True)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.chmod"
license: "PSF"
updated: "2026-10-01"
---

# Path.chmod

改变文件模式和权限，和 :func:`os.chmod` 一样。

This method normally follows symlinks. Some Unix flavours support changing
permissions on the symlink itself; on these platforms you may add the
argument `follow_symlinks=False`, or use `~Path.lchmod`.

::

   >>> p = Path('setup.py')
   >>> p.stat().st_mode
   33277
   >>> p.chmod(0o444)
   >>> p.stat().st_mode
   33060

> *Changed in 3.10*: The *follow_symlinks* parameter was added.
