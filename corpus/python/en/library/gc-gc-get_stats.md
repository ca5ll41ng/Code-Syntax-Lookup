---
id: "python-en-function-gc-get_stats"
language: "python"
lang: "en"
category: "function"
name: "get_stats"
signature: "get_stats()"
directive: "function"
module: "gc"
source_url: "https://docs.python.org/3/library/gc.html#gc.get_stats"
license: "PSF"
updated: "2026-10-01"
---

# get_stats

Return a list of three per-generation dictionaries containing collection
statistics since interpreter start.  The number of keys may change
in the future, but currently each dictionary will contain the following
items:

* `collections` is the number of times this generation was collected;

* `collected` is the total number of objects collected inside this
  generation;

* `uncollectable` is the total number of objects which were found
  to be uncollectable (and were therefore moved to the `garbage`
  list) inside this generation;

* `candidates` is the total number of objects in this generation which were
  considered for collection and traversed;

* `duration` is the total time in seconds spent in collections for this
  generation.

> *Added in 3.4*

> *Changed in 3.15*: Add ``duration`` and ``candidates``.
