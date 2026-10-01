---
id: "java-en-function-longmapmulticonsumer-accept"
language: "java"
lang: "en"
category: "function"
name: "LongMapMultiConsumer.accept"
signature: "void accept(long value, LongConsumer lc)"
title: "LongMapMultiConsumer.accept"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/LongStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongMapMultiConsumer.accept

```java
void accept(long value, LongConsumer lc)
```

Replaces the given `value` with zero or more values by feeding the mapped
 values to the `lc` consumer.

**参数**

- **value** — the long value coming from upstream
- **lc** — a `LongConsumer` accepting the mapped values
