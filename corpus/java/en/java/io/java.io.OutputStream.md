---
id: "java-en-function-java-io-outputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.OutputStream"
title: "OutputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/OutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OutputStream

This abstract class is the superclass of all classes representing
 an output stream of bytes. An output stream accepts output bytes
 and sends them to some sink.
 

 Applications that need to define a subclass of
 `OutputStream` must always provide at least a method
 that writes one byte of output.

**参见**

- java.io.BufferedOutputStream
- java.io.ByteArrayOutputStream
- java.io.DataOutputStream
- java.io.FilterOutputStream
- java.io.InputStream
- java.io.OutputStream#write(int)

> *Since 1.0*
