---
id: "java-en-function-datainput-readshort"
language: "java"
lang: "en"
category: "function"
name: "DataInput.readShort"
signature: "short readShort() throws IOException"
title: "DataInput.readShort"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput.readShort

```java
short readShort() throws IOException
```

Reads two input bytes and returns
 a `short` value. Let `a`
 be the first byte read and `b`
 be the second byte. The value
 returned
 is:
 
```
`(short)((a << 8) | (b & 0xff))
 `
```

 This method
 is suitable for reading the bytes written
 by the `writeShort` method of
 interface `DataOutput`.

**返回**

- the 16-bit value read.

**异常**

- **EOFException** — if this stream reaches the end before reading all the bytes.
- **IOException** — if an I/O error occurs.
