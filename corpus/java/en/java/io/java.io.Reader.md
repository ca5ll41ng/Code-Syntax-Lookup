---
id: "java-en-function-java-io-reader"
language: "java"
lang: "en"
category: "function"
name: "java.io.Reader"
title: "Reader"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Reader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reader

Abstract class for reading character streams.  The only methods that a
 subclass must implement are read(char[], int, int) and close().  Most
 subclasses, however, will override some of the methods defined here in order
 to provide higher efficiency, additional functionality, or both.

**参见**

- BufferedReader
- LineNumberReader
- CharArrayReader
- InputStreamReader
- FileReader
- FilterReader
- PushbackReader
- PipedReader
- StringReader
- Writer

> *Since 1.1*
