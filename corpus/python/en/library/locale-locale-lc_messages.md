---
id: "python-en-function-locale-lc_messages"
language: "python"
lang: "en"
category: "function"
name: "LC_MESSAGES"
directive: "data"
module: "locale"
source_url: "https://docs.python.org/3/library/locale.html#locale.LC_MESSAGES"
license: "PSF"
updated: "2026-10-01"
---

# LC_MESSAGES

Locale category for message display. Python currently does not support
application specific locale-aware messages.  Messages displayed by the operating
system, like those returned by `os.strerror` might be affected by this
category.

This value may not be available on operating systems not conforming to the
POSIX standard, most notably Windows.
