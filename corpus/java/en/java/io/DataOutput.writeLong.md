---
id: "java-en-function-dataoutput-writelong"
language: "java"
lang: "en"
category: "function"
name: "DataOutput.writeLong"
signature: "void writeLong(long v) throws IOException"
title: "DataOutput.writeLong"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutput.writeLong

```java
void writeLong(long v) throws IOException
```

Writes a `long` value, which is
 comprised of eight bytes, to the output stream.
 The byte values to be written, in the  order
 shown, are:
 
```
`(byte)(0xff & (v >> 56))
 (byte)(0xff & (v >> 48))
 (byte)(0xff & (v >> 40))
 (byte)(0xff & (v >> 32))
 (byte)(0xff & (v >> 24))
 (byte)(0xff & (v >> 16))
 (byte)(0xff & (v >>  8))
 (byte)(0xff & v)
 `
```

 The bytes written by this method may be
 read by the `readLong` method
 of interface `DataInput`, which
 will then return a `long` equal
 to `v`.

**参数**

- **v** — the `long` value to be written.

**异常**

- **IOException** — if an I/O error occurs.
