---
id: "python-en-function-shelve-shelveerror"
language: "python"
lang: "en"
category: "function"
name: "ShelveError"
directive: "exception"
module: "shelve"
source_url: "https://docs.python.org/3/library/shelve.html#shelve.ShelveError"
license: "PSF"
updated: "2026-10-01"
---

# ShelveError

Exception raised when one of the arguments *deserializer* and *serializer*
is missing in the `~shelve.open`, `Shelf`, `BsdDbShelf`
and `DbfilenameShelf`.

The *deserializer* and *serializer* arguments must be given together.

> *Added in 3.15*
