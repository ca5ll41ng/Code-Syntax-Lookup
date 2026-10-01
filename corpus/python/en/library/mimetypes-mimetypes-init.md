---
id: "python-en-function-mimetypes-init"
language: "python"
lang: "en"
category: "function"
name: "init"
signature: "init(files=None)"
directive: "function"
module: "mimetypes"
source_url: "https://docs.python.org/3/library/mimetypes.html#mimetypes.init"
license: "PSF"
updated: "2026-10-01"
---

# init

Initialize the internal data structures.  If given, *files* must be a sequence
of file names which should be used to augment the default type map.  If omitted,
the file names to use are taken from `knownfiles`; on Windows, the
current registry settings are loaded.  Each file named in *files* or
`knownfiles` takes precedence over those named before it.  Calling
`init` repeatedly is allowed.

Specifying an empty list for *files* will prevent the system defaults from
being applied: only the well-known values will be present from a built-in list.

If *files* is `None` the internal data structure is completely rebuilt to its
initial default value. This is a stable operation and will produce the same results
when called multiple times.

> *Changed in 3.2*: Previously, Windows registry settings were ignored.
