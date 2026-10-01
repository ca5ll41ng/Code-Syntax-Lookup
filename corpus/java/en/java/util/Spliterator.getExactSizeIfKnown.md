---
id: "java-en-function-spliterator-getexactsizeifknown"
language: "java"
lang: "en"
category: "function"
name: "Spliterator.getExactSizeIfKnown"
signature: "default long getExactSizeIfKnown()"
title: "Spliterator.getExactSizeIfKnown"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterator.getExactSizeIfKnown

```java
default long getExactSizeIfKnown()
```

Convenience method that returns `estimateSize` if this
 Spliterator is `SIZED`, else `-1`.
 The default implementation returns the result of `estimateSize()`
 if the Spliterator reports a characteristic of `SIZED`, and
 `-1` otherwise.

**返回**

- the exact size, if known, else `-1`.
