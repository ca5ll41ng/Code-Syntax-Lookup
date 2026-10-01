---
id: "python-en-function-importlib-resources-as_file"
language: "python"
lang: "en"
category: "function"
name: "as_file"
signature: "as_file(traversable)"
directive: "function"
module: "importlib.resources"
source_url: "https://docs.python.org/3/library/importlib.resources.html#importlib.resources.as_file"
license: "PSF"
updated: "2026-10-01"
---

# as_file

Given a `~importlib.resources.abc.Traversable` object representing
a file or directory, typically from `importlib.resources.files`,
return a context manager for use in a `with` statement.
The context manager provides a `pathlib.Path` object.

Exiting the context manager cleans up any temporary file or directory
created when the resource was extracted from e.g. a zip file.

Use `as_file` when the Traversable methods
(`read_text`, etc) are insufficient and an actual file or directory on
the file system is required.

> *Added in 3.9*

> *Changed in 3.12*: Added support for *traversable* representing a directory.
