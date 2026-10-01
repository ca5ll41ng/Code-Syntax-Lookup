---
id: "python-en-function-platform-uname"
language: "python"
lang: "en"
category: "function"
name: "uname"
signature: "uname()"
directive: "function"
module: "platform"
source_url: "https://docs.python.org/3/library/platform.html#platform.uname"
license: "PSF"
updated: "2026-10-01"
---

# uname

Fairly portable uname interface. Returns a `~collections.namedtuple`
containing six attributes: `system`, `node`, `release`,
`version`, `machine`, and `processor`.

`processor` is resolved late, on demand.

Note: the first two attribute names differ from the names presented by
`os.uname`, where they are named `sysname` and
`nodename`.

Entries which cannot be determined are set to `''`.

> *Changed in 3.3*: Result changed from a tuple to a :func:`~collections.namedtuple`.

> *Changed in 3.9*: :attr:`processor` is resolved late instead of immediately.
