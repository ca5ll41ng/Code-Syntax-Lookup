---
id: "java-en-function-randomaccessfile-writefloat"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.writeFloat"
signature: "public final void writeFloat(float v) throws IOException"
title: "RandomAccessFile.writeFloat"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.writeFloat

```java
public final void writeFloat(float v) throws IOException
```

Converts the float argument to an `int` using the
 `floatToIntBits` method in class `Float`,
 and then writes that `int` value to the file as a
 four-byte quantity, high byte first. The write starts at the
 current position of the file pointer.

**参数**

- **v** — a `float` value to be written.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.lang.Float#floatToIntBits(float)
