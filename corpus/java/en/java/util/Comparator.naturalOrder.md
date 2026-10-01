---
id: "java-en-function-comparator-naturalorder"
language: "java"
lang: "en"
category: "function"
name: "Comparator.naturalOrder"
signature: "public static <T extends Comparable<? super T>> Comparator<T> naturalOrder()"
title: "Comparator.naturalOrder"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Comparator.naturalOrder

```java
public static <T extends Comparable<? super T>> Comparator<T> naturalOrder()
```

Returns a comparator that compares `Comparable` objects in natural
 order.

 

The returned comparator is serializable and throws `NullPointerException` when comparing `null`.

**参数**

- **the** — `Comparable` type of element to be compared

**返回**

- a comparator that imposes the natural ordering on `Comparable` objects.

**参见**

- Comparable

> *Since 1.8*
