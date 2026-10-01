---
id: "java-en-function-collections-sort"
language: "java"
lang: "en"
category: "function"
name: "Collections.sort"
signature: "public static <T extends Comparable<? super T>> void sort(List<T> list)"
title: "Collections.sort"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.sort

```java
public static <T extends Comparable<? super T>> void sort(List<T> list)
```

Sorts the specified list into ascending order, according to the
 `Comparable natural ordering` of its elements.
 All elements in the list must implement the `Comparable`
 interface.  Furthermore, all elements in the list must be
 mutually comparable (that is, `e1.compareTo(e2)`
 must not throw a `ClassCastException` for any elements
 `e1` and `e2` in the list).

 

This sort is guaranteed to be stable:  equal elements will
 not be reordered as a result of the sort.

 

The specified list must be modifiable, but need not be resizable.

 This implementation defers to the `sort`
 method using the specified list and a `null` comparator.

**参数**

- **the** — class of the objects in the list
- **list** — the list to be sorted.

**异常**

- **ClassCastException** — if the list contains elements that are not mutually comparable (for example, strings and integers).
- **UnsupportedOperationException** — if the specified list's list-iterator does not support the `set` operation.
- **IllegalArgumentException** — (optional) if the implementation detects that the natural ordering of the list elements is found to violate the `Comparable` contract

**参见**

- List#sort(Comparator)
