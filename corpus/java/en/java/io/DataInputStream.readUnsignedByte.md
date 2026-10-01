---
id: "java-en-function-datainputstream-readunsignedbyte"
language: "java"
lang: "en"
category: "function"
name: "DataInputStream.readUnsignedByte"
signature: "public final int readUnsignedByte() throws IOException"
title: "DataInputStream.readUnsignedByte"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInputStream.readUnsignedByte

```java
public final int readUnsignedByte() throws IOException
```

See the general contract of the `readUnsignedByte`
 method of `DataInput`.
 

 Bytes
 for this operation are read from the contained
 input stream.

**返回**

- the next byte of this input stream, interpreted as an unsigned 8-bit number.

**异常**

- **EOFException** — if this input stream has reached the end.
- **IOException** — the stream has been closed and the contained input stream does not support reading after close, or another I/O error occurs.

**参见**

- java.io.FilterInputStream#in
