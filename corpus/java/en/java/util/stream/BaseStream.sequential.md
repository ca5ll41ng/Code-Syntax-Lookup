---
id: "java-en-function-basestream-sequential"
language: "java"
lang: "en"
category: "function"
name: "BaseStream.sequential"
signature: "S sequential()"
title: "BaseStream.sequential"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/BaseStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BaseStream.sequential

```java
S sequential()
```

Returns an equivalent stream that is sequential.  May return
 itself, either because the stream was already sequential, or because
 the underlying stream state was modified to be sequential.

 

This is an intermediate
 operation.

**返回**

- a sequential stream
