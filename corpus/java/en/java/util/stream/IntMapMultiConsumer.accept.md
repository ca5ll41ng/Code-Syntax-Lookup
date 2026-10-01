---
id: "java-en-function-intmapmulticonsumer-accept"
language: "java"
lang: "en"
category: "function"
name: "IntMapMultiConsumer.accept"
signature: "void accept(int value, IntConsumer ic)"
title: "IntMapMultiConsumer.accept"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntMapMultiConsumer.accept

```java
void accept(int value, IntConsumer ic)
```

Replaces the given `value` with zero or more values by feeding the mapped
 values to the `ic` consumer.

**参数**

- **value** — the int value coming from upstream
- **ic** — an `IntConsumer` accepting the mapped values
