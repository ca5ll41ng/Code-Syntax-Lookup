---
id: "python-en-function-threading-timeout_max"
language: "python"
lang: "en"
category: "function"
name: "TIMEOUT_MAX"
directive: "data"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.TIMEOUT_MAX"
license: "PSF"
updated: "2026-10-01"
---

# TIMEOUT_MAX

The maximum value allowed for the *timeout* parameter of blocking functions
(`Lock.acquire`, `RLock.acquire`, `Condition.wait`, etc.).
Specifying a timeout greater than this value will raise an
`OverflowError`.

> *Added in 3.2*
