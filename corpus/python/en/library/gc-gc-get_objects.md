---
id: "python-en-function-gc-get_objects"
language: "python"
lang: "en"
category: "function"
name: "get_objects"
signature: "get_objects(generation=None)"
directive: "function"
module: "gc"
source_url: "https://docs.python.org/3/library/gc.html#gc.get_objects"
license: "PSF"
updated: "2026-10-01"
---

# get_objects

Returns a list of all objects tracked by the collector, excluding the list
returned. If *generation* is not `None`, return only the objects tracked by
the collector that are in that generation.

> *Changed in 3.8*: New *generation* parameter.

> *Changed in 3.14*: Generation 1 is removed

> *Changed in 3.14.5*: Generation 1 is reintroduced to maintain GC behavior from 3.13.

audit-event:: gc.get_objects generation gc.get_objects
