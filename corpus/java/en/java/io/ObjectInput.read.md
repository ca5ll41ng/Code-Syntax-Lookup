---
id: "java-en-function-objectinput-read"
language: "java"
lang: "en"
category: "function"
name: "ObjectInput.read"
signature: "public int read() throws IOException"
title: "ObjectInput.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInput.read

```java
public int read() throws IOException
```

Reads a byte of data. This method will block if no input is
 available.

**返回**

- the byte read, or -1 if the end of the stream is reached.

**异常**

- **IOException** — If an I/O error has occurred.
