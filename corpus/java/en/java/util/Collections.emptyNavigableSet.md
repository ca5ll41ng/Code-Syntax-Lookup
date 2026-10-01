---
id: "java-en-function-collections-emptynavigableset"
language: "java"
lang: "en"
category: "function"
name: "Collections.emptyNavigableSet"
signature: "public static <E> NavigableSet<E> emptyNavigableSet()"
title: "Collections.emptyNavigableSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.emptyNavigableSet

```java
public static <E> NavigableSet<E> emptyNavigableSet()
```

Returns an empty navigable set (immutable).  This set is serializable.

 

This example illustrates the type-safe way to obtain an empty
 navigable set:
 
```
 `NavigableSet s = Collections.emptyNavigableSet();
 `
```

 create a separate `NavigableSet` object for each call.

**参数**

- **type** — of elements, if there were any, in the set

**返回**

- the empty navigable set

> *Since 1.8*
