---
id: "java-en-function-java-util-zip-zipoutputstream"
language: "java"
lang: "en"
category: "function"
name: "java.util.zip.ZipOutputStream"
title: "ZipOutputStream"
directive: "type"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipOutputStream

This class implements an output stream filter for writing files in the
 ZIP file format. Includes support for both compressed and uncompressed
 entries.
 

 Unless otherwise noted, passing a `null` argument to a constructor
 or method in this class will cause a `NullPointerException` to be
 thrown.
 

 By default, the UTF-8 charset is used to encode entry names and comments.
 `ZipOutputStream` may be be used to specify
 an alternative charset.

> *Since 1.1*
