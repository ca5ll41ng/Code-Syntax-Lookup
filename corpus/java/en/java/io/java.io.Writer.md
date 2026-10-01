---
id: "java-en-function-java-io-writer"
language: "java"
lang: "en"
category: "function"
name: "java.io.Writer"
title: "Writer"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Writer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Writer

Abstract class for writing to character streams.  The only methods that a
 subclass must implement are write(char[], int, int), flush(), and close().
 Most subclasses, however, will override some of the methods defined here in
 order to provide higher efficiency, additional functionality, or both.

**参见**

- BufferedWriter
- CharArrayWriter
- FilterWriter
- OutputStreamWriter
- FileWriter
- PipedWriter
- PrintWriter
- StringWriter
- Reader

> *Since 1.1*
