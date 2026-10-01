---
id: "java-en-function-concurrentmap-getordefault"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentMap.getOrDefault"
signature: "default V getOrDefault(Object key, V defaultValue)"
title: "ConcurrentMap.getOrDefault"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentMap.getOrDefault

```java
default V getOrDefault(Object key, V defaultValue)
```

{@inheritDoc}

 contain null values and `get()` returning null unambiguously means
 the key is absent. Implementations which support null values
 **must** override this default implementation.

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}

> *Since 1.8*
