---
id: "python-zh-function-codecs-streamrecoder"
language: "python"
lang: "zh"
category: "function"
name: "StreamRecoder"
signature: "StreamRecoder(stream, encode, decode, Reader, Writer, errors='strict')"
directive: "class"
module: "codecs"
source_url: "https://docs.python.org/zh-cn/3/library/codecs.html#codecs.StreamRecoder"
license: "PSF"
updated: "2026-10-01"
---

# StreamRecoder

Creates a `StreamRecoder` instance which implements a two-way conversion:
*encode* and *decode* work on the frontend — the data visible to
code calling `~StreamReader.read` and `~StreamWriter.write`,
while *Reader* and *Writer*
work on the backend — the data in *stream*.

You can use these objects to do transparent transcodings, e.g., from Latin-1
to UTF-8 and back.

*stream* 参数必须为一个文件型对象。

The *encode* and *decode* arguments must
adhere to the `Codec` interface. *Reader* and
*Writer* must be factory functions or classes providing objects of the
`StreamReader` and `StreamWriter` interface respectively.

Error handling is done in the same way as defined for the stream readers and
writers.
