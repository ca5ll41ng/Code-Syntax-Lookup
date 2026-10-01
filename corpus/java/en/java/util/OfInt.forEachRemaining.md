---
id: "java-en-function-ofint-foreachremaining"
language: "java"
lang: "en"
category: "function"
name: "OfInt.forEachRemaining"
signature: "default void forEachRemaining(IntConsumer action)"
title: "OfInt.forEachRemaining"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PrimitiveIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfInt.forEachRemaining

```java
default void forEachRemaining(IntConsumer action)
```

{@inheritDoc}
 

The default implementation behaves as if:
 
```
`while (hasNext())
         action.accept(nextInt());
 `
```
