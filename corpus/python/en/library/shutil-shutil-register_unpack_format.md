---
id: "python-en-function-shutil-register_unpack_format"
language: "python"
lang: "en"
category: "function"
name: "register_unpack_format"
signature: "register_unpack_format(name, extensions, function[, extra_args[, description]])"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/3/library/shutil.html#shutil.register_unpack_format"
license: "PSF"
updated: "2026-10-01"
---

# register_unpack_format

Registers an unpack format. *name* is the name of the format and
*extensions* is a list of extensions corresponding to the format, like
`.zip` for Zip files.

*function* is the callable that will be used to unpack archives. The
callable will receive:

- the path of the archive, as a positional argument;
- the directory the archive must be extracted to, as a positional argument;
- possibly a *filter* keyword argument, if it was given to
  `unpack_archive`;
- additional keyword arguments, specified by *extra_args* as a sequence
  of `(name, value)` tuples.

*description* can be provided to describe the format, and will be returned
by the `get_unpack_formats` function.
