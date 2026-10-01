---
id: "java-en-function-spliterators-spliterator"
language: "java"
lang: "en"
category: "function"
name: "Spliterators.spliterator"
signature: "public static <T> Spliterator<T> spliterator(Object[] array, int additionalCharacteristics)"
title: "Spliterators.spliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterators.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterators.spliterator

```java
public static <T> Spliterator<T> spliterator(Object[] array, int additionalCharacteristics)
```

Creates a `Spliterator` covering the elements of a given array,
 using a customized set of spliterator characteristics.

 

This method is provided as an implementation convenience for
 Spliterators which store portions of their elements in arrays, and need
 fine control over Spliterator characteristics.  Most other situations in
 which a Spliterator for an array is needed should use
 `spliterator`.

 

The returned spliterator always reports the characteristics
 `SIZED` and `SUBSIZED`.  The caller may provide additional
 characteristics for the spliterator to report; it is common to
 additionally specify `IMMUTABLE` and `ORDERED`.

**参数**

- **Type** — of elements
- **array** — The array, assumed to be unmodified during use
- **additionalCharacteristics** — Additional spliterator characteristics of this spliterator's source or elements beyond `SIZED` and `SUBSIZED` which are always reported

**返回**

- A spliterator for an array

**异常**

- **NullPointerException** — if the given array is `null`

**参见**

- Arrays#spliterator(Object[])
