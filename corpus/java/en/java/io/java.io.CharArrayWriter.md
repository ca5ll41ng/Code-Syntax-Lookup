---
id: "java-en-function-java-io-chararraywriter"
language: "java"
lang: "en"
category: "function"
name: "java.io.CharArrayWriter"
title: "CharArrayWriter"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/CharArrayWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharArrayWriter

This class implements a character buffer that can be used as a Writer.
 The buffer automatically grows when data is written to the stream.  The data
 can be retrieved using toCharArray() and toString().
 

 Note: Invoking close() on this class has no effect, and methods
 of this class can be called after the stream has closed
 without generating an IOException.

> *Since 1.1*
