---
id: "java-en-function-navigablemap-reversed"
language: "java"
lang: "en"
category: "function"
name: "NavigableMap.reversed"
signature: "default NavigableMap<K, V> reversed()"
title: "NavigableMap.reversed"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableMap.reversed

```java
default NavigableMap<K, V> reversed()
```

{@inheritDoc}
 

 This method is equivalent to `descendingMap descendingMap`.

 The implementation in this interface returns the result of calling the
 `descendingMap` method.

**返回**

- a reverse-ordered view of this map, as a `NavigableMap`

> *Since 21*
