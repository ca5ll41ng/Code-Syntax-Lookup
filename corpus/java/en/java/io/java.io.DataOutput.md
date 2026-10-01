---
id: "java-en-function-java-io-dataoutput"
language: "java"
lang: "en"
category: "function"
name: "java.io.DataOutput"
title: "DataOutput"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutput

The `DataOutput` interface provides
 for converting data from any of the Java
 primitive types to a series of bytes and
 writing these bytes to a binary stream.
 There is  also a facility for converting
 a `String` into
 modified UTF-8
 format and writing the resulting series
 of bytes.
 

 For all the methods in this interface that
 write bytes, it is generally true that if
 a byte cannot be written for any reason,
 an `IOException` is thrown.

**参见**

- java.io.DataInput
- java.io.DataOutputStream

> *Since 1.0*
