---
id: "java-en-function-filterinputstream-mark"
language: "java"
lang: "en"
category: "function"
name: "FilterInputStream.mark"
signature: "public void mark(int readlimit)"
title: "FilterInputStream.mark"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilterInputStream.mark

```java
public void mark(int readlimit)
```

Marks the current position in this input stream. A subsequent
 call to the `reset` method repositions this stream at
 the last marked position so that subsequent reads re-read the same bytes.
 

 The `readlimit` argument tells this input stream to
 allow that many bytes to be read before the mark position gets
 invalidated.

 This method simply performs `in.mark(readlimit)`.

**参数**

- **readlimit** — {@inheritDoc}

**参见**

- java.io.FilterInputStream#in
- java.io.FilterInputStream#reset()
