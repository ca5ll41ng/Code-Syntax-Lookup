---
id: "java-en-function-sequenceinputstream-read"
language: "java"
lang: "en"
category: "function"
name: "SequenceInputStream.read"
signature: "public int read() throws IOException"
title: "SequenceInputStream.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/SequenceInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequenceInputStream.read

```java
public int read() throws IOException
```

{@inheritDoc}
 

 This method
 tries to read one byte from the current substream. If it
 reaches the end of the stream, it calls the `close`
 method of the current substream and begins reading from the next
 substream.

**返回**

- {@inheritDoc}

**异常**

- **IOException** — if an I/O error occurs.
