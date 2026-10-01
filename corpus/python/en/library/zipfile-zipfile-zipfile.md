---
id: "python-en-function-zipfile-zipfile"
language: "python"
lang: "en"
category: "function"
name: "zipfile"
title: "Command-line interface"
directive: "module"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#module-zipfile"
license: "PSF"
updated: "2026-10-01"
---

# Command-line interface

.. _zipfile-commandline:

program:: zipfile

**Command-line interface**

The `zipfile` module provides a simple command-line interface to interact
with ZIP archives.

If you want to create a new ZIP archive, specify its name after the `-c`
option and then list the filename(s) that should be included:

```shell-session

$ python -m zipfile -c monty.zip spam.txt eggs.txt
```

Passing a directory is also acceptable:

```shell-session

$ python -m zipfile -c monty.zip life-of-brian_1979/
```

If you want to extract a ZIP archive into the specified directory, use
the `-e` option:

```shell-session

$ python -m zipfile -e monty.zip target-dir/
```

For a list of the files in a ZIP archive, use the `-l` option:

```shell-session

$ python -m zipfile -l monty.zip
```

**Command-line options**

option:: -l <zipfile>

option:: -c <zipfile> <source1> ... <sourceN>

option:: -e <zipfile> <output_dir>

option:: -t <zipfile>

option:: --metadata-encoding <encoding>

**Decompression pitfalls**

The extraction in zipfile module might fail due to some pitfalls listed below.

**From file itself**

Decompression may fail due to incorrect password / CRC checksum / ZIP format or
unsupported compression method / decryption.

**File system limitations**

Exceeding limitations on different file systems can cause decompression failed.
Such as allowable characters in the directory entries, length of the file name,
length of the pathname, size of a single file, and number of files, etc.

.. _zipfile-resources-limitations:

**Resources limitations**

The lack of memory or disk volume would lead to decompression
failed. For example, decompression bombs (aka `ZIP bomb`_)
apply to zipfile library that can cause disk volume exhaustion.

**Interruption**

Interruption during the decompression, such as pressing control-C or killing the
decompression process may result in incomplete decompression of the archive.

**Default behaviors of extraction**

Not knowing the default extraction behaviors
can cause unexpected decompression results.
For example, when extracting the same archive twice,
it overwrites files without asking.

.. _ZIP bomb: https://en.wikipedia.org/wiki/Zip_bomb
.. _PKZIP Application Note: https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT
