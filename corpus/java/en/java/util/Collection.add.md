---
id: "java-en-function-collection-add"
language: "java"
lang: "en"
category: "function"
name: "Collection.add"
signature: "boolean add(E e)"
title: "Collection.add"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collection.add

```java
boolean add(E e)
```

Ensures that this collection contains the specified element (optional
 operation).  Returns `true` if this collection changed as a
 result of the call.  (Returns `false` if this collection does
 not permit duplicates and already contains the specified element.)

 Collections that support this operation may place limitations on what
 elements may be added to this collection.  In particular, some
 collections will refuse to add `null` elements, and others will
 impose restrictions on the type of elements that may be added.
 Collection classes should clearly specify in their documentation any
 restrictions on what elements may be added.

 If a collection refuses to add a particular element for any reason
 other than that it already contains the element, it must throw
 an exception (rather than returning `false`).  This preserves
 the invariant that a collection always contains the specified element
 after this call returns.

**参数**

- **e** — element whose presence in this collection is to be ensured

**返回**

- `true` if this collection changed as a result of the call

**异常**

- **UnsupportedOperationException** — if the `add` operation is not supported by this collection
- **ClassCastException** — if the class of the specified element prevents it from being added to this collection
- **NullPointerException** — if the specified element is null and this collection does not permit null elements
- **IllegalArgumentException** — if some property of the element prevents it from being added to this collection
- **IllegalStateException** — if the element cannot be added at this time due to insertion restrictions
