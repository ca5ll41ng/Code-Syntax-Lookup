---
id: "java-en-function-dataoutputstream-writechar"
language: "java"
lang: "en"
category: "function"
name: "DataOutputStream.writeChar"
signature: "public final void writeChar(int v) throws IOException"
title: "DataOutputStream.writeChar"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream.writeChar

```java
public final void writeChar(int v) throws IOException
```

Writes a `char` to the underlying output stream as a
 2-byte value, high byte first. If no exception is thrown, the
 counter `written` is incremented by `2`.

**参数**

- **v** — a `char` value to be written.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterOutputStream#out
