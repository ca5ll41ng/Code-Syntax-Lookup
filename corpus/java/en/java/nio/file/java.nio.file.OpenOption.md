---
id: "java-en-function-java-nio-file-openoption"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.OpenOption"
title: "OpenOption"
directive: "type"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/OpenOption.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenOption

An object that configures how to open or create a file.

 

 Objects of this type are used by methods such as `newOutputStream(Path,OpenOption[]) newOutputStream`, `newByteChannel newByteChannel`, `open FileChannel.open`, and `open AsynchronousFileChannel.open`
 when opening or creating a file.

 

 The `StandardOpenOption` enumeration type defines the
 standard options.

> *Since 1.7*
