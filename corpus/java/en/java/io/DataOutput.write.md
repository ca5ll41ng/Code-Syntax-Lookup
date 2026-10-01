---
id: "java-en-function-dataoutput-write"
language: "java"
lang: "en"
category: "function"
name: "DataOutput.write"
signature: "void write(int b) throws IOException"
title: "DataOutput.write"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutput.write

```java
void write(int b) throws IOException
```

Writes to the output stream the eight
 low-order bits of the argument `b`.
 The 24 high-order  bits of `b`
 are ignored.

**参数**

- **b** — the byte to be written.

**异常**

- **IOException** — if an I/O error occurs.
