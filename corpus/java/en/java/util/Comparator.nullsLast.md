---
id: "java-en-function-comparator-nullslast"
language: "java"
lang: "en"
category: "function"
name: "Comparator.nullsLast"
signature: "public static <T> Comparator<T> nullsLast(Comparator<? super T> comparator)"
title: "Comparator.nullsLast"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Comparator.nullsLast

```java
public static <T> Comparator<T> nullsLast(Comparator<? super T> comparator)
```

Returns a null-friendly comparator that considers `null` to be
 greater than non-null. When both are `null`, they are considered
 equal. If both are non-null, the specified `Comparator` is used
 to determine the order. If the specified comparator is `null`,
 then the returned comparator considers all non-null values to be equal.

 

The returned comparator is serializable if the specified comparator
 is serializable.

**参数**

- **the** — type of the elements to be compared
- **comparator** — a `Comparator` for comparing non-null values

**返回**

- a comparator that considers `null` to be greater than non-null, and compares non-null objects with the supplied `Comparator`.

> *Since 1.8*
