---
id: "java-en-function-filterinputstream-available"
language: "java"
lang: "en"
category: "function"
name: "FilterInputStream.available"
signature: "public int available() throws IOException"
title: "FilterInputStream.available"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilterInputStream.available

```java
public int available() throws IOException
```

Returns an estimate of the number of bytes that can be read (or
 skipped over) from this input stream without blocking by the next
 caller of a method for this input stream. The next caller might be
 the same thread or another thread.  A single read or skip of this
 many bytes will not block, but may read or skip fewer bytes.

 This method returns the result of `in.available()`.

**返回**

- an estimate of the number of bytes that can be read (or skipped over) from this input stream without blocking.

**异常**

- **IOException** — {@inheritDoc}
