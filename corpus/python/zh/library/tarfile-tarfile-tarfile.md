---
id: "python-zh-function-tarfile-tarfile"
language: "python"
lang: "zh"
category: "function"
name: "tarfile"
title: "Filter errors"
directive: "module"
module: "tarfile"
source_url: "https://docs.python.org/zh-cn/3/library/tarfile.html#module-tarfile"
license: "PSF"
updated: "2026-10-01"
---

# Filter errors

.. _tarfile-extraction-refuse:

**Filter errors**

When a filter refuses to extract a file, it will raise an appropriate exception,
a subclass of `~tarfile.FilterError`.
This will abort the extraction if `TarFile.errorlevel` is 1 or more.
With `errorlevel=0` the error will be logged and the member will be skipped,
but extraction will continue.

.. _tarfile-further-verification:

**Hints for further verification**

Even with `filter='data'`, *tarfile* is not suited for extracting untrusted
files without prior inspection.
Among other issues, the pre-defined filters do not prevent denial-of-service
attacks. Users should do additional checks.

以下是一份不完整的考虑事项列表：

* Extract to a `new temporary directory`
  to prevent e.g. exploiting pre-existing links, and to make it easier to
  clean up after a failed extraction.
* Disallow symbolic links if you do not need the functionality.
* When working with untrusted data, use external (e.g. OS-level) limits on
  disk, memory and CPU usage.
* Check filenames against an allow-list of characters
  (to filter out control characters, confusables, foreign path separators,
  and so on).
* Check for platform-specific filename semantics. For example, on Windows
  some names can have reserved meanings.
* Check that filenames have expected extensions (discouraging files that
  execute when you “click on them”, or extension-less files like Windows
  special device names).
* Limit the number of extracted files, total size of extracted data,
  filename length (including symlink length), and size of individual files.
* Check for files that would be shadowed on case-insensitive filesystems.

还需要注意：

* Tar files may contain multiple versions of the same file.
  Later ones are expected to overwrite any earlier ones.
  This feature is crucial to allow updating tape archives, but can be abused
  maliciously.
* *tarfile* does not protect against issues with “live” data,
  e.g. an attacker tinkering with the destination (or source) directory while
  extraction (or archiving) is in progress.

**Supporting older Python versions**

Extraction filters were added to Python 3.12, but may be backported to older
versions as security updates.
To check whether the feature is available, use e.g.
`hasattr(tarfile, 'data_filter')` rather than checking the Python version.

The following examples show how to support Python versions with and without
the feature.
Note that setting `extraction_filter` will affect any subsequent operations.

* Fully trusted archive::

    my_tarfile.extraction_filter = (lambda member, path: member)
    my_tarfile.extractall()

* Use the `'data'` filter if available, but revert to Python 3.11 behavior
  (`'fully_trusted'`) if this feature is not available::

    my_tarfile.extraction_filter = getattr(tarfile, 'data_filter',
                                           (lambda member, path: member))
    my_tarfile.extractall()

* Use the `'data'` filter; *fail* if it is not available::

    my_tarfile.extractall(filter=tarfile.data_filter)

  or::

    my_tarfile.extraction_filter = tarfile.data_filter
    my_tarfile.extractall()

* Use the `'data'` filter; *warn* if it is not available::

   if hasattr(tarfile, 'data_filter'):
       my_tarfile.extractall(filter='data')
   else:
       # remove this when no longer needed
       warn_the_user('Extracting may be unsafe; consider updating Python')
       my_tarfile.extractall()

**Stateful extraction filter example**

While *tarfile*'s extraction methods take a simple *filter* callable,
custom filters may be more complex objects with an internal state.
It may be useful to write these as context managers, to be used like this::

    with StatefulFilter() as filter_func:
        tar.extractall(path, filter=filter_func)

例如，这种过滤器可以写成::

    class StatefulFilter:
        def __init__(self):
            self.file_count = 0

        def __enter__(self):
            return self

        def __call__(self, member, path):
            self.file_count += 1
            return member

        def __exit__(self, *exc_info):
            print(f'{self.file_count} files extracted')

.. _tarfile-commandline:

program:: tarfile

**Command-Line Interface**

> *Added in 3.4*

The `tarfile` module provides a simple command-line interface to interact
with tar archives.

If you want to create a new tar archive, specify its name after the `-c`
option and then list the filename(s) that should be included:

```shell-session

$ python -m tarfile -c monty.tar  spam.txt eggs.txt
```

传入一个目录也是可接受的：

```shell-session

$ python -m tarfile -c monty.tar life-of-brian_1979/
```

If you want to extract a tar archive into the current directory, use
the `-e` option:

```shell-session

$ python -m tarfile -e monty.tar
```

You can also extract a tar archive into a different directory by passing the
directory's name:

```shell-session

$ python -m tarfile -e monty.tar  other-dir/
```

要获取一个 tar 归档中文件的列表，请使用 :option:`-l` 选项：

```shell-session

$ python -m tarfile -l monty.tar
```

**Command-line options**

option:: -l <tarfile>

option:: -c <tarfile> <source1> ... <sourceN>

option:: -e <tarfile> [<output_dir>]

option:: -t <tarfile>

option:: -v, --verbose

option:: --filter <filtername>

.. _tar-examples:

**Examples**

**Reading examples**

如何将整个 tar 归档提取到当前工作目录::

   import tarfile
   tar = tarfile.open("sample.tar.gz")
   tar.extractall(filter='data')
   tar.close()

