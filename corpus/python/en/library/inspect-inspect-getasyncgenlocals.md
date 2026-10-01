---
id: "python-en-function-inspect-getasyncgenlocals"
language: "python"
lang: "en"
category: "function"
name: "getasyncgenlocals"
signature: "getasyncgenlocals(agen)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getasyncgenlocals"
license: "PSF"
updated: "2026-10-01"
---

# getasyncgenlocals

This function is analogous to `~inspect.getgeneratorlocals`, but
works for asynchronous generator objects created by `async def`
functions which use the `yield` statement.

> *Added in 3.12*
