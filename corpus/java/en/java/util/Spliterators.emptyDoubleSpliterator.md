---
id: "java-en-function-spliterators-emptydoublespliterator"
language: "java"
lang: "en"
category: "function"
name: "Spliterators.emptyDoubleSpliterator"
signature: "public static Spliterator.OfDouble emptyDoubleSpliterator()"
title: "Spliterators.emptyDoubleSpliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterators.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterators.emptyDoubleSpliterator

```java
public static Spliterator.OfDouble emptyDoubleSpliterator()
```

Creates an empty `Spliterator.OfDouble`

 

The empty spliterator reports `SIZED` and
 `SUBSIZED`.  Calls to
 `trySplit` always return `null`.

**返回**

- An empty spliterator
