---
id: "java-en-function-inputstream-mark"
language: "java"
lang: "en"
category: "function"
name: "InputStream.mark"
signature: "public void mark(int readlimit)"
title: "InputStream.mark"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputStream.mark

```java
public void mark(int readlimit)
```

Marks the current position in this input stream. A subsequent call to
 the `reset` method repositions this stream at the last marked
 position so that subsequent reads re-read the same bytes.

 

 The `readlimit` arguments tells this input stream to
 allow that many bytes to be read before the mark position gets
 invalidated.

 

 The general contract of `mark` is that, if the method
 `markSupported` returns `true`, the stream somehow
 remembers all the bytes read after the call to `mark` and
 stands ready to supply those same bytes again if and whenever the method
 `reset` is called.  However, the stream is not required to
 remember any data at all if more than `readlimit` bytes are
 read from the stream before `reset` is called.

 

 Marking a closed stream should not have any effect on the stream.

 The `mark` method of `InputStream` does nothing.

**参数**

- **readlimit** — the maximum limit of bytes that can be read before the mark position becomes invalid.

**参见**

- java.io.InputStream#reset()
