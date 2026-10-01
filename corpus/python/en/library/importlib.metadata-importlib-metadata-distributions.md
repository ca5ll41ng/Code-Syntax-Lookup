---
id: "python-en-function-importlib-metadata-distributions"
language: "python"
lang: "en"
category: "function"
name: "distributions"
signature: "distributions(**kwargs)"
directive: "function"
module: "importlib.metadata"
source_url: "https://docs.python.org/3/library/importlib.metadata.html#importlib.metadata.distributions"
license: "PSF"
updated: "2026-10-01"
---

# distributions

Returns an iterable of `Distribution` instances for all packages.

The *kwargs* argument may contain either a keyword argument `context`, a
`DistributionFinder.Context` instance, or pass keyword arguments for
constructing a new `DistributionFinder.Context`. The
`DistributionFinder.Context` is used to modify the search for
distributions.
