---
id: "python-en-function-tempfile-namedtemporaryfile"
language: "python"
lang: "en"
category: "function"
name: "NamedTemporaryFile"
signature: "NamedTemporaryFile(mode='w+b', buffering=-1, encoding=None, newline=None, suffix=None, prefix=None, dir=None, delete=True, *, errors=None, delete_on_close=True)"
directive: "function"
module: "tempfile"
source_url: "https://docs.python.org/3/library/tempfile.html#tempfile.NamedTemporaryFile"
license: "PSF"
updated: "2026-10-01"
---

# NamedTemporaryFile

This function operates exactly as `TemporaryFile` does, except the
following differences:

* This function returns a file that is guaranteed to have a visible name in
  the file system.
* To manage the named file, it extends the parameters of
  `TemporaryFile` with *delete* and *delete_on_close* parameters that
  determine whether and how the named file should be automatically deleted.

The returned object is always a `TemporaryFileWrapper` instance
(a `file-like object`) whose `~TemporaryFileWrapper.file` attribute is the underlying
true file object. This file-like object can be used in a `with`
statement, just like a normal file.  The name of the temporary file can be
retrieved from the `name` attribute of the returned file-like object.
On Unix, unlike with the `TemporaryFile`, the directory entry does not
get unlinked immediately after the file creation.

If *delete* is true (the default) and *delete_on_close* is true (the
default), the file is deleted as soon as it is closed. If *delete* is true
and *delete_on_close* is false, the file is deleted on context manager exit
only, or else when the `file-like object` is finalized. Deletion is not
always guaranteed in this case (see `object.__del__`). If *delete* is
false, the value of *delete_on_close* is ignored.

Therefore to use the name of the temporary file to reopen the file after
closing it, either make sure not to delete the file upon closure (set the
*delete* parameter to be false) or, in case the temporary file is created in
a `with` statement, set the *delete_on_close* parameter to be false.
The latter approach is recommended as it provides assistance in automatic
cleaning of the temporary file upon the context manager exit.

Opening the temporary file again by its name while it is still open works as
follows:

* On POSIX the file can always be opened again.
* On Windows, make sure that at least one of the following conditions are
  fulfilled:

  * *delete* is false
  * additional open shares delete access (e.g. by calling `os.open`
    with the flag `O_TEMPORARY`)
  * *delete* is true but *delete_on_close* is false. Note, that in this
    case the additional opens that do not share delete access (e.g.
    created via builtin `open`) must be closed before exiting the
    context manager, else the `os.unlink` call on context manager
    exit will fail with a `PermissionError`.

On Windows, if *delete_on_close* is false, and the file is created in a
directory for which the user lacks delete access, then the `os.unlink`
call on exit of the context manager will fail with a `PermissionError`.
This cannot happen when *delete_on_close* is true because delete access is
requested by the open, which fails immediately if the requested access is not
granted.

On POSIX (only), a process that is terminated abruptly with SIGKILL
cannot automatically delete any NamedTemporaryFiles it created.

audit-event:: tempfile.mkstemp fullpath tempfile.NamedTemporaryFile

> *Changed in 3.8*: Added *errors* parameter.

> *Changed in 3.12*: Added *delete_on_close* parameter.
