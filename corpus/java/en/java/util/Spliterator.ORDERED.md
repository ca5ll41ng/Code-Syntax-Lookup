---
id: "java-en-function-spliterator-ordered"
language: "java"
lang: "en"
category: "function"
name: "Spliterator.ORDERED"
signature: "public static final int ORDERED = 0x00000010"
title: "Spliterator.ORDERED"
directive: "field"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterator.ORDERED

```java
public static final int ORDERED = 0x00000010
```

Characteristic value signifying that an encounter order is defined for
 elements. If so, this Spliterator guarantees that method
 `trySplit` splits a strict prefix of elements, that method
 `tryAdvance` steps by one element in prefix order, and that
 `forEachRemaining` performs actions in encounter order.

 

A `Collection` has an encounter order if the corresponding
 `iterator` documents an order. If so, the encounter
 order is the same as the documented order. Otherwise, a collection does
 not have an encounter order.

 any `List`. But no order is guaranteed for hash-based collections
 such as `HashSet`. Clients of a Spliterator that reports
 `ORDERED` are expected to preserve ordering constraints in
 non-commutative parallel computations.
