---
id: "java-en-function-stringreader-ready"
language: "java"
lang: "en"
category: "function"
name: "StringReader.ready"
signature: "public boolean ready() throws IOException"
title: "StringReader.ready"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StringReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringReader.ready

```java
public boolean ready() throws IOException
```

Tells whether this stream is ready to be read.

**返回**

- True if the next read() is guaranteed not to block for input

**异常**

- **IOException** — If the stream is closed
