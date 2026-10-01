---
id: "java-en-function-datainputstream-readunsignedshort"
language: "java"
lang: "en"
category: "function"
name: "DataInputStream.readUnsignedShort"
signature: "public final int readUnsignedShort() throws IOException"
title: "DataInputStream.readUnsignedShort"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInputStream.readUnsignedShort

```java
public final int readUnsignedShort() throws IOException
```

See the general contract of the `readUnsignedShort`
 method of `DataInput`.
 

 Bytes
 for this operation are read from the contained
 input stream.

**返回**

- the next two bytes of this input stream, interpreted as an unsigned 16-bit integer.

**异常**

- **EOFException** — if this input stream reaches the end before reading two bytes.
- **IOException** — the stream has been closed and the contained input stream does not support reading after close, or another I/O error occurs.

**参见**

- java.io.FilterInputStream#in
