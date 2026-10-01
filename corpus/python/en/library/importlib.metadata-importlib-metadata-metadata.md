---
id: "python-en-function-importlib-metadata-metadata"
language: "python"
lang: "en"
category: "function"
name: "metadata"
signature: "metadata(distribution_name)"
directive: "function"
module: "importlib.metadata"
source_url: "https://docs.python.org/3/library/importlib.metadata.html#importlib.metadata.metadata"
license: "PSF"
updated: "2026-10-01"
---

# metadata

Return the distribution metadata corresponding to the named
distribution package as a `PackageMetadata` instance.

Raises `PackageNotFoundError` if the named distribution
package is not installed in the current Python environment.

Raises `MetadataNotFound` if a distribution package is
present but no METADATA file is present.
