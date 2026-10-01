---
id: "java-en-function-java-util-zip-deflaterinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.util.zip.DeflaterInputStream"
title: "DeflaterInputStream"
directive: "type"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/DeflaterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeflaterInputStream

Implements an input stream filter for compressing data in the "deflate"
 compression format.

 Compressor Usage
 A `DeflaterInputStream` created without
 specifying a `Deflater compressor` will create a compressor
 at construction time, and close the compressor when the input stream
 is `close closed`.
 

 If a compressor is specified when creating a `DeflaterInputStream`, it is the
 responsibility of the caller to `close close` the
 compressor after closing the input stream.

 The `close` method should be called to release resources used by this
 stream, either directly, or with the `try`-with-resources statement.

**参见**

- DeflaterOutputStream
- InflaterOutputStream
- InflaterInputStream

> *Since 1.6*
