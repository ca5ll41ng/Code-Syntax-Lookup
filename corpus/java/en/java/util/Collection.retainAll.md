---
id: "java-en-function-collection-retainall"
language: "java"
lang: "en"
category: "function"
name: "Collection.retainAll"
signature: "boolean retainAll(Collection<?> c)"
title: "Collection.retainAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collection.retainAll

```java
boolean retainAll(Collection<?> c)
```

Retains only the elements in this collection that are contained in the
 specified collection (optional operation).  In other words, removes from
 this collection all of its elements that are not contained in the
 specified collection.

**参数**

- **c** — collection containing elements to be retained in this collection

**返回**

- `true` if this collection changed as a result of the call

**异常**

- **UnsupportedOperationException** — if the `retainAll` operation is not supported by this collection
- **ClassCastException** — if the types of one or more elements in this collection are incompatible with the specified collection (`#optional-restrictions optional`)
- **NullPointerException** — if this collection contains one or more null elements and the specified collection does not permit null elements (`#optional-restrictions optional`) or if the specified collection is null

**参见**

- #remove(Object)
- #contains(Object)
