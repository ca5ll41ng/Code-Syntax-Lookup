---
id: "python-en-function-unittest-removeresult"
language: "python"
lang: "en"
category: "function"
name: "removeResult"
signature: "removeResult(result)"
directive: "function"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.removeResult"
license: "PSF"
updated: "2026-10-01"
---

# removeResult

Remove a registered result. Once a result has been removed then
`~TestResult.stop` will no longer be called on that result object in
response to a control-c.
