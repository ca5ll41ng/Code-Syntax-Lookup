---
id: "python-zh-function-gzip-gzip"
language: "python"
lang: "zh"
category: "function"
name: "gzip"
title: "Examples of usage"
directive: "module"
module: "gzip"
source_url: "https://docs.python.org/zh-cn/3/library/gzip.html#module-gzip"
license: "PSF"
updated: "2026-10-01"
---

# Examples of usage

.. _gzip-usage-examples:

**Examples of usage**

读取压缩文件示例::

   import gzip
   with gzip.open('/home/joe/file.txt.gz', 'rb') as f:
       file_content = f.read()

创建 GZIP 文件示例::

   import gzip
   content = b"Lots of content here"
   with gzip.open('/home/joe/file.txt.gz', 'wb') as f:
       f.write(content)

使用 GZIP 压缩已有的文件示例::

   import gzip
   import shutil
   with open('/home/joe/file.txt', 'rb') as f_in:
       with gzip.open('/home/joe/file.txt.gz', 'wb') as f_out:
           shutil.copyfileobj(f_in, f_out)

使用 GZIP 压缩二进制字符串示例::

   import gzip
   s_in = b"Lots of content here"
   s_out = gzip.compress(s_in)

> **Seealso**
>
> Module `zlib`
>    The basic data compression module needed to support the `gzip` file
>    format.
>
> In case gzip (de)compression is a bottleneck, the `python-isal`_
> package speeds up (de)compression with a mostly compatible API.
>
> .. _python-isal: https://github.com/pycompression/python-isal
>

program:: gzip

.. _gzip-cli:

**Command-line interface**

The `gzip` module provides a simple command line interface to compress or
decompress files.

在执行之后 :mod:`!gzip` 模块会保留输入文件。module keeps the input file(s).

> *Changed in 3.8*: Add a new command line interface with a usage. By default, when you will execute the CLI, the default compression level is 6.

**Command-line options**

option:: file

option:: --fast

option:: --best

option:: -d, --decompress

option:: -h, --help
