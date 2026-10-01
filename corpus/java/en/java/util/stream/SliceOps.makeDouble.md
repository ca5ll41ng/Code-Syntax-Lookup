---
id: "java-en-function-sliceops-makedouble"
language: "java"
lang: "en"
category: "function"
name: "SliceOps.makeDouble"
signature: "public static DoubleStream makeDouble(AbstractPipeline<?, Double, ?> upstream, long skip, long limit)"
title: "SliceOps.makeDouble"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/SliceOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SliceOps.makeDouble

```java
public static DoubleStream makeDouble(AbstractPipeline<?, Double, ?> upstream, long skip, long limit)
```

Appends a "slice" operation to the provided DoubleStream.  The slice
 operation may be may be skip-only, limit-only, or skip-and-limit.

**参数**

- **upstream** — A DoubleStream
- **skip** — The number of elements to skip.  Must be >= 0.
- **limit** — The maximum size of the resulting stream, or -1 if no limit is to be imposed
