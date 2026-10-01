---
id: "python-en-function-urllib-parse-unwrap"
language: "python"
lang: "en"
category: "function"
name: "unwrap"
signature: "unwrap(url)"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/3/library/urllib.parse.html#urllib.parse.unwrap"
license: "PSF"
updated: "2026-10-01"
---

# unwrap

Extract the url from a wrapped URL (that is, a string formatted as
`<URL:scheme://host/path>`, `<scheme://host/path>`, `URL:scheme://host/path`
or `scheme://host/path`). If *url* is not a wrapped URL, it is returned
without changes.
