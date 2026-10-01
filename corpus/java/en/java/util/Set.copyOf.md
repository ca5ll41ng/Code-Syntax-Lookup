---
id: "java-en-function-set-copyof"
language: "java"
lang: "en"
category: "function"
name: "Set.copyOf"
signature: "static <E> Set<E> copyOf(Collection<? extends E> coll)"
title: "Set.copyOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Set.copyOf

```java
static <E> Set<E> copyOf(Collection<? extends E> coll)
```

Returns an unmodifiable Set containing the elements
 of the given Collection. The given Collection must not be null, and it must not
 contain any null elements. If the given Collection contains duplicate elements,
 an arbitrary element of the duplicates is preserved. If the given Collection is
 subsequently modified, the returned Set will not reflect such modifications.

 If the given Collection is an unmodifiable Set,
 calling copyOf will generally not create a copy.

**参数**

- **the** — `Set`'s element type
- **coll** — a `Collection` from which elements are drawn, must be non-null

**返回**

- a `Set` containing the elements of the given `Collection`

**异常**

- **NullPointerException** — if coll is null, or if it contains any nulls

> *Since 10*
