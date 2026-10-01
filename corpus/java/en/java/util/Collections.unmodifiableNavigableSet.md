---
id: "java-en-function-collections-unmodifiablenavigableset"
language: "java"
lang: "en"
category: "function"
name: "Collections.unmodifiableNavigableSet"
signature: "public static <T> NavigableSet<T> unmodifiableNavigableSet(NavigableSet<T> s)"
title: "Collections.unmodifiableNavigableSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.unmodifiableNavigableSet

```java
public static <T> NavigableSet<T> unmodifiableNavigableSet(NavigableSet<T> s)
```

Returns an unmodifiable view of the
 specified navigable set. Query operations on the returned navigable set "read
 through" to the specified navigable set.  Attempts to modify the returned
 navigable set, whether direct, via its iterator, or via its
 `subSet`, `headSet`, or `tailSet` views, result in
 an `UnsupportedOperationException`.

 The returned navigable set will be serializable if the specified
 navigable set is serializable.

**参数**

- **the** — class of the objects in the set
- **s** — the navigable set for which an unmodifiable view is to be returned

**返回**

- an unmodifiable view of the specified navigable set

> *Since 1.8*
