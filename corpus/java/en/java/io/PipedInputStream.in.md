---
id: "java-en-function-pipedinputstream-in"
language: "java"
lang: "en"
category: "function"
name: "PipedInputStream.in"
signature: "protected int in = -1"
title: "PipedInputStream.in"
directive: "field"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedInputStream.in

```java
protected int in = -1
```

The index of the position in the circular buffer at which the
 next byte of data will be stored when received from the connected
 piped output stream. `in < 0` implies the buffer is empty,
 `in == out` implies the buffer is full

> *Since 1.1*
