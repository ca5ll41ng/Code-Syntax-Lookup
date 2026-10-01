---
id: "python-en-function-platform-processor"
language: "python"
lang: "en"
category: "function"
name: "processor"
signature: "processor()"
directive: "function"
module: "platform"
source_url: "https://docs.python.org/3/library/platform.html#platform.processor"
license: "PSF"
updated: "2026-10-01"
---

# processor

Returns the (real) processor name, e.g. `'amdk6'`.

An empty string is returned if the value cannot be determined. Note that many
platforms do not provide this information or simply return the same value as for
`machine`.  NetBSD does this.
