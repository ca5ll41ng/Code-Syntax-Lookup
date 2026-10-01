---
id: "python-en-function-site-makepath"
language: "python"
lang: "en"
category: "function"
name: "makepath"
signature: "makepath(*paths)"
directive: "function"
module: "site"
source_url: "https://docs.python.org/3/library/site.html#site.makepath"
license: "PSF"
updated: "2026-10-01"
---

# makepath

Join *paths* with `os.path.join`, attempt to make the result
absolute with `os.path.abspath`, and return a 2-tuple containing
the absolute path and its case-normalized form as produced by
`os.path.normcase`.  If `os.path.abspath` raises
`OSError`, the joined path is used unchanged for the
case-normalization step.

The second element of the returned tuple is the form used throughout the
`site` module to compare paths on case-insensitive file systems, and
is what populates the `known_paths` sets that prevent duplicate
`sys.path` entries in various APIs within this module.
