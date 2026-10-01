---
id: "java-en-function-java-io-bytearrayinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.ByteArrayInputStream"
title: "ByteArrayInputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ByteArrayInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ByteArrayInputStream

A `ByteArrayInputStream` contains
 an internal buffer that contains bytes that
 may be read from the stream. An internal
 counter keeps track of the next byte to
 be supplied by the `read` method.
 

 Closing a `ByteArrayInputStream` has no effect. The methods in
 this class can be called after the stream has been closed without
 generating an `IOException`.

**参见**

- java.io.StringBufferInputStream

> *Since 1.0*
