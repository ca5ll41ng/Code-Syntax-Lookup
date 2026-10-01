---
id: "java-en-function-sliceops-makeref"
language: "java"
lang: "en"
category: "function"
name: "SliceOps.makeRef"
signature: "public static <T> Stream<T> makeRef(AbstractPipeline<?, T, ?> upstream, long skip, long limit)"
title: "SliceOps.makeRef"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/SliceOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SliceOps.makeRef

```java
public static <T> Stream<T> makeRef(AbstractPipeline<?, T, ?> upstream, long skip, long limit)
```

Appends a "slice" operation to the provided stream.  The slice operation
 may be may be skip-only, limit-only, or skip-and-limit.

**参数**

- **the** — type of both input and output elements
- **upstream** — a reference stream with element type T
- **skip** — the number of elements to skip.  Must be >= 0.
- **limit** — the maximum size of the resulting stream, or -1 if no limit is to be imposed
