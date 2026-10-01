---
id: "java-en-function-dataoutput-writebyte"
language: "java"
lang: "en"
category: "function"
name: "DataOutput.writeByte"
signature: "void writeByte(int v) throws IOException"
title: "DataOutput.writeByte"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutput.writeByte

```java
void writeByte(int v) throws IOException
```

Writes to the output stream the eight low-order
 bits of the argument `v`.
 The 24 high-order bits of `v`
 are ignored. (This means  that `writeByte`
 does exactly the same thing as `write`
 for an integer argument.) The byte written
 by this method may be read by the `readByte`
 method of interface `DataInput`,
 which will then return a `byte`
 equal to `(byte)v`.

**参数**

- **v** — the byte value to be written.

**异常**

- **IOException** — if an I/O error occurs.
