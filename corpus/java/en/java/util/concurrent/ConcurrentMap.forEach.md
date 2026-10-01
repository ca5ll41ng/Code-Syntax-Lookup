---
id: "java-en-function-concurrentmap-foreach"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentMap.forEach"
signature: "default void forEach(BiConsumer<? super K, ? super V> action)"
title: "ConcurrentMap.forEach"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentMap.forEach

```java
default void forEach(BiConsumer<? super K, ? super V> action)
```

{@inheritDoc}

 `map`:
 
```
 `for (Map.Entry entry : map.entrySet()) {
   action.accept(entry.getKey(), entry.getValue());
 `}
```

 `IllegalStateException` thrown by `getKey()` or
 `getValue()` indicates that the entry has been removed and cannot
 be processed. Operation continues for subsequent entries.

**异常**

- **NullPointerException** — {@inheritDoc}

> *Since 1.8*
