---
id: "java-en-function-dataoutput-writedouble"
language: "java"
lang: "en"
category: "function"
name: "DataOutput.writeDouble"
signature: "void writeDouble(double v) throws IOException"
title: "DataOutput.writeDouble"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutput.writeDouble

```java
void writeDouble(double v) throws IOException
```

Writes a `double` value,
 which is comprised of eight bytes, to the output stream.
 It does this as if it first converts this
 `double` value to a `long`
 in exactly the manner of the `Double.doubleToLongBits`
 method  and then writes the `long`
 value in exactly the manner of the  `writeLong`
 method. The bytes written by this method
 may be read by the `readDouble`
 method of interface `DataInput`,
 which will then return a `double`
 equal to `v`.

**参数**

- **v** — the `double` value to be written.

**异常**

- **IOException** — if an I/O error occurs.
