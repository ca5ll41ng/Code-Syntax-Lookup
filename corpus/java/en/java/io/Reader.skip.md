---
id: "java-en-function-reader-skip"
language: "java"
lang: "en"
category: "function"
name: "Reader.skip"
signature: "public long skip(long n) throws IOException"
title: "Reader.skip"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Reader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reader.skip

```java
public long skip(long n) throws IOException
```

Skips characters.  This method will block until some characters are
 available, an I/O error occurs, or the end of the stream is reached.
 If the stream is already at its end before this method is invoked,
 then no characters are skipped and zero is returned.

**参数**

- **n** — The number of characters to skip

**返回**

- The number of characters actually skipped

**异常**

- **IllegalArgumentException** — If `n` is negative.
- **IOException** — If an I/O error occurs
