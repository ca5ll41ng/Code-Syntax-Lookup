---
id: "java-en-function-java-util-zip-inflateroutputstream"
language: "java"
lang: "en"
category: "function"
name: "java.util.zip.InflaterOutputStream"
title: "InflaterOutputStream"
directive: "type"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/InflaterOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InflaterOutputStream

Implements an output stream filter for decompressing data stored in the
 "deflate" compression format.

 Decompressor Usage
 An `InflaterOutputStream` created without
 specifying a `Inflater decompressor` will create a decompressor
 at construction time, and close the decompressor when the output stream
 is `close closed` or when `finish` is called.
 

 If a decompressor is specified when creating a `InflaterOutputStream`, it is the
 responsibility of the caller to `close close` the
 decompressor after closing the output stream.

 The `close` method should be called to release resources used by this
 stream, either directly, or with the `try`-with-resources statement.

**参见**

- InflaterInputStream
- DeflaterInputStream
- DeflaterOutputStream

> *Since 1.6*
