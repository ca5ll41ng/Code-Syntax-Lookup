---
id: "python-en-function-select-poll-unregister"
language: "python"
lang: "en"
category: "function"
name: "poll.unregister"
signature: "poll.unregister(fd)"
directive: "method"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.poll.unregister"
license: "PSF"
updated: "2026-10-01"
---

# poll.unregister

Remove a file descriptor being tracked by a polling object.  Just like the
`register` method, *fd* can be an integer or an object with a
`~io.IOBase.fileno` method that returns an integer.

Attempting to remove a file descriptor that was never registered causes a
`KeyError` exception to be raised.
