---
id: "java-en-function-datainputstream-readfully"
language: "java"
lang: "en"
category: "function"
name: "DataInputStream.readFully"
signature: "public final void readFully(byte[] b) throws IOException"
title: "DataInputStream.readFully"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInputStream.readFully

```java
public final void readFully(byte[] b) throws IOException
```

See the general contract of the `readFully`
 method of `DataInput`.
 

 Bytes
 for this operation are read from the contained
 input stream.

**参数**

- **b** — the buffer into which the data is read.

**异常**

- **NullPointerException** — if `b` is `null`.
- **EOFException** — if this input stream reaches the end before reading all the bytes.
- **IOException** — the stream has been closed and the contained input stream does not support reading after close, or another I/O error occurs.

**参见**

- java.io.FilterInputStream#in
