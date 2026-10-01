---
id: "java-en-function-navigableset-reversed"
language: "java"
lang: "en"
category: "function"
name: "NavigableSet.reversed"
signature: "default NavigableSet<E> reversed()"
title: "NavigableSet.reversed"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableSet.reversed

```java
default NavigableSet<E> reversed()
```

{@inheritDoc}
 

 This method is equivalent to `descendingSet descendingSet`.

 The implementation in this interface returns the result of calling the
 `descendingSet` method.

**返回**

- a reverse-ordered view of this collection, as a `NavigableSet`

> *Since 21*
