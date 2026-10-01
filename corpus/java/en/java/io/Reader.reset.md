---
id: "java-en-function-reader-reset"
language: "java"
lang: "en"
category: "function"
name: "Reader.reset"
signature: "public void reset() throws IOException"
title: "Reader.reset"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Reader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reader.reset

```java
public void reset() throws IOException
```

Resets the stream.  If the stream has been marked, then attempt to
 reposition it at the mark.  If the stream has not been marked, then
 attempt to reset it in some way appropriate to the particular stream,
 for example by repositioning it to its starting point.  Not all
 character-input streams support the reset() operation, and some support
 reset() without supporting mark().

**异常**

- **IOException** — If the stream has not been marked, or if the mark has been invalidated, or if the stream does not support reset(), or if some other I/O error occurs
