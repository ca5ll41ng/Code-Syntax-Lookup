---
id: "java-en-function-java-io-fileoutputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.FileOutputStream"
title: "FileOutputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileOutputStream

A file output stream is an output stream for writing data to a
 `File` or to a `FileDescriptor`. Whether or not
 a file is available or may be created depends upon the underlying
 platform.  Some platforms, in particular, allow a file to be opened
 for writing by only one `FileOutputStream` (or other
 file-writing object) at a time.  In such situations the constructors in
 this class will fail if the file involved is already open.

 

`FileOutputStream` is meant for writing streams of raw bytes
 such as image data. For writing streams of characters, consider using
 `FileWriter`.

 The `close` method should be called to release resources used by this
 stream, either directly, or with the `try`-with-resources statement.

 Subclasses are responsible for the cleanup of resources acquired by the subclass.
 Subclasses requiring that resource cleanup take place after a stream becomes
 unreachable should use `java.lang.ref.Cleaner` or some other mechanism.

**参见**

- java.io.File
- java.io.FileDescriptor
- java.io.FileInputStream
- java.nio.file.Files#newOutputStream

> *Since 1.0*
