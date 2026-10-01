---
id: "java-en-function-datainputstream-read"
language: "java"
lang: "en"
category: "function"
name: "DataInputStream.read"
signature: "public final int read(byte[] b) throws IOException"
title: "DataInputStream.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInputStream.read

```java
public final int read(byte[] b) throws IOException
```

Reads some number of bytes from the contained input stream and
 stores them into the buffer array `b`. The number of
 bytes actually read is returned as an integer. This method blocks
 until input data is available, end of file is detected, or an
 exception is thrown.

 

If `b` is null, a `NullPointerException` is
 thrown. If the length of `b` is zero, then no bytes are
 read and `0` is returned; otherwise, there is an attempt
 to read at least one byte. If no byte is available because the
 stream is at end of file, the value `-1` is returned;
 otherwise, at least one byte is read and stored into `b`.

 

The first byte read is stored into element `b[0]`, the
 next one into `b[1]`, and so on. The number of bytes read
 is, at most, equal to the length of `b`. Let `k`
 be the number of bytes actually read; these bytes will be stored in
 elements `b[0]` through `b[k-1]`, leaving
 elements `b[k]` through `b[b.length-1]`
 unaffected.

 

The `read(b)` method has the same effect as:
 
```

 read(b, 0, b.length)
 
```

**参数**

- **b** — the buffer into which the data is read.

**返回**

- the total number of bytes read into the buffer, or `-1` if there is no more data because the end of the stream has been reached.

**异常**

- **IOException** — if the first byte cannot be read for any reason other than end of file, the stream has been closed and the underlying input stream does not support reading after close, or another I/O error occurs.

**参见**

- java.io.FilterInputStream#in
- java.io.InputStream#read(byte[], int, int)
