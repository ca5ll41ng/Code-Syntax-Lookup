---
id: "python-en-function-os-scandir"
language: "python"
lang: "en"
category: "function"
name: "scandir"
signature: "scandir(path='.')"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.scandir"
license: "PSF"
updated: "2026-10-01"
---

# scandir

Return an iterator of `os.DirEntry` objects corresponding to the
entries in the directory given by *path*. The entries are yielded in
arbitrary order, and the special entries `'.'` and `'..'` are not
included.  If a file is removed from or added to the directory after
creating the iterator, whether an entry for that file be included is
unspecified.

Using `scandir` instead of `listdir` can significantly
increase the performance of code that also needs file type or file
attribute information, because `os.DirEntry` objects expose this
information if the operating system provides it when scanning a directory.
All `os.DirEntry` methods may perform a system call, but
`~os.DirEntry.is_dir` and `~os.DirEntry.is_file` usually only
require a system call for symbolic links; `os.DirEntry.stat`
always requires a system call on Unix but only requires one for
symbolic links on Windows.

*path* may be a `path-like object`.  If *path* is of type `bytes`
(directly or indirectly through the `PathLike` interface),
the type of the `~os.DirEntry.name` and `~os.DirEntry.path`
attributes of each `os.DirEntry` will be `bytes`; in all other
circumstances, they will be of type `str`.

This function can also support `specifying a file descriptor`; the file descriptor must refer to a directory.

audit-event:: os.scandir path os.scandir

Sharing a `scandir` iterator between threads will not corrupt the
iterator, but it is subject to `race conditions`:
which entries each thread receives is unspecified, and closing the iterator
while another thread is iterating ends that iteration early.

The `scandir` iterator supports the `context manager` protocol
and has the following method:

method:: scandir.close()

The following example shows a simple use of `scandir` to display all
the files (excluding directories) in the given *path* that don't start with
`'.'`. The `entry.is_file()` call will generally not make an additional
system call::

   with os.scandir(path) as it:
       for entry in it:
           if not entry.name.startswith('.') and entry.is_file():
               print(entry.name)

> **Note**
>
> On Unix-based systems, `scandir` uses the system's
> [opendir()](https://pubs.opengroup.org/onlinepubs/009695399/functions/opendir.html)
> and
> [readdir()](https://pubs.opengroup.org/onlinepubs/009695399/functions/readdir_r.html)
> functions. On Windows, it uses the Win32
> [FindFirstFileW](https://msdn.microsoft.com/en-us/library/windows/desktop/aa364418(v=vs.85).aspx)
> and
> [FindNextFileW](https://msdn.microsoft.com/en-us/library/windows/desktop/aa364428(v=vs.85).aspx)
> functions.
>

> *Added in 3.5*

> *Changed in 3.6*: Added support for the :term:`context manager` protocol and the :func:`~scandir.close` method.  If a :func:`scandir` iterator is neither exhausted nor explicitly closed a :exc:`ResourceWarning` will be emitted in its destructor.  The function accepts a :term:`path-like object`.

> *Changed in 3.7*: Added support for :ref:`file descriptors <path_fd>` on Unix.

> *Changed in 3.15*: ``os.scandir(-1)`` now fails with ``OSError(errno.EBADF)`` rather than listing the current directory.
