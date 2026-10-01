---
id: "python-en-function-importlib-resources-files"
language: "python"
lang: "en"
category: "function"
name: "files"
signature: "files(anchor: Optional[Anchor] = None)"
directive: "function"
module: "importlib.resources"
source_url: "https://docs.python.org/3/library/importlib.resources.html#importlib.resources.files"
license: "PSF"
updated: "2026-10-01"
---

# files

Returns a `~importlib.resources.abc.Traversable` object
representing the resource container (think directory) and its resources
(think files). A Traversable may contain other containers (think
subdirectories).

*anchor* is an optional `Anchor`. If the anchor is a
package, resources are resolved from that package. If a module,
resources are resolved adjacent to that module (in the same package
or the package root). If the anchor is omitted, the caller's module
is used.

> *Added in 3.9*

> *Changed in 3.12*: *package* parameter was renamed to *anchor*. *package* was still accepted, but deprecated.

> *Changed in 3.15*: *package* parameter was fully removed. *anchor* can now be a non-package module and if omitted will default to the caller's module. *package* is no longer accepted since Python 3.15. Consider passing the anchor positionally or using ``importlib_resources >= 5.10`` for a compatible interface on older Pythons.
