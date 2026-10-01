---
id: "java-en-function-bufferedinputstream-skip"
language: "java"
lang: "en"
category: "function"
name: "BufferedInputStream.skip"
signature: "public synchronized long skip(long n) throws IOException"
title: "BufferedInputStream.skip"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedInputStream.skip

```java
public synchronized long skip(long n) throws IOException
```

See the general contract of the `skip`
 method of `InputStream`.

**异常**

- **IOException** — if this input stream has been closed by invoking its `close` method, `in.skip(n)` throws an IOException, or an I/O error occurs.
