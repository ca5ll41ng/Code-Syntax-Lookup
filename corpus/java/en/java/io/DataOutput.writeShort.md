---
id: "java-en-function-dataoutput-writeshort"
language: "java"
lang: "en"
category: "function"
name: "DataOutput.writeShort"
signature: "void writeShort(int v) throws IOException"
title: "DataOutput.writeShort"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutput.writeShort

```java
void writeShort(int v) throws IOException
```

Writes two bytes to the output
 stream to represent the value of the argument.
 The byte values to be written, in the  order
 shown, are:
 
```
`(byte)(0xff & (v >> 8))
 (byte)(0xff & v)
 `
```
 

 The bytes written by this method may be
 read by the `readShort` method
 of interface `DataInput`, which
 will then return a `short` equal
 to `(short)v`.

**参数**

- **v** — the `short` value to be written.

**异常**

- **IOException** — if an I/O error occurs.
