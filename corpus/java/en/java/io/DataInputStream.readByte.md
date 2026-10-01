---
id: "java-en-function-datainputstream-readbyte"
language: "java"
lang: "en"
category: "function"
name: "DataInputStream.readByte"
signature: "public final byte readByte() throws IOException"
title: "DataInputStream.readByte"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInputStream.readByte

```java
public final byte readByte() throws IOException
```

See the general contract of the `readByte`
 method of `DataInput`.
 

 Bytes
 for this operation are read from the contained
 input stream.

**返回**

- the next byte of this input stream as a signed 8-bit `byte`.

**异常**

- **EOFException** — if this input stream has reached the end.
- **IOException** — the stream has been closed and the contained input stream does not support reading after close, or another I/O error occurs.

**参见**

- java.io.FilterInputStream#in
