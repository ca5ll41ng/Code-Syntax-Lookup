---
id: "java-en-function-java-io-bytearrayoutputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.ByteArrayOutputStream"
title: "ByteArrayOutputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ByteArrayOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ByteArrayOutputStream

This class implements an output stream in which the data is
 written into a byte array. The buffer automatically grows as data
 is written to it.
 The data can be retrieved using `toByteArray()` and
 `toString()`.
 

 Closing a `ByteArrayOutputStream` has no effect. The methods in
 this class can be called after the stream has been closed without
 generating an `IOException`.

> *Since 1.0*
