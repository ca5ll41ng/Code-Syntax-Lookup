---
id: "python-en-function-os-fwalk"
language: "python"
lang: "en"
category: "function"
name: "fwalk"
signature: "fwalk(top='.', topdown=True, onerror=None, *, follow_symlinks=False, dir_fd=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.fwalk"
license: "PSF"
updated: "2026-10-01"
---

# fwalk

This behaves exactly like `walk`, except that it yields a 4-tuple
`(dirpath, dirnames, filenames, dirfd)`, and it supports `dir_fd`.

*dirpath*, *dirnames* and *filenames* are identical to `walk` output,
and *dirfd* is a file descriptor referring to the directory *dirpath*.

This function always supports `paths relative to directory descriptors` and `not following symlinks`.  Note however
that, unlike other functions, the `fwalk` default value for
*follow_symlinks* is `False`.

> **Note**
>
> Since `fwalk` yields file descriptors, those are only valid until
> the next iteration step, so you should duplicate them (e.g. with
> `dup`) if you want to keep them longer.
>

This example displays the number of bytes taken by non-directory files in each
directory under the starting directory, except that it doesn't look under any
`__pycache__` subdirectory::

   import os
   for root, dirs, files, rootfd in os.fwalk('python/Lib/xml'):
       print(root, "consumes", end=" ")
       print(sum([os.stat(name, dir_fd=rootfd).st_size for name in files]),
             end=" ")
       print("bytes in", len(files), "non-directory files")
       if '__pycache__' in dirs:
           dirs.remove('__pycache__')  # don't visit __pycache__ directories

In the next example, walking the tree bottom-up is essential:
`rmdir` doesn't allow deleting a directory before the directory is
empty::

   # Delete everything reachable from the directory named in "top",
   # assuming there are no symbolic links.
   # CAUTION:  This is dangerous!  For example, if top == '/', it
   # could delete all your disk files.
   import os
   for root, dirs, files, rootfd in os.fwalk(top, topdown=False):
       for name in files:
           os.unlink(name, dir_fd=rootfd)
       for name in dirs:
           os.rmdir(name, dir_fd=rootfd)

audit-event:: os.fwalk top,topdown,onerror,follow_symlinks,dir_fd os.fwalk

availability:: Unix.

> *Added in 3.3*

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.7*: Added support for :class:`bytes` paths.
