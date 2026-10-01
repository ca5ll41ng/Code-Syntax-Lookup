---
id: "java-en-function-datainput-readbyte"
language: "java"
lang: "en"
category: "function"
name: "DataInput.readByte"
signature: "byte readByte() throws IOException"
title: "DataInput.readByte"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput.readByte

```java
byte readByte() throws IOException
```

Reads and returns one input byte.
 The byte is treated as a signed value in
 the range `-128` through `127`,
 inclusive.
 This method is suitable for
 reading the byte written by the `writeByte`
 method of interface `DataOutput`.

**返回**

- the 8-bit value read.

**异常**

- **EOFException** — if this stream reaches the end before reading all the bytes.
- **IOException** — if an I/O error occurs.
