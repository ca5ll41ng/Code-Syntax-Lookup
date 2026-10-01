---
id: "java-en-function-spliterators-emptylongspliterator"
language: "java"
lang: "en"
category: "function"
name: "Spliterators.emptyLongSpliterator"
signature: "public static Spliterator.OfLong emptyLongSpliterator()"
title: "Spliterators.emptyLongSpliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterators.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterators.emptyLongSpliterator

```java
public static Spliterator.OfLong emptyLongSpliterator()
```

Creates an empty `Spliterator.OfLong`

 

The empty spliterator reports `SIZED` and
 `SUBSIZED`.  Calls to
 `trySplit` always return `null`.

**返回**

- An empty spliterator
