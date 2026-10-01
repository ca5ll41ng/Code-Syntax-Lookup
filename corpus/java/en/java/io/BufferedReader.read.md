---
id: "java-en-function-bufferedreader-read"
language: "java"
lang: "en"
category: "function"
name: "BufferedReader.read"
signature: "public int read() throws IOException"
title: "BufferedReader.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedReader.read

```java
public int read() throws IOException
```

Reads a single character.

**返回**

- The character read, as an integer in the range 0 to 65535 (`0x00-0xffff`), or -1 if the end of the stream has been reached

**异常**

- **IOException** — If an I/O error occurs
