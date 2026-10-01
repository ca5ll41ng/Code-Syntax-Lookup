---
id: "python-en-function-codecs-streamreaderwriter"
language: "python"
lang: "en"
category: "function"
name: "StreamReaderWriter"
signature: "StreamReaderWriter(stream, Reader, Writer, errors='strict')"
directive: "class"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.StreamReaderWriter"
license: "PSF"
updated: "2026-10-01"
---

# StreamReaderWriter

Creates a `StreamReaderWriter` instance. *stream* must be a file-like
object. *Reader* and *Writer* must be factory functions or classes providing the
`StreamReader` and `StreamWriter` interface resp. Error handling
is done in the same way as defined for the stream readers and writers.
