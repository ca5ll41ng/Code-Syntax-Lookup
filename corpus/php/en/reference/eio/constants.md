---
id: "en-php-guide-eio-constants"
language: "php"
lang: "en"
category: "guide"
name: "eio.constants"
title: "Predefined Constants"
module: "eio"
source_url: "https://www.php.net/manual/en/eio.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

Request priority constants:

- **`EIO_PRI_MIN` (`int`)** — Request minimal priority.
- **`EIO_PRI_DEFAULT` (`int`)** — Request default priority.
- **`EIO_PRI_MAX` (`int`)** — Request maximal priority.

`eio_seek()` `$whence` argument:

- **`EIO_SEEK_SET` (`int`)** — The offset is set to specified number of bytes (`$offset`).
- **`EIO_SEEK_CUR` (`int`)** — The offset is set to its current location plus `$offset` bytes.
- **`EIO_SEEK_END` (`int`)** — The offset is set to the size of the file plus `$offset` bytes.

Flags used with `eio_readdir()`:

- **`EIO_READDIR_DENTS` (`int`)** — `eio_readdir()` flag. If specified, the result argument of the callback becomes an array with the following keys: `'names'` - array of directory names `'dents'` - array of `struct eio_dirent`-like arrays having the following keys each: `'name'` - the directory name; `'type'` - one of *EIO_DT_** constants; `'inode'` - the inode number, if available, otherwise unspecified.
- **`EIO_READDIR_DIRS_FIRST` (`int`)** — When this flag is specified, the names will be returned in an order where likely directories come first, in optimal stat order.
- **`EIO_READDIR_STAT_ORDER` (`int`)** — When this flag is specified, then the names will be returned in an order suitable for `stat`'ing each one. When planning to `stat()` all files in the given directory, the returned order will likely be fastest.
- **`EIO_READDIR_FOUND_UNKNOWN` (`int`)**
- **`EIO_DT_UNKNOWN` (`int`)** — Unknown node type (very common). Further `stat()` needed.
- **`EIO_DT_FIFO` (`int`)** — FIFO node type.
- **`EIO_DT_CHR` (`int`)** — Node type.
- **`EIO_DT_MPC` (`int`)** — Multiplexed char device (v7+coherent) node type.
- **`EIO_DT_DIR` (`int`)** — Directory node type.
- **`EIO_DT_NAM` (`int`)** — Xenix special named file node type.
- **`EIO_DT_BLK` (`int`)** — Node type.
- **`EIO_DT_MPB` (`int`)** — Multiplexed block device (v7+coherent).
- **`EIO_DT_REG` (`int`)** — Node type.
- **`EIO_DT_NWK` (`int`)**
- **`EIO_DT_CMP` (`int`)** — HP-UX network special node type.
- **`EIO_DT_LNK` (`int`)** — Link node type.
- **`EIO_DT_SOCK` (`int`)** — Socket node type.
- **`EIO_DT_DOOR` (`int`)** — Solaris door node type.
- **`EIO_DT_WHT` (`int`)** — Node type.
- **`EIO_DT_MAX` (`int`)** — Highest node type value.

Access modes for `eio_open()` `$flags` argument:

- **`EIO_O_RDONLY` (`int`)**
- **`EIO_O_WRONLY` (`int`)**
- **`EIO_O_RDWR` (`int`)**
- **`EIO_O_NONBLOCK` (`int`)**
- **`EIO_O_APPEND` (`int`)**
- **`EIO_O_CREAT` (`int`)**
- **`EIO_O_TRUNC` (`int`)**
- **`EIO_O_EXCL` (`int`)**
- **`EIO_O_FSYNC` (`int`)**

`$mode` argument flags for `eio_open()`:

- **`EIO_S_IRUSR` (`int`)**
- **`EIO_S_IWUSR` (`int`)**
- **`EIO_S_IXUSR` (`int`)**
- **`EIO_S_IRGRP` (`int`)**
- **`EIO_S_IWGRP` (`int`)**
- **`EIO_S_IXGRP` (`int`)**
- **`EIO_S_IROTH` (`int`)**
- **`EIO_S_IWOTH` (`int`)**
- **`EIO_S_IXOTH` (`int`)**
- **`EIO_S_IFREG` (`int`)**
- **`EIO_S_IFCHR` (`int`)**
- **`EIO_S_IFBLK` (`int`)**
- **`EIO_S_IFIFO` (`int`)**
- **`EIO_S_IFSOCK` (`int`)**

`eio_sync_file_range()` flags:

- **`EIO_SYNC_FILE_RANGE_WAIT_BEFORE` (`int`)**
- **`EIO_SYNC_FILE_RANGE_WRITE` (`int`)**
- **`EIO_SYNC_FILE_RANGE_WAIT_AFTER` (`int`)**

`eio_fallocate()` flags:

- **`EIO_FALLOC_FL_KEEP_SIZE` (`int`)**

> *EIO_S_I** constants have the same meaning as their *S_I** POSIX counterparts.

> *EIO_SYNC_FILE_** constants have the same meaning as their *SYNC_FILE_*** counterparts.

> *EIO_O_** constants have the same meaning as their *O_** POSIX counterparts.
