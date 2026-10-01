---
id: "python-zh-function-bz2-bz2"
language: "python"
lang: "zh"
category: "function"
name: "bz2"
title: "Examples of usage"
directive: "module"
module: "bz2"
source_url: "https://docs.python.org/zh-cn/3/library/bz2.html#module-bz2"
license: "PSF"
updated: "2026-10-01"
---

# Examples of usage

.. _bz2-usage-examples:

**Examples of usage**

以下是 :mod:`!bz2` 模块典型用法的一些示例。

使用 :func:`compress` 和 :func:`decompress` 来显示往复式的压缩：

    >>> import bz2
    >>> data = b"""\
    ... Donec rhoncus quis sapien sit amet molestie. Fusce scelerisque vel augue
    ... nec ullamcorper. Nam rutrum pretium placerat. Aliquam vel tristique lorem,
    ... sit amet cursus ante. In interdum laoreet mi, sit amet ultrices purus
    ... pulvinar a. Nam gravida euismod magna, non varius justo tincidunt feugiat.
    ... Aliquam pharetra lacus non risus vehicula rutrum. Maecenas aliquam leo
    ... felis. Pellentesque semper nunc sit amet nibh ullamcorper, ac elementum
    ... dolor luctus. Curabitur lacinia mi ornare consectetur vestibulum."""
    >>> c = bz2.compress(data)
    >>> len(data) / len(c)  # Data compression ratio
    1.513595166163142
    >>> d = bz2.decompress(c)
    >>> data == d  # Check equality to original object after round-trip
    True

使用 :class:`BZ2Compressor` 进行增量压缩：

    >>> import bz2
    >>> def gen_data(chunks=10, chunksize=1000):
    ...     """Yield incremental blocks of chunksize bytes."""
    ...     for _ in range(chunks):
    ...         yield b"z" * chunksize
    ...
    >>> comp = bz2.BZ2Compressor()
    >>> out = b""
    >>> for chunk in gen_data():
    ...     # Provide data to the compressor object
    ...     out = out + comp.compress(chunk)
    ...
    >>> # Finish the compression process.  Call this once you have
    >>> # finished providing data to the compressor.
    >>> out = out + comp.flush()

The example above uses a very "nonrandom" stream of data
(a stream of `b"z"` chunks).  Random data tends to compress poorly,
while ordered, repetitive data usually yields a high compression ratio.

用二进制模式写入和读取 bzip2 压缩文件：

    >>> import bz2
    >>> data = b"""\
    ... Donec rhoncus quis sapien sit amet molestie. Fusce scelerisque vel augue
    ... nec ullamcorper. Nam rutrum pretium placerat. Aliquam vel tristique lorem,
    ... sit amet cursus ante. In interdum laoreet mi, sit amet ultrices purus
    ... pulvinar a. Nam gravida euismod magna, non varius justo tincidunt feugiat.
    ... Aliquam pharetra lacus non risus vehicula rutrum. Maecenas aliquam leo
    ... felis. Pellentesque semper nunc sit amet nibh ullamcorper, ac elementum
    ... dolor luctus. Curabitur lacinia mi ornare consectetur vestibulum."""
    >>> with bz2.open("myfile.bz2", "wb") as f:
    ...     # Write compressed data to file
    ...     unused = f.write(data)
    ...
    >>> with bz2.open("myfile.bz2", "rb") as f:
    ...     # Decompress data from file
    ...     content = f.read()
    ...
    >>> content == data  # Check equality to original object after round-trip
    True

testcleanup::
