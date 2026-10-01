---
id: "python-en-function-select-poll-modify"
language: "python"
lang: "en"
category: "function"
name: "poll.modify"
signature: "poll.modify(fd, eventmask)"
directive: "method"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.poll.modify"
license: "PSF"
updated: "2026-10-01"
---

# poll.modify

Modifies an already registered fd. This has the same effect as
`register(fd, eventmask)`.  Attempting to modify a file descriptor
that was never registered causes an `OSError` exception with errno
`ENOENT` to be raised.
