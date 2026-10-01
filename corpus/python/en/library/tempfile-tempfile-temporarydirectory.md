---
id: "python-en-function-tempfile-temporarydirectory"
language: "python"
lang: "en"
category: "function"
name: "TemporaryDirectory"
signature: "TemporaryDirectory(suffix=None, prefix=None, dir=None, ignore_cleanup_errors=False, *, delete=True)"
directive: "class"
module: "tempfile"
source_url: "https://docs.python.org/3/library/tempfile.html#tempfile.TemporaryDirectory"
license: "PSF"
updated: "2026-10-01"
---

# TemporaryDirectory

This class securely creates a temporary directory using the same rules as `mkdtemp`.
The resulting object can be used as a `context manager` (see
`tempfile-examples`).  On completion of the context or destruction
of the temporary directory object, the newly created temporary directory
and all its contents are removed from the filesystem.

attribute:: TemporaryDirectory.name

method:: TemporaryDirectory.cleanup

The *delete* parameter can be used to disable cleanup of the directory tree
upon exiting the context.  While it may seem unusual for a context manager
to disable the action taken when exiting the context, it can be useful during
debugging or when you need your cleanup behavior to be conditional based on
other logic.

> **Warning**
>
> Cleanup is not robust against the tree being modified while it is removed.
> Files outside of the tree may have their permissions and file flags reset.
>
> On systems where `shutil.rmtree.avoids_symlink_attacks` is
> false, manipulating symbolic links during cleanup
> may cause files outside of the tree to be removed.
>

audit-event:: tempfile.mkdtemp fullpath tempfile.TemporaryDirectory

> *Added in 3.2*

> *Changed in 3.10*: Added *ignore_cleanup_errors* parameter.

> *Changed in 3.12*: Added the *delete* parameter.
