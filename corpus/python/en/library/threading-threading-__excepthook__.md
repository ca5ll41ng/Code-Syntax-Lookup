---
id: "python-en-function-threading-__excepthook__"
language: "python"
lang: "en"
category: "function"
name: "__excepthook__"
directive: "data"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.__excepthook__"
license: "PSF"
updated: "2026-10-01"
---

# __excepthook__

Holds the original value of `threading.excepthook`. It is saved so that the
original value can be restored in case they happen to get replaced with
broken or alternative objects.

> *Added in 3.10*
