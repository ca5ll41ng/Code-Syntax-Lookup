---
id: "java-en-function-reader-read"
language: "java"
lang: "en"
category: "function"
name: "Reader.read"
signature: "public int read(CharBuffer target) throws IOException"
title: "Reader.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Reader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reader.read

```java
public int read(CharBuffer target) throws IOException
```

Attempts to read characters into the specified character buffer.
 The buffer is used as a repository of characters as-is: the only
 changes made are the results of a put operation. No flipping or
 rewinding of the buffer is performed. If the `length length` of the specified character
 buffer is zero, then no characters will be read and zero will be
 returned.

**参数**

- **target** — the buffer to read characters into

**返回**

- The number of characters added to the buffer, possibly zero, or -1 if this source of characters is at its end

**异常**

- **IOException** — if an I/O error occurs
- **NullPointerException** — if target is null
- **java.nio.ReadOnlyBufferException** — if target is a read only buffer, even if its length is zero

> *Since 1.5*
