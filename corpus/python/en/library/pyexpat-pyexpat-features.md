---
id: "python-en-function-pyexpat-features"
language: "python"
lang: "en"
category: "function"
name: "features"
directive: "data"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.features"
license: "PSF"
updated: "2026-10-01"
---

# features

The list of the features with which the loaded Expat library
was compiled, as `(name, value)` pairs.
The value is only meaningful for features which have one,
like `'XML_CONTEXT_BYTES'` or the default protection limits
`'XML_BLAP_ACT_THRES'` and `'XML_AT_MAX_AMP'`;
for other features, like `'XML_DTD'` and `'XML_NS'`,
the value is `0` and only the presence of the name is significant.
