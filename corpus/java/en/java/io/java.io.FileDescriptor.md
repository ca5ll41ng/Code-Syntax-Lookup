---
id: "java-en-function-java-io-filedescriptor"
language: "java"
lang: "en"
category: "function"
name: "java.io.FileDescriptor"
title: "FileDescriptor"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileDescriptor

Instances of the file descriptor class serve as an opaque handle
 to the underlying machine-specific structure representing an open
 file, an open socket, or another source or sink of bytes.
 The main practical use for a file descriptor is to create a
 `FileInputStream` or `FileOutputStream` to contain it.
 

 Applications should not create their own file descriptors.

> *Since 1.0*
