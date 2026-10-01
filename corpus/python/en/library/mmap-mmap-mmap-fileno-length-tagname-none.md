---
id: "python-en-function-mmap-mmap-fileno-length-tagname-none"
language: "python"
lang: "en"
category: "function"
name: "mmap(fileno, length, tagname=None, \\"
directive: "class"
module: "mmap"
source_url: "https://docs.python.org/3/library/mmap.html#mmap.mmap(fileno, length, tagname=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# mmap(fileno, length, tagname=None, \

**(Windows version)** Maps *length* bytes from the file specified by the
file descriptor *fileno*, and creates a mmap object.  If *length* is larger
than the current size of the file, the file is extended to contain *length*
bytes.  If *length* is `0`, the maximum length of the map is the current
size of the file, except that if the file is empty Windows raises an
exception (you cannot create an empty mapping on Windows).

*tagname*, if specified and not `None`, is a string giving a tag name for
the mapping.  Windows allows you to have many different mappings against
the same file.  If you specify the name of an existing tag, that tag is
opened, otherwise a new tag of this name is created.  If this parameter is
omitted or `None`, the mapping is created without a name.  Avoiding the
use of the *tagname* parameter will assist in keeping your code portable
between Unix and Windows.

*offset* may be specified as a non-negative integer offset. mmap references
will be relative to the offset from the beginning of the file. *offset*
defaults to 0.  *offset* must be a multiple of the `ALLOCATIONGRANULARITY`.

If *trackfd* is `False`, the file handle corresponding to *fileno* will
not be duplicated, and the resulting `mmap` object will not
be associated with the map's underlying file.
This means that the `~mmap.mmap.size` and `~mmap.mmap.resize`
methods will fail.
This mode is useful to limit the number of open file handles.
The original file can be renamed (but not deleted) after closing *fileno*.

> *Changed in 3.15*: The *trackfd* parameter was added.

audit-event:: mmap.__new__ fileno,length,access,offset mmap.mmap
