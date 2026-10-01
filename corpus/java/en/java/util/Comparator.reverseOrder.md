---
id: "java-en-function-comparator-reverseorder"
language: "java"
lang: "en"
category: "function"
name: "Comparator.reverseOrder"
signature: "public static <T extends Comparable<? super T>> Comparator<T> reverseOrder()"
title: "Comparator.reverseOrder"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Comparator.reverseOrder

```java
public static <T extends Comparable<? super T>> Comparator<T> reverseOrder()
```

Returns a comparator that imposes the reverse of the natural
 ordering.

 

The returned comparator is serializable and throws `NullPointerException` when comparing `null`.

**参数**

- **the** — `Comparable` type of element to be compared

**返回**

- a comparator that imposes the reverse of the natural ordering on `Comparable` objects.

**参见**

- Comparable

> *Since 1.8*
