---
id: "java-en-function-spliterators-emptyintspliterator"
language: "java"
lang: "en"
category: "function"
name: "Spliterators.emptyIntSpliterator"
signature: "public static Spliterator.OfInt emptyIntSpliterator()"
title: "Spliterators.emptyIntSpliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterators.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterators.emptyIntSpliterator

```java
public static Spliterator.OfInt emptyIntSpliterator()
```

Creates an empty `Spliterator.OfInt`

 

The empty spliterator reports `SIZED` and
 `SUBSIZED`.  Calls to
 `trySplit` always return `null`.

**返回**

- An empty spliterator
