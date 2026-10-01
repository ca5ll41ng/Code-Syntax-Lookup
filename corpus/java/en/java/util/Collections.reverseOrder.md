---
id: "java-en-function-collections-reverseorder"
language: "java"
lang: "en"
category: "function"
name: "Collections.reverseOrder"
signature: "public static <T> Comparator<T> reverseOrder()"
title: "Collections.reverseOrder"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.reverseOrder

```java
public static <T> Comparator<T> reverseOrder()
```

Returns a comparator that imposes the reverse of the natural
 ordering on a collection of objects that implement the
 `Comparable` interface.  (The natural ordering is the ordering
 imposed by the objects' own `compareTo` method.)  This enables a
 simple idiom for sorting (or maintaining) collections (or arrays) of
 objects that implement the `Comparable` interface in
 reverse-natural-order.  For example, suppose `a` is an array of
 strings. Then: 
```

          Arrays.sort(a, Collections.reverseOrder());
 
```
 sorts the array in reverse-lexicographic (alphabetical) order.

 The returned comparator is serializable.

 This method returns a `Comparator` that is suitable for sorting
 elements in reverse order. To obtain a reverse-ordered view of a
 sequenced collection, use the `reversed
 SequencedCollection.reversed` method. Or, to obtain a reverse-ordered
 view of a sequenced map, use the `reversed
 SequencedMap.reversed` method.

**参数**

- **the** — class of the objects compared by the comparator

**返回**

- A comparator that imposes the reverse of the natural ordering on a collection of objects that implement the `Comparable` interface.

**参见**

- Comparable
