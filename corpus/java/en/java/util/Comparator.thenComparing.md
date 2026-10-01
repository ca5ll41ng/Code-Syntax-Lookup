---
id: "java-en-function-comparator-thencomparing"
language: "java"
lang: "en"
category: "function"
name: "Comparator.thenComparing"
signature: "default Comparator<T> thenComparing(Comparator<? super T> other)"
title: "Comparator.thenComparing"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Comparator.thenComparing

```java
default Comparator<T> thenComparing(Comparator<? super T> other)
```

Returns a lexicographic-order comparator with another comparator.
 If this `Comparator` considers two elements equal, i.e.
 `compare(a, b) == 0`, `other` is used to determine the order.

 

The returned comparator is serializable if the specified comparator
 is also serializable.

 For example, to sort a collection of `String` based on the length
 and then case-insensitive natural ordering, the comparator can be
 composed using following code,

 
```
`Comparator cmp = Comparator.comparingInt(String::length)
             .thenComparing(String.CASE_INSENSITIVE_ORDER);
 `
```

**参数**

- **other** — the other comparator to be used when this comparator compares two objects that are equal.

**返回**

- a lexicographic-order comparator composed of this and then the other comparator

**异常**

- **NullPointerException** — if the argument is null.

> *Since 1.8*
