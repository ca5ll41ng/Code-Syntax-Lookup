---
id: "java-en-function-datainputstream-readfloat"
language: "java"
lang: "en"
category: "function"
name: "DataInputStream.readFloat"
signature: "public final float readFloat() throws IOException"
title: "DataInputStream.readFloat"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInputStream.readFloat

```java
public final float readFloat() throws IOException
```

See the general contract of the `readFloat`
 method of `DataInput`.
 

 Bytes
 for this operation are read from the contained
 input stream.

**返回**

- the next four bytes of this input stream, interpreted as a `float`.

**异常**

- **EOFException** — if this input stream reaches the end before reading four bytes.
- **IOException** — the stream has been closed and the contained input stream does not support reading after close, or another I/O error occurs.

**参见**

- java.io.DataInputStream#readInt()
- java.lang.Float#intBitsToFloat(int)
