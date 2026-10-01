---
id: "java-en-function-java-io-bufferedinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.BufferedInputStream"
title: "BufferedInputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedInputStream

A `BufferedInputStream` adds
 functionality to another input stream-namely,
 the ability to buffer the input and to
 support the `mark` and `reset`
 methods. When  the `BufferedInputStream`
 is created, an internal buffer array is
 created. As bytes  from the stream are read
 or skipped, the internal buffer is refilled
 as necessary  from the contained input stream,
 many bytes at a time. The `mark`
 operation  remembers a point in the input
 stream and the `reset` operation
 causes all the  bytes read since the most
 recent `mark` operation to be
 reread before new bytes are  taken from
 the contained input stream.

 Once wrapped in a `BufferedInputStream`, the underlying
 `InputStream` should not be used directly nor wrapped with
 another stream.

> *Since 1.0*
