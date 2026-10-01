---
id: "python-en-function-importlib-metadata-files"
language: "python"
lang: "en"
category: "function"
name: "files"
signature: "files(distribution_name)"
directive: "function"
module: "importlib.metadata"
source_url: "https://docs.python.org/3/library/importlib.metadata.html#importlib.metadata.files"
license: "PSF"
updated: "2026-10-01"
---

# files

Return the full set of files contained within the named
distribution package as `PackagePath` instances.

Raises `PackageNotFoundError` if the named distribution
package is not installed in the current Python environment.

Returns `None` if the distribution is found but the installation
database records reporting the files associated with the distribution package
are missing.
