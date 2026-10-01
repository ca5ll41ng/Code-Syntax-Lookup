---
id: "python-en-function-os-renames"
language: "python"
lang: "en"
category: "function"
name: "renames"
signature: "renames(old, new)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.renames"
license: "PSF"
updated: "2026-10-01"
---

# renames

Recursive directory or file renaming function. Works like `rename`, except
creation of any intermediate directories needed to make the new pathname good is
attempted first. After the rename, directories corresponding to rightmost path
segments of the old name will be pruned away using `removedirs`.

> **Note**
>
> This function can fail with the new directory structure made if you lack
> permissions needed to remove the leaf directory or file.
>

audit-event:: os.rename src,dst,src_dir_fd,dst_dir_fd os.renames

> *Changed in 3.6*: Accepts a :term:`path-like object` for *old* and *new*.
