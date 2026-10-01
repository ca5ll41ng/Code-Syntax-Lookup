---
id: "java-en-function-collection-containsall"
language: "java"
lang: "en"
category: "function"
name: "Collection.containsAll"
signature: "boolean containsAll(Collection<?> c)"
title: "Collection.containsAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collection.containsAll

```java
boolean containsAll(Collection<?> c)
```

Returns `true` if this collection contains all of the elements
 in the specified collection.

**参数**

- **c** — collection to be checked for containment in this collection

**返回**

- `true` if this collection contains all of the elements in the specified collection

**异常**

- **ClassCastException** — if the types of one or more elements in the specified collection are incompatible with this collection (`#optional-restrictions optional`)
- **NullPointerException** — if the specified collection contains one or more null elements and this collection does not permit null elements (`#optional-restrictions optional`) or if the specified collection is null.

**参见**

- #contains(Object)
