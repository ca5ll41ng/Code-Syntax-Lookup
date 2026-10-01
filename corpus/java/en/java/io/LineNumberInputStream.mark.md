---
id: "java-en-function-linenumberinputstream-mark"
language: "java"
lang: "en"
category: "function"
name: "LineNumberInputStream.mark"
signature: "public void mark(int readlimit)"
title: "LineNumberInputStream.mark"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/LineNumberInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumberInputStream.mark

```java
public void mark(int readlimit)
```

Marks the current position in this input stream. A subsequent
 call to the `reset` method repositions this stream at
 the last marked position so that subsequent reads re-read the same bytes.
 

 The `mark` method of
 `LineNumberInputStream` remembers the current line
 number in a private variable, and then calls the `mark`
 method of the underlying input stream.

**参数**

- **readlimit** — the maximum limit of bytes that can be read before the mark position becomes invalid.

**参见**

- java.io.FilterInputStream#in
- java.io.LineNumberInputStream#reset()
