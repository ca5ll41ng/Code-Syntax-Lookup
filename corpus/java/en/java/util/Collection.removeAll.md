---
id: "java-en-function-collection-removeall"
language: "java"
lang: "en"
category: "function"
name: "Collection.removeAll"
signature: "boolean removeAll(Collection<?> c)"
title: "Collection.removeAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collection.removeAll

```java
boolean removeAll(Collection<?> c)
```

Removes all of this collection's elements that are also contained in the
 specified collection (optional operation).  After this call returns,
 this collection will contain no elements in common with the specified
 collection.

**参数**

- **c** — collection containing elements to be removed from this collection

**返回**

- `true` if this collection changed as a result of the call

**异常**

- **UnsupportedOperationException** — if the `removeAll` operation is not supported by this collection
- **ClassCastException** — if the types of one or more elements in this collection are incompatible with the specified collection (`#optional-restrictions optional`)
- **NullPointerException** — if this collection contains one or more null elements and the specified collection does not support null elements (`#optional-restrictions optional`) or if the specified collection is null

**参见**

- #remove(Object)
- #contains(Object)
