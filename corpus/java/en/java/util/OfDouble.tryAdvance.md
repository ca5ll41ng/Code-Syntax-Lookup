---
id: "java-en-function-ofdouble-tryadvance"
language: "java"
lang: "en"
category: "function"
name: "OfDouble.tryAdvance"
signature: "default boolean tryAdvance(Consumer<? super Double> action)"
title: "OfDouble.tryAdvance"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfDouble.tryAdvance

```java
default boolean tryAdvance(Consumer<? super Double> action)
```

{@inheritDoc}
 If the action is an instance of `DoubleConsumer` then it is
 cast to `DoubleConsumer` and passed to
 `tryAdvance`; otherwise
 the action is adapted to an instance of `DoubleConsumer`, by
 boxing the argument of `DoubleConsumer`, and then passed to
 `tryAdvance`.
