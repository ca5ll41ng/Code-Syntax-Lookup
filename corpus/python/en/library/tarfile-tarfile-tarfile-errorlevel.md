---
id: "python-en-function-tarfile-tarfile-errorlevel"
language: "python"
lang: "en"
category: "function"
name: "TarFile.errorlevel"
directive: "attribute"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.TarFile.errorlevel"
license: "PSF"
updated: "2026-10-01"
---

# TarFile.errorlevel

If *errorlevel* is `0`, errors are ignored when using `TarFile.extract`
and `TarFile.extractall`.
Nevertheless, they appear as error messages in the debug output when
*debug* is greater than 0.
If `1` (the default), all *fatal* errors are raised as `OSError` or
`FilterError` exceptions. If `2`, all *non-fatal* errors are raised
as `TarError` exceptions as well.

Some exceptions, e.g. ones caused by wrong argument types or data
corruption, are always raised.

Custom `extraction filters`
should raise `FilterError` for *fatal* errors
and `ExtractError` for *non-fatal* ones.

Note that when an exception is raised, the archive may be partially
extracted. It is the user’s responsibility to clean up.
