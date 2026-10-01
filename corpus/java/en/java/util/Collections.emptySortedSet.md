---
id: "java-en-function-collections-emptysortedset"
language: "java"
lang: "en"
category: "function"
name: "Collections.emptySortedSet"
signature: "public static <E> SortedSet<E> emptySortedSet()"
title: "Collections.emptySortedSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.emptySortedSet

```java
public static <E> SortedSet<E> emptySortedSet()
```

Returns an empty sorted set (immutable).  This set is serializable.

 

This example illustrates the type-safe way to obtain an empty
 sorted set:
 
```
 `SortedSet s = Collections.emptySortedSet();
 `
```

 `SortedSet` object for each call.

**参数**

- **type** — of elements, if there were any, in the set

**返回**

- the empty sorted set

> *Since 1.8*
