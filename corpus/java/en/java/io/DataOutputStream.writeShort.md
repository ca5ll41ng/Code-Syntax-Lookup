---
id: "java-en-function-dataoutputstream-writeshort"
language: "java"
lang: "en"
category: "function"
name: "DataOutputStream.writeShort"
signature: "public final void writeShort(int v) throws IOException"
title: "DataOutputStream.writeShort"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream.writeShort

```java
public final void writeShort(int v) throws IOException
```

Writes a `short` to the underlying output stream as two
 bytes, high byte first. If no exception is thrown, the counter
 `written` is incremented by `2`.

**参数**

- **v** — a `short` to be written.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterOutputStream#out
