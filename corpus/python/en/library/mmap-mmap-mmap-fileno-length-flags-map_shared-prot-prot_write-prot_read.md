---
id: "python-en-function-mmap-mmap-fileno-length-flags-map_shared-prot-prot_write-prot_read"
language: "python"
lang: "en"
category: "function"
name: "mmap(fileno, length, flags=MAP_SHARED, prot=PROT_WRITE|PROT_READ, \\"
directive: "class"
module: "mmap"
source_url: "https://docs.python.org/3/library/mmap.html#mmap.mmap(fileno, length, flags=MAP_SHARED, prot=PROT_WRITE|PROT_READ, \\"
license: "PSF"
updated: "2026-10-01"
---

# mmap(fileno, length, flags=MAP_SHARED, prot=PROT_WRITE|PROT_READ, \

**(Unix version)** Maps *length* bytes from the file specified by the file
descriptor *fileno*, and returns a mmap object.  If *length* is `0`, the
maximum length of the map will be the current size of the file when
`~mmap.mmap` is called.

*flags* specifies the nature of the mapping. `MAP_PRIVATE` creates a
private copy-on-write mapping, so changes to the contents of the mmap
object will be private to this process, and `MAP_SHARED` creates a
mapping that's shared with all other processes mapping the same areas of
the file.  The default value is `MAP_SHARED`. Some systems have
additional possible flags with the full list specified in
`MAP_* constants`.

*prot*, if specified, gives the desired memory protection; the two most
useful values are `PROT_READ` and `PROT_WRITE`, to specify
that the pages may be read or written.  *prot* defaults to
`PROT_READ \| PROT_WRITE`.

*access* may be specified in lieu of *flags* and *prot* as an optional
keyword parameter.  It is an error to specify both *flags*, *prot* and
*access*.  See the description of *access* above for information on how to
use this parameter.

*offset* may be specified as a non-negative integer offset. mmap references
will be relative to the offset from the beginning of the file. *offset*
defaults to 0. *offset* must be a multiple of `ALLOCATIONGRANULARITY`
which is equal to `PAGESIZE` on Unix systems.

If *trackfd* is `False`, the file descriptor specified by *fileno* will
not be duplicated, and the resulting `mmap` object will not
be associated with the map's underlying file.
This means that the `~mmap.mmap.size` and `~mmap.mmap.resize`
methods will fail.
This mode is useful to limit the number of open file descriptors.

To ensure validity of the created memory mapping the file specified
by the descriptor *fileno* is internally automatically synchronized
with the physical backing store on macOS.

> *Changed in 3.13*: The *trackfd* parameter was added.

This example shows a simple way of using `~mmap.mmap`::

   import mmap

   # write a simple example file
   with open("hello.txt", "wb") as f:
       f.write(b"Hello Python!\n")

   with open("hello.txt", "r+b") as f:
       # memory-map the file, size 0 means whole file
       mm = mmap.mmap(f.fileno(), 0)
       # read content via standard file methods
       print(mm.readline())  # prints b"Hello Python!\n"
       # read content via slice notation
       print(mm[:5])  # prints b"Hello"
       # update content using slice notation;
       # note that new content must have same size
       mm[6:] = b" world!\n"
       # ... and read again using standard file methods
       mm.seek(0)
       print(mm.readline())  # prints b"Hello  world!\n"
       # close the map
       mm.close()

`~mmap.mmap` can also be used as a context manager in a `with`
statement::

   import mmap

   with mmap.mmap(-1, 13) as mm:
       mm.write(b"Hello world!")

> *Added in 3.2*: Context manager support.

The next example demonstrates how to create an anonymous map and exchange
data between the parent and child processes::

   import mmap
   import os

   mm = mmap.mmap(-1, 13)
   mm.write(b"Hello world!")

   pid = os.fork()

   if pid == 0:  # In a child process
       mm.seek(0)
       print(mm.readline())

       mm.close()

audit-event:: mmap.__new__ fileno,length,access,offset mmap.mmap

Memory-mapped file objects support the following methods:

method:: close()

attribute:: closed

method:: find(sub[, start[, end]])

method:: flush([offset[, size]], *, flags=MS_SYNC)

method:: madvise(option[, start[, length]])

method:: move(dest, src, count)

method:: read([n])

method:: read_byte()

method:: readline()

method:: resize(newsize)

method:: rfind(sub[, start[, end]])

method:: seek(pos[, whence])

method:: seekable()

method:: set_name(name, /)

method:: size()

method:: tell()

method:: write(bytes)

method:: write_byte(byte)
