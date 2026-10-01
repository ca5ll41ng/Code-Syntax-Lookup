---
id: "java-en-function-list-sort"
language: "java"
lang: "en"
category: "function"
name: "List.sort"
signature: "default void sort(Comparator<? super E> c)"
title: "List.sort"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.sort

```java
default void sort(Comparator<? super E> c)
```

Sorts this list according to the order induced by the specified
 `Comparator` (optional operation).  The sort is stable:
 this method must not reorder equal elements.

 

All elements in this list must be mutually comparable using the
 specified comparator (that is, `c.compare(e1, e2)` must not throw
 a `ClassCastException` for any elements `e1` and `e2`
 in the list).

 

If the specified comparator is `null` then all elements in this
 list must implement the `Comparable` interface and the elements'
 `Comparable natural ordering` should be used.

 

This list must be modifiable, but need not be resizable.

 The default implementation obtains an array containing all elements in
 this list, sorts the array, and iterates over this list resetting each
 element from the corresponding position in the array. (This avoids the
 n2 log(n) performance that would result from attempting
 to sort a linked list in place.)

 This implementation is a stable, adaptive, iterative mergesort that
 requires far fewer than n lg(n) comparisons when the input array is
 partially sorted, while offering the performance of a traditional
 mergesort when the input array is randomly ordered.  If the input array
 is nearly sorted, the implementation requires approximately n
 comparisons.  Temporary storage requirements vary from a small constant
 for nearly sorted input arrays to n/2 object references for randomly
 ordered input arrays.

 

The implementation takes equal advantage of ascending and
 descending order in its input array, and can take advantage of
 ascending and descending order in different parts of the same
 input array.  It is well-suited to merging two or more sorted arrays:
 simply concatenate the arrays and sort the resulting array.

 

The implementation was adapted from Tim Peters's list sort for Python
 (
 TimSort).  It uses techniques from Peter McIlroy's "Optimistic
 Sorting and Information Theoretic Complexity", in Proceedings of the
 Fourth Annual ACM-SIAM Symposium on Discrete Algorithms, pp 467-474,
 January 1993.

**参数**

- **c** — the `Comparator` used to compare list elements. A `null` value indicates that the elements' `Comparable natural ordering` should be used

**异常**

- **ClassCastException** — if the list contains elements that are not mutually comparable using the specified comparator
- **UnsupportedOperationException** — if the `sort` operation is not supported by this list
- **IllegalArgumentException** — (optional) if the comparator is found to violate the `Comparator` contract

> *Since 1.8*
