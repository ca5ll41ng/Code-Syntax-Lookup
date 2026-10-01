---
id: "java-en-function-collections-min"
language: "java"
lang: "en"
category: "function"
name: "Collections.min"
signature: "public static <T> T min(Collection<? extends T> coll, Comparator<? super T> comp)"
title: "Collections.min"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.min

```java
public static <T> T min(Collection<? extends T> coll, Comparator<? super T> comp)
```

Returns the minimum element of the given collection, according to the
 order induced by the specified comparator.  All elements in the
 collection must be mutually comparable by the specified
 comparator (that is, `comp.compare(e1, e2)` must not throw a
 `ClassCastException` for any elements `e1` and
 `e2` in the collection).

 This method iterates over the entire collection, hence it requires
 time proportional to the size of the collection.

**参数**

- **the** — class of the objects in the collection
- **coll** — the collection whose minimum element is to be determined.
- **comp** — the comparator with which to determine the minimum element. A `null` value indicates that the elements' natural ordering should be used.

**返回**

- the minimum element of the given collection, according to the specified comparator.

**异常**

- **ClassCastException** — if the collection contains elements that are not mutually comparable using the specified comparator.
- **NoSuchElementException** — if the collection is empty.

**参见**

- Comparable
