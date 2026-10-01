---
id: "python-en-function-zipfile-zipfile-remove"
language: "python"
lang: "en"
category: "function"
name: "ZipFile.remove"
signature: "ZipFile.remove(zinfo_or_arcname)"
directive: "method"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.ZipFile.remove"
license: "PSF"
updated: "2026-10-01"
---

# ZipFile.remove

Removes a member entry from the archive's central directory.
*zinfo_or_arcname* may be the full path of the member or a `ZipInfo`
instance.  If multiple members share the same full path and the path is
given as a string, only one of them is removed and which one is unspecified;
it should not be relied upon.  Pass the specific `ZipInfo` instance to
remove a particular member.

The archive must be opened with mode `'w'`, `'x'` or `'a'`.

Returns the removed `ZipInfo` instance.

Calling `remove` on a closed ZipFile will raise a `ValueError`.

> **Note**
>
> This method only removes the member's entry from the central directory,
> making it inaccessible to most tools.  The member's local file entry,
> including content and metadata, remains in the archive and is still
> recoverable using forensic tools.  Call `repack` afterwards to
> remove the local file entry and reclaim space; pass the returned
> `ZipInfo` to `repack` to ensure the data is removed
> regardless of how the entry was written.
>

> *Added in next*
