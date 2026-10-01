---
id: "java-en-function-java-nio-file-spi-filetypedetector"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.spi.FileTypeDetector"
title: "FileTypeDetector"
directive: "type"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileTypeDetector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileTypeDetector

A file type detector for probing a file to guess its file type.

 

 A file type detector is a concrete implementation of this class, has a
 zero-argument constructor, and implements the abstract methods specified
 below.

 

 The means by which a file type detector determines the file type is
 highly implementation specific. A simple implementation might examine the
 file extension (a convention used in some platforms) and map it to
 a file type. In other cases, the file type may be stored as a file  attribute or the bytes in a
 file may be examined to guess its file type.

**参见**

- java.nio.file.Files#probeContentType(Path)

> *Since 1.7*
