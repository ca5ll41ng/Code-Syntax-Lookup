---
id: "java-en-function-datainputstream-skipbytes"
language: "java"
lang: "en"
category: "function"
name: "DataInputStream.skipBytes"
signature: "public final int skipBytes(int n) throws IOException"
title: "DataInputStream.skipBytes"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInputStream.skipBytes

```java
public final int skipBytes(int n) throws IOException
```

See the general contract of the `skipBytes`
 method of `DataInput`.
 

 Bytes for this operation are read from the contained
 input stream.

**参数**

- **n** — the number of bytes to be skipped.

**返回**

- the actual number of bytes skipped.

**异常**

- **IOException** — if the contained input stream does not support seek, or the stream has been closed and the contained input stream does not support reading after close, or another I/O error occurs.
