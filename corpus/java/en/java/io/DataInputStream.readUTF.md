---
id: "java-en-function-datainputstream-readutf"
language: "java"
lang: "en"
category: "function"
name: "DataInputStream.readUTF"
signature: "public final String readUTF() throws IOException"
title: "DataInputStream.readUTF"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInputStream.readUTF

```java
public final String readUTF() throws IOException
```

See the general contract of the `readUTF`
 method of `DataInput`.
 

 Bytes
 for this operation are read from the contained
 input stream.

**返回**

- a Unicode string.

**异常**

- **EOFException** — if this input stream reaches the end before reading all the bytes.
- **IOException** — the stream has been closed and the contained input stream does not support reading after close, or another I/O error occurs.
- **UTFDataFormatException** — if the bytes do not represent a valid modified UTF-8 encoding of a string.

**参见**

- java.io.DataInputStream#readUTF(java.io.DataInput)
