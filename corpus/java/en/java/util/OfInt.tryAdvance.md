---
id: "java-en-function-ofint-tryadvance"
language: "java"
lang: "en"
category: "function"
name: "OfInt.tryAdvance"
signature: "default boolean tryAdvance(Consumer<? super Integer> action)"
title: "OfInt.tryAdvance"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfInt.tryAdvance

```java
default boolean tryAdvance(Consumer<? super Integer> action)
```

{@inheritDoc}
 If the action is an instance of `IntConsumer` then it is cast
 to `IntConsumer` and passed to
 `tryAdvance`; otherwise
 the action is adapted to an instance of `IntConsumer`, by
 boxing the argument of `IntConsumer`, and then passed to
 `tryAdvance`.
