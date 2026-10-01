---
id: "python-en-function-select-kevent-ident"
language: "python"
lang: "en"
category: "function"
name: "kevent.ident"
directive: "attribute"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.kevent.ident"
license: "PSF"
updated: "2026-10-01"
---

# kevent.ident

Value used to identify the event. The interpretation depends on the filter
but it's usually the file descriptor. In the constructor ident can either
be an int or an object with a `~io.IOBase.fileno` method. kevent
stores the integer internally.
