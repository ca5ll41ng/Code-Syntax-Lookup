---
id: "python-en-function-tarfile-tarfile-extraction_filter"
language: "python"
lang: "en"
category: "function"
name: "TarFile.extraction_filter"
directive: "attribute"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.TarFile.extraction_filter"
license: "PSF"
updated: "2026-10-01"
---

# TarFile.extraction_filter

> *Added in 3.12*

The `extraction filter` used
as a default for the *filter* argument of `~TarFile.extract`
and `~TarFile.extractall`.

The attribute may be `None` or a callable.
String names are not allowed for this attribute, unlike the *filter*
argument to `~TarFile.extract`.

If `extraction_filter` is `None` (the default), extraction methods
will use the `data` filter by default.

The attribute may be set on instances or overridden in subclasses.
It also is possible to set it on the `TarFile` class itself to set a
global default, although, since it affects all uses of *tarfile*,
it is best practice to only do so in top-level applications or
`site configuration`.
To set a global default this way, a filter function needs to be wrapped in
`staticmethod` to prevent injection of a `self` argument.

> *Changed in 3.14*: The default filter is set to :func:`data <data_filter>`, which disallows some dangerous features such as links to absolute paths or paths outside of the destination. Previously, the default was equivalent to :func:`fully_trusted <fully_trusted_filter>`.
