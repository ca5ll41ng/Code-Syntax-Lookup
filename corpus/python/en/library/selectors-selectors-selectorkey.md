---
id: "python-en-function-selectors-selectorkey"
language: "python"
lang: "en"
category: "function"
name: "SelectorKey"
directive: "class"
module: "selectors"
source_url: "https://docs.python.org/3/library/selectors.html#selectors.SelectorKey"
license: "PSF"
updated: "2026-10-01"
---

# SelectorKey

A `SelectorKey` is a `~collections.namedtuple` used to
associate a file object to its underlying file descriptor, selected event
mask and attached data. It is returned by several `BaseSelector`
methods.

attribute:: fileobj

attribute:: fd

attribute:: events

attribute:: data
