---
id: "python-zh-function-mimetypes-mimetypes"
language: "python"
lang: "zh"
category: "function"
name: "mimetypes"
title: "Command-line usage"
directive: "module"
module: "mimetypes"
source_url: "https://docs.python.org/zh-cn/3/library/mimetypes.html#module-mimetypes"
license: "PSF"
updated: "2026-10-01"
---

# Command-line usage

.. _mimetypes-cli:

**Command-line usage**

:mod:`!mimetypes` 模块可以在命令行下作为脚本来执行。

```sh

python -m mimetypes [-h] [-e] [-l] type [type ...]
```

可以接受以下选项：

program:: mimetypes

cmdoption:: -h

cmdoption:: -e

cmdoption:: -l

By default the script converts MIME types to file extensions.
However, if `--extension` is specified,
it converts file extensions to MIME types.

For each `type` entry, the script writes a line into the standard output
stream. If an unknown type occurs, it writes an error message into the
standard output stream and exits with the return code `1`.

.. mimetypes-cli-example:

**Command-line example**

Here are some examples of typical usage of the `mimetypes` command-line
interface:

```console

$ # get a MIME type by a file name
$ python -m mimetypes filename.png
type: image/png encoding: None

$ # get a MIME type by a URL
$ python -m mimetypes https://example.com/filename.txt
type: text/plain encoding: None

$ # get a complex MIME type
$ python -m mimetypes filename.tar.gz
type: application/x-tar encoding: gzip

$ # get a MIME type for a rare file extension
$ python -m mimetypes filename.pict
error: media type unknown for filename.pict

$ # now look in the extended database built into Python
$ python -m mimetypes --lenient filename.pict
type: image/pict encoding: None

$ # get a file extension by a MIME type
$ python -m mimetypes --extension text/javascript
.js

$ # get a file extension by a rare MIME type
$ python -m mimetypes --extension text/xul
error: unknown type text/xul

$ # now look in the extended database again
$ python -m mimetypes --extension --lenient text/xul
.xul

$ # try to feed an unknown file extension
$ python -m mimetypes filename.sh filename.nc filename.xxx filename.txt
type: application/x-sh encoding: None
type: application/x-netcdf encoding: None
error: media type unknown for filename.xxx
type: text/plain encoding: None

$ # try to feed an unknown MIME type
$ python -m mimetypes --extension audio/aac audio/opus audio/future audio/x-wav
.aac
.opus
error: unknown type audio/future
```
