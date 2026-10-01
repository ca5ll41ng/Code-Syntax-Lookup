---
id: "java-en-function-dataoutputstream-writelong"
language: "java"
lang: "en"
category: "function"
name: "DataOutputStream.writeLong"
signature: "public final void writeLong(long v) throws IOException"
title: "DataOutputStream.writeLong"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream.writeLong

```java
public final void writeLong(long v) throws IOException
```

Writes a `long` to the underlying output stream as eight
 bytes, high byte first. In no exception is thrown, the counter
 `written` is incremented by `8`.

**参数**

- **v** — a `long` to be written.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterOutputStream#out
