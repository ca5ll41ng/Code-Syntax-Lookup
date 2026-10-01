---
id: "java-en-function-dataoutputstream-writefloat"
language: "java"
lang: "en"
category: "function"
name: "DataOutputStream.writeFloat"
signature: "public final void writeFloat(float v) throws IOException"
title: "DataOutputStream.writeFloat"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream.writeFloat

```java
public final void writeFloat(float v) throws IOException
```

Converts the float argument to an `int` using the
 `floatToIntBits` method in class `Float`,
 and then writes that `int` value to the underlying
 output stream as a 4-byte quantity, high byte first. If no
 exception is thrown, the counter `written` is
 incremented by `4`.

**参数**

- **v** — a `float` value to be written.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterOutputStream#out
- java.lang.Float#floatToIntBits(float)
