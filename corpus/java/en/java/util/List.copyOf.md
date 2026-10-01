---
id: "java-en-function-list-copyof"
language: "java"
lang: "en"
category: "function"
name: "List.copyOf"
signature: "static <E> List<E> copyOf(Collection<? extends E> coll)"
title: "List.copyOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.copyOf

```java
static <E> List<E> copyOf(Collection<? extends E> coll)
```

Returns an unmodifiable List containing the elements of
 the given Collection, in its iteration order. The given Collection must not be null,
 and it must not contain any null elements. If the given Collection is subsequently
 modified, the returned List will not reflect such modifications.

 If the given Collection is an unmodifiable List,
 calling copyOf will generally not create a copy.

**参数**

- **the** — `List`'s element type
- **coll** — a `Collection` from which elements are drawn, must be non-null

**返回**

- a `List` containing the elements of the given `Collection`

**异常**

- **NullPointerException** — if coll is null, or if it contains any nulls

> *Since 10*
