---
id: "java-en-function-sequenceinputstream-available"
language: "java"
lang: "en"
category: "function"
name: "SequenceInputStream.available"
signature: "public int available() throws IOException"
title: "SequenceInputStream.available"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/SequenceInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequenceInputStream.available

```java
public int available() throws IOException
```

Returns an estimate of the number of bytes that can be read (or
 skipped over) from the current underlying input stream without
 blocking by the next invocation of a method for the current
 underlying input stream. The next invocation might be
 the same thread or another thread.  A single read or skip of this
 many bytes will not block, but may read or skip fewer bytes.
 

 This method simply calls `available` of the current underlying
 input stream and returns the result.

**返回**

- an estimate of the number of bytes that can be read (or skipped over) from the current underlying input stream without blocking or `0` if this input stream has been closed by invoking its `close` method

**异常**

- **IOException** — {@inheritDoc}

> *Since 1.1*
