---
id: "java-en-function-dataoutputstream-writedouble"
language: "java"
lang: "en"
category: "function"
name: "DataOutputStream.writeDouble"
signature: "public final void writeDouble(double v) throws IOException"
title: "DataOutputStream.writeDouble"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream.writeDouble

```java
public final void writeDouble(double v) throws IOException
```

Converts the double argument to a `long` using the
 `doubleToLongBits` method in class `Double`,
 and then writes that `long` value to the underlying
 output stream as an 8-byte quantity, high byte first. If no
 exception is thrown, the counter `written` is
 incremented by `8`.

**参数**

- **v** — a `double` value to be written.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterOutputStream#out
- java.lang.Double#doubleToLongBits(double)
