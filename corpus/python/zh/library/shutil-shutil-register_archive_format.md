---
id: "python-zh-function-shutil-register_archive_format"
language: "python"
lang: "zh"
category: "function"
name: "register_archive_format"
signature: "register_archive_format(name, function, [extra_args, [description]])"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/zh-cn/3/library/shutil.html#shutil.register_archive_format"
license: "PSF"
updated: "2026-10-01"
---

# register_archive_format

为 *name* 格式注册一个归档器。

*function* is the callable that will be used to create archives. The callable
will receive the *base_name* of the file to create, followed by the
*base_dir* (which defaults to `os.curdir`) to start archiving from.
Further arguments are passed as keyword arguments: *owner*, *group*,
*dry_run* and *logger* (as passed in `make_archive`).

If *function* has the custom attribute `function.supports_root_dir` set to `True`,
the *root_dir* argument is passed as a keyword argument.
Otherwise the current working directory of the process is temporarily
changed to *root_dir* before calling *function*.
In this case `make_archive` is not thread-safe.

If given, *extra_args* is a sequence of `(name, value)` pairs that will be
used as extra keywords arguments when the archiver callable is used.

*description* is used by `get_archive_formats` which returns the
list of archivers.  Defaults to an empty string.

> *Changed in 3.12*: Added support for functions supporting the *root_dir* argument.
