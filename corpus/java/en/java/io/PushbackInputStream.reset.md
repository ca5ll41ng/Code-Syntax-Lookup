---
id: "java-en-function-pushbackinputstream-reset"
language: "java"
lang: "en"
category: "function"
name: "PushbackInputStream.reset"
signature: "public void reset() throws IOException"
title: "PushbackInputStream.reset"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PushbackInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushbackInputStream.reset

```java
public void reset() throws IOException
```

Repositions this stream to the position at the time the
 `mark` method was last called on this input stream.

 

 The method `reset` for class
 `PushbackInputStream` does nothing except throw an
 `IOException`.

**异常**

- **IOException** — if this method is invoked.

**参见**

- java.io.InputStream#mark(int)
- java.io.IOException
