---
id: "java-en-function-collections-unmodifiablesortedset"
language: "java"
lang: "en"
category: "function"
name: "Collections.unmodifiableSortedSet"
signature: "public static <T> SortedSet<T> unmodifiableSortedSet(SortedSet<T> s)"
title: "Collections.unmodifiableSortedSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.unmodifiableSortedSet

```java
public static <T> SortedSet<T> unmodifiableSortedSet(SortedSet<T> s)
```

Returns an unmodifiable view of the
 specified sorted set. Query operations on the returned sorted set "read
 through" to the specified sorted set.  Attempts to modify the returned
 sorted set, whether direct, via its iterator, or via its
 `subSet`, `headSet`, or `tailSet` views, result in
 an `UnsupportedOperationException`.

 The returned sorted set will be serializable if the specified sorted set
 is serializable.

**参数**

- **the** — class of the objects in the set
- **s** — the sorted set for which an unmodifiable view is to be returned.

**返回**

- an unmodifiable view of the specified sorted set.
