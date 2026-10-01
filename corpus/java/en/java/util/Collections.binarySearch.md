---
id: "java-en-function-collections-binarysearch"
language: "java"
lang: "en"
category: "function"
name: "Collections.binarySearch"
signature: "public static <T> int binarySearch(List<? extends Comparable<? super T>> list, T key)"
title: "Collections.binarySearch"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.binarySearch

```java
public static <T> int binarySearch(List<? extends Comparable<? super T>> list, T key)
```

Searches the specified list for the specified object using the binary
 search algorithm.  The list must be sorted into ascending order
 according to the `Comparable natural ordering` of its
 elements (as by the `sort` method) prior to making this
 call.  If it is not sorted, the results are undefined.  If the list
 contains multiple elements equal to the specified object, there is no
 guarantee which one will be found.

 

This method runs in log(n) time for a "random access" list (which
 provides near-constant-time positional access).  If the specified list
 does not implement the `RandomAccess` interface and is large,
 this method will do an iterator-based binary search that performs
 O(n) link traversals and O(log n) element comparisons.

**参数**

- **the** — class of the objects in the list
- **list** — the list to be searched.
- **key** — the key to be searched for.

**返回**

- the index of the search key, if it is contained in the list; otherwise, (-(insertion point) - 1).  The insertion point is defined as the point at which the key would be inserted into the list: the index of the first element greater than the key, or `list.size()` if all elements in the list are less than the specified key.  Note that this guarantees that the return value will be &gt;= 0 if and only if the key is found.

**异常**

- **ClassCastException** — if the list contains elements that are not mutually comparable (for example, strings and integers), or the search key is not mutually comparable with the elements of the list.
