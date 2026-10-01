---
id: "java-en-function-datainputstream-readlong"
language: "java"
lang: "en"
category: "function"
name: "DataInputStream.readLong"
signature: "public final long readLong() throws IOException"
title: "DataInputStream.readLong"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInputStream.readLong

```java
public final long readLong() throws IOException
```

See the general contract of the `readLong`
 method of `DataInput`.
 

 Bytes
 for this operation are read from the contained
 input stream.

**返回**

- the next eight bytes of this input stream, interpreted as a `long`.

**异常**

- **EOFException** — if this input stream reaches the end before reading eight bytes.
- **IOException** — the stream has been closed and the contained input stream does not support reading after close, or another I/O error occurs.

**参见**

- java.io.FilterInputStream#in
