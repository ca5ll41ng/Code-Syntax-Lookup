---
id: "java-en-function-objectoutputstream-write"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.write"
signature: "public void write(int val) throws IOException"
title: "ObjectOutputStream.write"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.write

```java
public void write(int val) throws IOException
```

Writes a byte. This method will block until the byte is actually
 written.

**参数**

- **val** — the byte to be written to the stream

**异常**

- **IOException** — If an I/O error has occurred.
