---
id: "python-en-function-os-path-splitroot"
language: "python"
lang: "en"
category: "function"
name: "splitroot"
signature: "splitroot(path, /)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.splitroot"
license: "PSF"
updated: "2026-10-01"
---

# splitroot

Split the pathname *path* into a 3-item tuple `(drive, root, tail)` where
*drive* is a device name or mount point, *root* is a string of separators
after the drive, and *tail* is everything after the root. Any of these
items may be the empty string. In all cases, `drive + root + tail` will
be the same as *path*.

On POSIX systems, *drive* is always empty. The *root* may be empty (if *path* is
relative), a single forward slash (if *path* is absolute), or two forward slashes
(implementation-defined per `IEEE Std 1003.1-2017; 4.13 Pathname Resolution
<https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_13>`_.)
For example::

   >>> splitroot('/home/sam')
   ('', '/', 'home/sam')
   >>> splitroot('//home/sam')
   ('', '//', 'home/sam')
   >>> splitroot('///home/sam')
   ('', '/', '//home/sam')

On Windows, *drive* may be empty, a drive-letter name, a UNC share, or a device
name. The *root* may be empty, a forward slash, or a backward slash. For
example::

   >>> splitroot('C:/Users/Sam')
   ('C:', '/', 'Users/Sam')
   >>> splitroot('//Server/Share/Users/Sam')
   ('//Server/Share', '/', 'Users/Sam')

> *Added in 3.12*
