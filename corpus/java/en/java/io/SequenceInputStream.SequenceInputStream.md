---
id: "java-en-function-sequenceinputstream-sequenceinputstream"
language: "java"
lang: "en"
category: "function"
name: "SequenceInputStream.SequenceInputStream"
signature: "public SequenceInputStream(Enumeration<? extends InputStream> e)"
title: "SequenceInputStream.SequenceInputStream"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/SequenceInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequenceInputStream.SequenceInputStream

```java
public SequenceInputStream(Enumeration<? extends InputStream> e)
```

Initializes a newly created `SequenceInputStream`
 by remembering the argument, which must
 be an `Enumeration`  that produces
 objects whose run-time type is `InputStream`.
 The input streams that are  produced by
 the enumeration will be read, in order,
 to provide the bytes to be read  from this
 `SequenceInputStream`. After
 each input stream from the enumeration
 is exhausted, it is closed by calling its
 `close` method.

**参数**

- **e** — an enumeration of input streams.

**参见**

- java.util.Enumeration
