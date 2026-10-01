---
id: "java-en-function-oflong-tryadvance"
language: "java"
lang: "en"
category: "function"
name: "OfLong.tryAdvance"
signature: "default boolean tryAdvance(Consumer<? super Long> action)"
title: "OfLong.tryAdvance"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfLong.tryAdvance

```java
default boolean tryAdvance(Consumer<? super Long> action)
```

{@inheritDoc}
 If the action is an instance of `LongConsumer` then it is cast
 to `LongConsumer` and passed to
 `tryAdvance`; otherwise
 the action is adapted to an instance of `LongConsumer`, by
 boxing the argument of `LongConsumer`, and then passed to
 `tryAdvance`.
