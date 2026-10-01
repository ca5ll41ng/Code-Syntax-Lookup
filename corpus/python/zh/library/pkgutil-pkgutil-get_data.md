---
id: "python-zh-function-pkgutil-get_data"
language: "python"
lang: "zh"
category: "function"
name: "get_data"
signature: "get_data(package, resource)"
directive: "function"
module: "pkgutil"
source_url: "https://docs.python.org/zh-cn/3/library/pkgutil.html#pkgutil.get_data"
license: "PSF"
updated: "2026-10-01"
---

# get_data

从包中获取一个资源。

This is a wrapper for the `loader`
`get_data` API.  The
*package* argument should be the name of a package, in standard module format
(`foo.bar`).  The *resource* argument should be in the form of a relative
filename, using `/` as the path separator.

The function returns a binary string that is the contents of the specified
resource.

This function uses the `loader` method
`~importlib.abc.FileLoader.get_data`
to support modules installed in the filesystem, but also in zip files,
databases, or elsewhere.

For packages located in the filesystem, which have already been imported,
this is the rough equivalent of::

   d = os.path.dirname(sys.modules[package].__file__)
   data = open(os.path.join(d, resource), 'rb').read()

Like the `open` function, `get_data` can follow parent
directories (`../`) and absolute paths (starting with `/` or `C:/`,
for example).
It can open compilation/installation artifacts like `.py` and `.pyc`
files or files with `reserved filenames`.
To be compatible with non-filesystem loaders, avoid using these features.

> **Warning**
>
> This function is intended for trusted input.
> It does not verify that *resource* "belongs" to *package*.
>

If you use a user-provided *resource* path, consider verifying it.
For example, require an alphanumeric filename with a known extension, or
install and check a list of known resources.

If the package cannot be located or loaded, or it uses a `loader`
which does not support `get_data`,
then `None` is returned.  In particular, the `loader` for
`namespace packages` does not support
`get_data`.

> **Seealso**
>
> The `importlib.resources` module provides structured access to
> module resources.
>
