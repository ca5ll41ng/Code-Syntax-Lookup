---
id: "java-en-function-java-io-filewriter"
language: "java"
lang: "en"
category: "function"
name: "java.io.FileWriter"
title: "FileWriter"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileWriter

Writes text to character files using a default buffer size. Encoding from characters
 to bytes uses either a specified `Charset charset`
 or the `defaultCharset() default charset`.

 

 Whether or not a file is available or may be created depends upon the
 underlying platform.  Some platforms, in particular, allow a file to be
 opened for writing by only one `FileWriter` (or other file-writing
 object) at a time.  In such situations the constructors in this class
 will fail if the file involved is already open.

 

 The `FileWriter` is meant for writing streams of characters. For writing
 streams of raw bytes, consider using a `FileOutputStream`.

**参见**

- OutputStreamWriter
- FileOutputStream
- Charset#defaultCharset()

> *Since 1.1*
