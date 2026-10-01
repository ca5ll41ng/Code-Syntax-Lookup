---
id: "java-en-function-dataoutput-writechar"
language: "java"
lang: "en"
category: "function"
name: "DataOutput.writeChar"
signature: "void writeChar(int v) throws IOException"
title: "DataOutput.writeChar"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutput.writeChar

```java
void writeChar(int v) throws IOException
```

Writes a `char` value, which
 is comprised of two bytes, to the
 output stream.
 The byte values to be written, in the  order
 shown, are:
 
```
`(byte)(0xff & (v >> 8))
 (byte)(0xff & v)
 `
```

 The bytes written by this method may be
 read by the `readChar` method
 of interface `DataInput`, which
 will then return a `char` equal
 to `(char)v`.

**参数**

- **v** — the `char` value to be written.

**异常**

- **IOException** — if an I/O error occurs.
