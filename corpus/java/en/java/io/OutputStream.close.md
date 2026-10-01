---
id: "java-en-function-outputstream-close"
language: "java"
lang: "en"
category: "function"
name: "OutputStream.close"
signature: "public void close() throws IOException"
title: "OutputStream.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/OutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OutputStream.close

```java
public void close() throws IOException
```

Closes this output stream and releases any system resources
 associated with this stream. The general contract of `close`
 is that it closes the output stream. A closed stream cannot perform
 output operations and cannot be reopened.

 The `close` method of `OutputStream` does nothing.

**异常**

- **IOException** — if an I/O error occurs.
