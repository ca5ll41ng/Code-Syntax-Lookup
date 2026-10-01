---
id: "java-en-function-basestream-parallel"
language: "java"
lang: "en"
category: "function"
name: "BaseStream.parallel"
signature: "S parallel()"
title: "BaseStream.parallel"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/BaseStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BaseStream.parallel

```java
S parallel()
```

Returns an equivalent stream that is parallel.  May return
 itself, either because the stream was already parallel, or because
 the underlying stream state was modified to be parallel.

 

This is an intermediate
 operation.

**返回**

- a parallel stream
