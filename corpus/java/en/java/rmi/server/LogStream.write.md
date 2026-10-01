---
id: "java-en-function-logstream-write"
language: "java"
lang: "en"
category: "function"
name: "LogStream.write"
signature: "public void write(int b)"
title: "LogStream.write"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/LogStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogStream.write

```java
public void write(int b)
```

Write a byte of data to the stream.  If it is not a newline, then
 the byte is appended to the internal buffer.  If it is a newline,
 then the currently buffered line is sent to the log's output
 stream, prefixed with the appropriate logging information.

> *Since 1.1*

> **⚠ Deprecated** — no replacement
