---
id: "java-en-function-sliceops-makelong"
language: "java"
lang: "en"
category: "function"
name: "SliceOps.makeLong"
signature: "public static LongStream makeLong(AbstractPipeline<?, Long, ?> upstream, long skip, long limit)"
title: "SliceOps.makeLong"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/SliceOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SliceOps.makeLong

```java
public static LongStream makeLong(AbstractPipeline<?, Long, ?> upstream, long skip, long limit)
```

Appends a "slice" operation to the provided LongStream.  The slice
 operation may be may be skip-only, limit-only, or skip-and-limit.

**参数**

- **upstream** — A LongStream
- **skip** — The number of elements to skip.  Must be >= 0.
- **limit** — The maximum size of the resulting stream, or -1 if no limit is to be imposed
