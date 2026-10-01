---
id: "java-en-function-collection-addall"
language: "java"
lang: "en"
category: "function"
name: "Collection.addAll"
signature: "boolean addAll(Collection<? extends E> c)"
title: "Collection.addAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collection.addAll

```java
boolean addAll(Collection<? extends E> c)
```

Adds all of the elements in the specified collection to this collection
 (optional operation).  The behavior of this operation is undefined if
 the specified collection is modified while the operation is in progress.
 (This implies that the behavior of this call is undefined if the
 specified collection is this collection, and this collection is
 nonempty.) If the specified collection has a defined
 encounter order,
 processing of its elements generally occurs in that order.

**参数**

- **c** — collection containing elements to be added to this collection

**返回**

- `true` if this collection changed as a result of the call

**异常**

- **UnsupportedOperationException** — if the `addAll` operation is not supported by this collection
- **ClassCastException** — if the class of an element of the specified collection prevents it from being added to this collection
- **NullPointerException** — if the specified collection contains a null element and this collection does not permit null elements, or if the specified collection is null
- **IllegalArgumentException** — if some property of an element of the specified collection prevents it from being added to this collection
- **IllegalStateException** — if not all the elements can be added at this time due to insertion restrictions

**参见**

- #add(Object)
