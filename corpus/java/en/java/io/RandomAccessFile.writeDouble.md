---
id: "java-en-function-randomaccessfile-writedouble"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.writeDouble"
signature: "public final void writeDouble(double v) throws IOException"
title: "RandomAccessFile.writeDouble"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.writeDouble

```java
public final void writeDouble(double v) throws IOException
```

Converts the double argument to a `long` using the
 `doubleToLongBits` method in class `Double`,
 and then writes that `long` value to the file as an
 eight-byte quantity, high byte first. The write starts at the current
 position of the file pointer.

**参数**

- **v** — a `double` value to be written.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.lang.Double#doubleToLongBits(double)
