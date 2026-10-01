---
id: "java-en-function-spliterator-sized"
language: "java"
lang: "en"
category: "function"
name: "Spliterator.SIZED"
signature: "public static final int SIZED = 0x00000040"
title: "Spliterator.SIZED"
directive: "field"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterator.SIZED

```java
public static final int SIZED = 0x00000040
```

Characteristic value signifying that the value returned from
 `estimateSize()` prior to traversal or splitting represents a
 finite size that, in the absence of structural source modification,
 represents an exact count of the number of elements that would be
 encountered by a complete traversal.

 `Collection` report this characteristic. Sub-spliterators, such as
 those for `HashSet`, that cover a sub-set of elements and
 approximate their reported size do not.
