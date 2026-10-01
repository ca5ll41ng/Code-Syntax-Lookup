---
id: "java-en-function-datainputstream-readboolean"
language: "java"
lang: "en"
category: "function"
name: "DataInputStream.readBoolean"
signature: "public final boolean readBoolean() throws IOException"
title: "DataInputStream.readBoolean"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInputStream.readBoolean

```java
public final boolean readBoolean() throws IOException
```

See the general contract of the `readBoolean`
 method of `DataInput`.
 

 Bytes for this operation are read from the contained
 input stream.

**返回**

- the `boolean` value read.

**异常**

- **EOFException** — if this input stream has reached the end.
- **IOException** — the stream has been closed and the contained input stream does not support reading after close, or another I/O error occurs.

**参见**

- java.io.FilterInputStream#in
