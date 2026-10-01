---
id: "java-en-function-collection-removeif"
language: "java"
lang: "en"
category: "function"
name: "Collection.removeIf"
signature: "default boolean removeIf(Predicate<? super E> filter)"
title: "Collection.removeIf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collection.removeIf

```java
default boolean removeIf(Predicate<? super E> filter)
```

Removes all of the elements of this collection that satisfy the given
 predicate (optional operation).  Errors or runtime exceptions thrown during
 iteration or by the predicate are relayed to the caller.

 The default implementation traverses all elements of the collection using
 its `iterator`.  Each matching element is removed using
 `remove`.  If the collection's iterator does not
 support removal then an `UnsupportedOperationException` will be
 thrown on the first matching element.

**参数**

- **filter** — a predicate which returns `true` for elements to be removed

**返回**

- `true` if any elements were removed

**异常**

- **NullPointerException** — if the specified filter is null
- **UnsupportedOperationException** — if the `removeIf` operation is not supported by this collection

> *Since 1.8*
