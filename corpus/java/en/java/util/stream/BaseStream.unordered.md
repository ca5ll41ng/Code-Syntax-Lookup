---
id: "java-en-function-basestream-unordered"
language: "java"
lang: "en"
category: "function"
name: "BaseStream.unordered"
signature: "S unordered()"
title: "BaseStream.unordered"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/BaseStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BaseStream.unordered

```java
S unordered()
```

Returns an equivalent stream that is
 unordered.  May return
 itself, either because the stream was already unordered, or because
 the underlying stream state was modified to be unordered.

 

This is an intermediate
 operation.

**返回**

- an unordered stream
