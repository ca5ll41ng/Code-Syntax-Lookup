---
id: "python-en-function-logging-filter"
language: "python"
lang: "en"
category: "function"
name: "Filter"
signature: "Filter(name='')"
directive: "class"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.Filter"
license: "PSF"
updated: "2026-10-01"
---

# Filter

Returns an instance of the `Filter` class. If *name* is specified, it
names a logger which, together with its children, will have its events allowed
through the filter. If *name* is the empty string, allows every event.

method:: filter(record)
