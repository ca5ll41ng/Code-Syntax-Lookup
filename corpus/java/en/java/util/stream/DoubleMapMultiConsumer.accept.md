---
id: "java-en-function-doublemapmulticonsumer-accept"
language: "java"
lang: "en"
category: "function"
name: "DoubleMapMultiConsumer.accept"
signature: "void accept(double value, DoubleConsumer dc)"
title: "DoubleMapMultiConsumer.accept"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleMapMultiConsumer.accept

```java
void accept(double value, DoubleConsumer dc)
```

Replaces the given `value` with zero or more values by feeding the mapped
 values to the `dc` consumer.

**参数**

- **value** — the double value coming from upstream
- **dc** — a `DoubleConsumer` accepting the mapped values
