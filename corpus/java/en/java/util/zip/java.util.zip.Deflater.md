---
id: "java-en-function-java-util-zip-deflater"
language: "java"
lang: "en"
category: "function"
name: "java.util.zip.Deflater"
title: "Deflater"
directive: "type"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Deflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deflater

This class provides support for general purpose compression using the
 popular ZLIB compression library. The ZLIB compression library was
 initially developed as part of the PNG graphics standard and is not
 protected by patents. It is fully described in the specifications at
 the java.util.zip
 package description.
 

 Unless otherwise noted, passing a `null` argument to a method
 in this class will cause a `NullPointerException` to be
 thrown.
 

 This class deflates sequences of bytes into ZLIB compressed data format.
 The input byte sequence is provided in either a byte array or a `ByteBuffer`,
 via one of the `setInput()` methods. The output byte sequence is
 written to the output byte array or `ByteBuffer` passed to the
 `deflate()` methods.
 

 To release the resources used by a `Deflater`, an application must close it
 by invoking its `end` or `close` method.

 This class implements `AutoCloseable` to facilitate its usage with
 `try`-with-resources statement. The `close() close() method` simply
 calls `end()`.

 

 The following code fragment demonstrates a trivial compression
 and decompression of a string using `Deflater` and `Inflater`.
 {@snippet id="compdecomp" lang="java" class="Snippets" region="DeflaterInflaterExample"}

**参见**

- Inflater

> *Since 1.1*
