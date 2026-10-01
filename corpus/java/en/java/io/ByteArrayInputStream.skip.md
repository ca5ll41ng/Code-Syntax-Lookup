---
id: "java-en-function-bytearrayinputstream-skip"
language: "java"
lang: "en"
category: "function"
name: "ByteArrayInputStream.skip"
signature: "public synchronized long skip(long n)"
title: "ByteArrayInputStream.skip"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ByteArrayInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ByteArrayInputStream.skip

```java
public synchronized long skip(long n)
```

Skips `n` bytes of input from this input stream. Fewer
 bytes might be skipped if the end of the input stream is reached.
 The actual number `k`
 of bytes to be skipped is equal to the smaller
 of `n` and  `count-pos`.
 The value `k` is added into `pos`
 and `k` is returned.

**参数**

- **n** — {@inheritDoc}

**返回**

- the actual number of bytes skipped.
