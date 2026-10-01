---
id: "java-en-function-dataoutputstream-writebyte"
language: "java"
lang: "en"
category: "function"
name: "DataOutputStream.writeByte"
signature: "public final void writeByte(int v) throws IOException"
title: "DataOutputStream.writeByte"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream.writeByte

```java
public final void writeByte(int v) throws IOException
```

Writes out a `byte` to the underlying output stream as
 a 1-byte value. If no exception is thrown, the counter
 `written` is incremented by `1`.

**参数**

- **v** — a `byte` value to be written.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterOutputStream#out
