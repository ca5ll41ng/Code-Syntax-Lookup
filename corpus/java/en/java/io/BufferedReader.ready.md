---
id: "java-en-function-bufferedreader-ready"
language: "java"
lang: "en"
category: "function"
name: "BufferedReader.ready"
signature: "public boolean ready() throws IOException"
title: "BufferedReader.ready"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedReader.ready

```java
public boolean ready() throws IOException
```

Tells whether this stream is ready to be read.  A buffered character
 stream is ready if the buffer is not empty, or if the underlying
 character stream is ready.

**异常**

- **IOException** — If an I/O error occurs
