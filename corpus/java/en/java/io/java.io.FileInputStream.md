---
id: "java-en-function-java-io-fileinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.FileInputStream"
title: "FileInputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileInputStream

A `FileInputStream` obtains input bytes
 from a file in a file system. What files
 are  available depends on the host environment.

 

`FileInputStream` is meant for reading streams of raw bytes
 such as image data. For reading streams of characters, consider using
 `FileReader`.

 The `close` method should be called to release resources used by this
 stream, either directly, or with the `try`-with-resources statement.

 Subclasses are responsible for the cleanup of resources acquired by the subclass.
 Subclasses requiring that resource cleanup take place after a stream becomes
 unreachable should use `java.lang.ref.Cleaner` or some other mechanism.

**参见**

- java.io.File
- java.io.FileDescriptor
- java.io.FileOutputStream
- java.nio.file.Files#newInputStream

> *Since 1.0*
