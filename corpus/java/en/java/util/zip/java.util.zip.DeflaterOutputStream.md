---
id: "java-en-function-java-util-zip-deflateroutputstream"
language: "java"
lang: "en"
category: "function"
name: "java.util.zip.DeflaterOutputStream"
title: "DeflaterOutputStream"
directive: "type"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/DeflaterOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeflaterOutputStream

This class implements an output stream filter for compressing data in
 the "deflate" compression format. It is also used as the basis for other
 types of compression filters, such as GZIPOutputStream.
 

 Unless otherwise noted, passing a `null` argument to a constructor
 or method in this class will cause a `NullPointerException` to be
 thrown.

 Compressor Usage
 A `DeflaterOutputStream` created without
 specifying a `Deflater compressor` will create a compressor
 at construction time, and close the compressor when the output stream
 is `close closed`.
 

 If a compressor is specified when creating a `DeflaterOutputStream`, it is the
 responsibility of the caller to `close close` the
 compressor after closing the output stream.

 The `close` method should be called to release resources used by this
 stream, either directly, or with the `try`-with-resources statement.

**参见**

- Deflater

> *Since 1.1*
