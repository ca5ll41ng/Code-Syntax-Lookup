---
id: "java-en-function-datainput-readunsignedshort"
language: "java"
lang: "en"
category: "function"
name: "DataInput.readUnsignedShort"
signature: "int readUnsignedShort() throws IOException"
title: "DataInput.readUnsignedShort"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput.readUnsignedShort

```java
int readUnsignedShort() throws IOException
```

Reads two input bytes and returns
 an `int` value in the range `0`
 through `65535`. Let `a`
 be the first byte read and
 `b`
 be the second byte. The value returned is:
 
```
`(((a & 0xff) << 8) | (b & 0xff))
 `
```

 This method is suitable for reading the bytes
 written by the `writeShort` method
 of interface `DataOutput`  if
 the argument to `writeShort`
 was intended to be a value in the range
 `0` through `65535`.

**返回**

- the unsigned 16-bit value read.

**异常**

- **EOFException** — if this stream reaches the end before reading all the bytes.
- **IOException** — if an I/O error occurs.
