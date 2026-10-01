---
id: "java-en-function-bytearrayoutputstream-reset"
language: "java"
lang: "en"
category: "function"
name: "ByteArrayOutputStream.reset"
signature: "public synchronized void reset()"
title: "ByteArrayOutputStream.reset"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ByteArrayOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ByteArrayOutputStream.reset

```java
public synchronized void reset()
```

Resets the `count` field of this `ByteArrayOutputStream`
 to zero, so that all currently accumulated output in the
 output stream is discarded. The output stream can be used again,
 reusing the already allocated buffer space.

**参见**

- java.io.ByteArrayInputStream#count
