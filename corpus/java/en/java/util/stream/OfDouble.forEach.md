---
id: "java-en-function-ofdouble-foreach"
language: "java"
lang: "en"
category: "function"
name: "OfDouble.forEach"
signature: "default void forEach(Consumer<? super Double> consumer)"
title: "OfDouble.forEach"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfDouble.forEach

```java
default void forEach(Consumer<? super Double> consumer)
```

{@inheritDoc}

**参数**

- **consumer** — A `Consumer` that is to be invoked with each element in this `Node`.  If this is an `DoubleConsumer`, it is cast to `DoubleConsumer` so the elements may be processed without boxing.
