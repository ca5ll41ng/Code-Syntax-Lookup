---
id: "java-en-function-fileinputstream-read"
language: "java"
lang: "en"
category: "function"
name: "FileInputStream.read"
signature: "public int read() throws IOException"
title: "FileInputStream.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileInputStream.read

```java
public int read() throws IOException
```

Reads a byte of data from this input stream. This method blocks
 if no input is yet available.

**返回**

- the next byte of data, or `-1` if the end of the file is reached.

**异常**

- **IOException** — {@inheritDoc}
