---
id: "java-en-function-ofint-foreach"
language: "java"
lang: "en"
category: "function"
name: "OfInt.forEach"
signature: "default void forEach(Consumer<? super Integer> consumer)"
title: "OfInt.forEach"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfInt.forEach

```java
default void forEach(Consumer<? super Integer> consumer)
```

{@inheritDoc}

**参数**

- **consumer** — a `Consumer` that is to be invoked with each element in this `Node`.  If this is an `IntConsumer`, it is cast to `IntConsumer` so the elements may be processed without boxing.
