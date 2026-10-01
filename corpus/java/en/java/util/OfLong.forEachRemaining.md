---
id: "java-en-function-oflong-foreachremaining"
language: "java"
lang: "en"
category: "function"
name: "OfLong.forEachRemaining"
signature: "default void forEachRemaining(LongConsumer action)"
title: "OfLong.forEachRemaining"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PrimitiveIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfLong.forEachRemaining

```java
default void forEachRemaining(LongConsumer action)
```

{@inheritDoc}
 

The default implementation behaves as if:
 
```
`while (hasNext())
         action.accept(nextLong());
 `
```
