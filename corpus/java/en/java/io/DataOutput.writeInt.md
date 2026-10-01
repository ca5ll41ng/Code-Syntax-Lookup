---
id: "java-en-function-dataoutput-writeint"
language: "java"
lang: "en"
category: "function"
name: "DataOutput.writeInt"
signature: "void writeInt(int v) throws IOException"
title: "DataOutput.writeInt"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutput.writeInt

```java
void writeInt(int v) throws IOException
```

Writes an `int` value, which is
 comprised of four bytes, to the output stream.
 The byte values to be written, in the  order
 shown, are:
 
```
`(byte)(0xff & (v >> 24))
 (byte)(0xff & (v >> 16))
 (byte)(0xff & (v >>  8))
 (byte)(0xff & v)
 `
```

 The bytes written by this method may be read
 by the `readInt` method of interface
 `DataInput`, which will then
 return an `int` equal to `v`.

**参数**

- **v** — the `int` value to be written.

**异常**

- **IOException** — if an I/O error occurs.
