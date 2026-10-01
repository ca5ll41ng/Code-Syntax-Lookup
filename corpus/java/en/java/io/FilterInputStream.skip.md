---
id: "java-en-function-filterinputstream-skip"
language: "java"
lang: "en"
category: "function"
name: "FilterInputStream.skip"
signature: "public long skip(long n) throws IOException"
title: "FilterInputStream.skip"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilterInputStream.skip

```java
public long skip(long n) throws IOException
```

Skips over and discards `n` bytes of data from the
 input stream. The `skip` method may, for a variety of
 reasons, end up skipping over some smaller number of bytes,
 possibly `0`. The actual number of bytes skipped is
 returned.

 This method simply performs `in.skip(n)` and returns the result.

**参数**

- **n** — {@inheritDoc}

**返回**

- the actual number of bytes skipped.

**异常**

- **IOException** — if `in.skip(n)` throws an IOException.
