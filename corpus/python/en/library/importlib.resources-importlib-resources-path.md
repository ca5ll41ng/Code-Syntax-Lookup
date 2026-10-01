---
id: "python-en-function-importlib-resources-path"
language: "python"
lang: "en"
category: "function"
name: "path"
signature: "path(anchor, *path_names)"
directive: "function"
module: "importlib.resources"
source_url: "https://docs.python.org/3/library/importlib.resources.html#importlib.resources.path"
license: "PSF"
updated: "2026-10-01"
---

# path

Provides the path to the *resource* as an actual file system path.  This
function returns a context manager for use in a `with` statement.
The context manager provides a `pathlib.Path` object.

Exiting the context manager cleans up any temporary files created, e.g.
when the resource needs to be extracted from a zip file.

For example, the `~pathlib.Path.stat` method requires
an actual file system path; it can be used like this::

    with importlib.resources.path(anchor, "resource.txt") as fspath:
        result = fspath.stat()

See `the introduction` for
details on *anchor* and *path_names*.

This function is roughly equivalent to::

      as_file(files(anchor).joinpath(*path_names))

> *Changed in 3.13*: Multiple *path_names* are accepted.
