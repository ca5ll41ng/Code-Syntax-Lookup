---
id: "java-en-function-ofdouble-foreachremaining"
language: "java"
lang: "en"
category: "function"
name: "OfDouble.forEachRemaining"
signature: "default void forEachRemaining(DoubleConsumer action)"
title: "OfDouble.forEachRemaining"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PrimitiveIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfDouble.forEachRemaining

```java
default void forEachRemaining(DoubleConsumer action)
```

{@inheritDoc}
 

The default implementation behaves as if:
 
```
`while (hasNext())
         action.accept(nextDouble());
 `
```
