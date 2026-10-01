---
id: "java-en-function-reader-ready"
language: "java"
lang: "en"
category: "function"
name: "Reader.ready"
signature: "public boolean ready() throws IOException"
title: "Reader.ready"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Reader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reader.ready

```java
public boolean ready() throws IOException
```

Tells whether this stream is ready to be read.

**返回**

- True if the next read() is guaranteed not to block for input, false otherwise.  Note that returning false does not guarantee that the next read will block.

**异常**

- **IOException** — If an I/O error occurs
