---
id: "java-en-function-spliterator-sorted"
language: "java"
lang: "en"
category: "function"
name: "Spliterator.SORTED"
signature: "public static final int SORTED = 0x00000004"
title: "Spliterator.SORTED"
directive: "field"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterator.SORTED

```java
public static final int SORTED = 0x00000004
```

Characteristic value signifying that encounter order follows a defined
 sort order. If so, method `getComparator` returns the associated
 Comparator, or `null` if all elements are `Comparable` and
 are sorted by their natural ordering.

 

A Spliterator that reports `SORTED` must also report
 `ORDERED`.

 implement `NavigableSet` or `SortedSet` report `SORTED`.
