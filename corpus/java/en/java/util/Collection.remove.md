---
id: "java-en-function-collection-remove"
language: "java"
lang: "en"
category: "function"
name: "Collection.remove"
signature: "boolean remove(Object o)"
title: "Collection.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collection.remove

```java
boolean remove(Object o)
```

Removes a single instance of the specified element from this
 collection, if it is present (optional operation).  More formally,
 removes an element `e` such that
 `Objects.equals(o, e)`, if
 this collection contains one or more such elements.  Returns
 `true` if this collection contained the specified element (or
 equivalently, if this collection changed as a result of the call).

**参数**

- **o** — element to be removed from this collection, if present

**返回**

- `true` if an element was removed as a result of this call

**异常**

- **ClassCastException** — if the type of the specified element is incompatible with this collection (`#optional-restrictions optional`)
- **NullPointerException** — if the specified element is null and this collection does not permit null elements (`#optional-restrictions optional`)
- **UnsupportedOperationException** — if the `remove` operation is not supported by this collection
