---
id: "java-en-function-java-nio-file-directorystream-filter"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.DirectoryStream.Filter"
title: "Filter"
directive: "type"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/DirectoryStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Filter

An interface that is implemented by objects that decide if a directory
 entry should be accepted or filtered. A `Filter` is passed as the
 parameter to the `newDirectoryStream`
 method when opening a directory to iterate over the entries in the
 directory.

**参数**

- **the** — type of the directory entry

> *Since 1.7*
