---
id: "java-en-function-java-io-stringbufferinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.StringBufferInputStream"
title: "StringBufferInputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StringBufferInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringBufferInputStream

This class allows an application to create an input stream in
 which the bytes read are supplied by the contents of a string.
 Applications can also read bytes from a byte array by using a
 `ByteArrayInputStream`.
 

 Only the low eight bits of each character in the string are used by
 this class.

**参见**

- java.io.ByteArrayInputStream
- java.io.StringReader

> *Since 1.0*

> **⚠ Deprecated** — This class does not properly convert characters into bytes.  As of JDK&nbsp;1.1, the preferred way to create a stream from a string is via the `StringReader` class.
