---
id: "python-en-function-os-supports_effective_ids"
language: "python"
lang: "en"
category: "function"
name: "supports_effective_ids"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.supports_effective_ids"
license: "PSF"
updated: "2026-10-01"
---

# supports_effective_ids

A `set` object indicating whether `os.access` permits
specifying `True` for its *effective_ids* parameter on the local platform.
(Specifying `False` for *effective_ids* is always supported on all
platforms.)  If the local platform supports it, the collection will contain
`os.access`; otherwise it will be empty.

This expression evaluates to `True` if `os.access` supports
`effective_ids=True` on the local platform::

    os.access in os.supports_effective_ids

Currently *effective_ids* is only supported on Unix platforms;
it does not work on Windows.

> *Added in 3.3*
