---
id: "java-en-function-java-io-filenotfoundexception"
language: "java"
lang: "en"
category: "function"
name: "java.io.FileNotFoundException"
title: "FileNotFoundException"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileNotFoundException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileNotFoundException

Signals that an attempt to open the file denoted by a specified pathname
 has failed.

 

 This exception will be thrown by the `FileInputStream`, `FileOutputStream`, and `RandomAccessFile` constructors when a file
 with the specified pathname does not exist.  It will also be thrown by these
 constructors if the file does exist but for some reason is inaccessible, for
 example when an attempt is made to open a read-only file for writing.

> *Since 1.0*
