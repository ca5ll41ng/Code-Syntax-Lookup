---
id: "java-en-function-dataoutputstream-writeint"
language: "java"
lang: "en"
category: "function"
name: "DataOutputStream.writeInt"
signature: "public final void writeInt(int v) throws IOException"
title: "DataOutputStream.writeInt"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream.writeInt

```java
public final void writeInt(int v) throws IOException
```

Writes an `int` to the underlying output stream as four
 bytes, high byte first. If no exception is thrown, the counter
 `written` is incremented by `4`.

**参数**

- **v** — an `int` to be written.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterOutputStream#out
