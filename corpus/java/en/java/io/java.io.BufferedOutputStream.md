---
id: "java-en-function-java-io-bufferedoutputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.BufferedOutputStream"
title: "BufferedOutputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedOutputStream

The class implements a buffered output stream. By setting up such
 an output stream, an application can write bytes to the underlying
 output stream without necessarily causing a call to the underlying
 system for each byte written.

 Once wrapped in a `BufferedOutputStream`, the underlying
 `OutputStream` should not be used directly nor wrapped with
 another stream.

> *Since 1.0*