How to extract a subset of a tar archive with `TarFile.extractall` using
a generator function instead of a list::

   import os
   import tarfile

   def py_files(members):
       for tarinfo in members:
           if os.path.splitext(tarinfo.name)[1] == ".py":
               yield tarinfo

   tar = tarfile.open("sample.tar.gz")
   tar.extractall(members=py_files(tar))
   tar.close()

如何读取一个 gzip 压缩的 tar 归档并显示一些成员信息::

   import tarfile
   tar = tarfile.open("sample.tar.gz", "r:gz")
   for tarinfo in tar:
       print(tarinfo.name, "is", tarinfo.size, "bytes in size and is ", end="")
       if tarinfo.isreg():
           print("a regular file.")
       elif tarinfo.isdir():
           print("a directory.")
       else:
           print("something else.")
   tar.close()

**Writing examples**

如何基于一个文件名列表创建未压缩的 tar 归档::

   import tarfile
   tar = tarfile.open("sample.tar", "w")
   for name in ["foo", "bar", "quux"]:
       tar.add(name)
   tar.close()

使用 :keyword:`with` 语句的同一个示例::

    import tarfile
    with tarfile.open("sample.tar", "w") as tar:
        for name in ["foo", "bar", "quux"]:
            tar.add(name)

How to create and write an archive to stdout using
`sys.stdout.buffer` in the *fileobj* parameter
in `TarFile.add`::

    import sys
    import tarfile
    with tarfile.open("sample.tar.gz", "w|gz", fileobj=sys.stdout.buffer) as tar:
        for name in ["foo", "bar", "quux"]:
            tar.add(name)

How to create an archive and reset the user information using the *filter*
parameter in `TarFile.add`::

    import tarfile
    def reset(tarinfo):
        tarinfo.uid = tarinfo.gid = 0
        tarinfo.uname = tarinfo.gname = "root"
        return tarinfo
    tar = tarfile.open("sample.tar.gz", "w:gz")
    tar.add("foo", filter=reset)
    tar.close()

.. _tar-formats:

**Supported tar formats**

There are three tar formats that can be created with the `tarfile` module:

* The POSIX.1-1988 ustar format (`USTAR_FORMAT`). It supports filenames
  up to a length of at best 256 characters and linknames up to 100 characters.
  The maximum file size is 8 GiB. This is an old and limited but widely
  supported format.

* The GNU tar format (`GNU_FORMAT`). It supports long filenames and
  linknames, files bigger than 8 GiB and sparse files. It is the de facto
  standard on GNU/Linux systems. `tarfile` fully supports the GNU tar
  extensions for long names, sparse file support is read-only.

* The POSIX.1-2001 pax format (`PAX_FORMAT`). It is the most flexible
  format with virtually no limits. It supports long filenames and linknames, large
  files and stores pathnames in a portable way. Modern tar implementations,
  including GNU tar, bsdtar/libarchive and star, fully support extended *pax*
  features; some old or unmaintained libraries may not, but should treat
  *pax* archives as if they were in the universally supported *ustar* format.
  It is the current default format for new archives.

  It extends the existing *ustar* format with extra headers for information
  that cannot be stored otherwise. There are two flavours of pax headers:
  Extended headers only affect the subsequent file header, global
  headers are valid for the complete archive and affect all following files.
  All the data in a pax header is encoded in *UTF-8* for portability reasons.

There are some more variants of the tar format which can be read, but not
created:

* The ancient V7 format. This is the first tar format from Unix Seventh Edition,
  storing only regular files and directories. Names must not be longer than 100
  characters, there is no user/group name information. Some archives have
  miscalculated header checksums in case of fields with non-ASCII characters.

* The SunOS tar extended format. This format is a variant of the POSIX.1-2001
  pax format, but is not compatible.

.. _tar-unicode:

**Unicode issues**

The tar format was originally conceived to make backups on tape drives with the
main focus on preserving file system information. Nowadays tar archives are
commonly used for file distribution and exchanging archives over networks. One
problem of the original format (which is the basis of all other formats) is
that there is no concept of supporting different character encodings. For
example, an ordinary tar archive created on a *UTF-8* system cannot be read
correctly on a *Latin-1* system if it contains non-*ASCII* characters. Textual
metadata (like filenames, linknames, user/group names) will appear damaged.
Unfortunately, there is no way to autodetect the encoding of an archive. The
pax format was designed to solve this problem. It stores non-ASCII metadata
using the universal character encoding *UTF-8*.

The details of character conversion in `tarfile` are controlled by the
*encoding* and *errors* keyword arguments of the `TarFile` class.

*encoding* defines the character encoding to use for the metadata in the
archive. The default value is `sys.getfilesystemencoding` or `'ascii'`
as a fallback. Depending on whether the archive is read or written, the
metadata must be either decoded or encoded. If *encoding* is not set
appropriately, this conversion may fail.

The *errors* argument defines how characters are treated that cannot be
converted. Possible values are listed in section `error-handlers`.
The default scheme is `'surrogateescape'` which Python also uses for its
file system calls, see `os-filenames`.

For `PAX_FORMAT` archives (the default), *encoding* is generally not needed
because all the metadata is stored using *UTF-8*. *encoding* is only used in
the rare cases when binary pax headers are decoded or when strings with
surrogate characters are stored.
