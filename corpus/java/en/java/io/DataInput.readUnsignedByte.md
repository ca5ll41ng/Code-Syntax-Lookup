---
id: "java-en-function-datainput-readunsignedbyte"
language: "java"
lang: "en"
category: "function"
name: "DataInput.readUnsignedByte"
signature: "int readUnsignedByte() throws IOException"
title: "DataInput.readUnsignedByte"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput.readUnsignedByte

```java
int readUnsignedByte() throws IOException
```

Reads one input byte, zero-extends
 it to type `int`, and returns
 the result, which is therefore in the range
 `0`
 through `255`.
 This method is suitable for reading
 the byte written by the `writeByte`
 method of interface `DataOutput`
 if the argument to `writeByte`
 was intended to be a value in the range
 `0` through `255`.

**返回**

- the unsigned 8-bit value read.

**异常**

- **EOFException** — if this stream reaches the end before reading all the bytes.
- **IOException** — if an I/O error occurs.
