---
id: "python-en-function-test-threading_cleanup"
language: "python"
lang: "en"
category: "function"
name: "threading_cleanup"
signature: "threading_cleanup(*original_values)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.threading_cleanup"
license: "PSF"
updated: "2026-10-01"
---

# threading_cleanup

Cleanup up threads not specified in *original_values*.  Designed to emit
a warning if a test leaves running threads in the background.
