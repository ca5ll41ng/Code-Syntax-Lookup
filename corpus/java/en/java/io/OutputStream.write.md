---
id: "java-en-function-outputstream-write"
language: "java"
lang: "en"
category: "function"
name: "OutputStream.write"
signature: "public abstract void write(int b) throws IOException"
title: "OutputStream.write"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/OutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OutputStream.write

```java
public abstract void write(int b) throws IOException
```

Writes the specified byte to this output stream. The general
 contract for `write` is that one byte is written
 to the output stream. The byte to be written is the eight
 low-order bits of the argument `b`. The 24
 high-order bits of `b` are ignored.

**参数**

- **b** — the `byte`.

**异常**

- **IOException** — if an I/O error occurs. In particular, an `IOException` may be thrown if the output stream has been closed.
