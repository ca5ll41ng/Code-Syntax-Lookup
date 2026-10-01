---
id: "java-en-function-objectinputstream-readfully"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.readFully"
signature: "public void readFully(byte[] buf) throws IOException"
title: "ObjectInputStream.readFully"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.readFully

```java
public void readFully(byte[] buf) throws IOException
```

Reads bytes, blocking until all bytes are read.

**参数**

- **buf** — the buffer into which the data is read

**异常**

- **NullPointerException** — If `buf` is `null`.
- **EOFException** — If end of file is reached.
- **IOException** — If other I/O error has occurred.
