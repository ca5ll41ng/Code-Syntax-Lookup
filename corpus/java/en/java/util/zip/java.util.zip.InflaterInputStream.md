---
id: "java-en-function-java-util-zip-inflaterinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.util.zip.InflaterInputStream"
title: "InflaterInputStream"
directive: "type"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/InflaterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InflaterInputStream

This class implements a stream filter for uncompressing data in the
 "deflate" compression format. It is also used as the basis for other
 decompression filters, such as GZIPInputStream.
 

 Unless otherwise noted, passing a `null` argument to a constructor
 or method in this class will cause a `NullPointerException` to be
 thrown.

 Decompressor Usage
 An `InflaterInputStream` created without
 specifying a `Inflater decompressor` will create a decompressor
 at construction time, and close the decompressor when the input stream
 is `close closed`.
 

 If a decompressor is specified when creating a `InflaterInputStream`, it is the
 responsibility of the caller to `close close` the
 decompressor after closing the input stream.

 The `close` method should be called to release resources used by this
 stream, either directly, or with the `try`-with-resources statement.

**参见**

- Inflater

> *Since 1.1*
