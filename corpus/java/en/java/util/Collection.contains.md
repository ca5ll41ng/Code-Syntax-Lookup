---
id: "java-en-function-collection-contains"
language: "java"
lang: "en"
category: "function"
name: "Collection.contains"
signature: "boolean contains(Object o)"
title: "Collection.contains"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collection.contains

```java
boolean contains(Object o)
```

Returns `true` if this collection contains the specified element.
 More formally, returns `true` if and only if this collection
 contains at least one element `e` such that
 `Objects.equals(o, e)`.

**参数**

- **o** — element whose presence in this collection is to be tested

**返回**

- `true` if this collection contains the specified element

**异常**

- **ClassCastException** — if the type of the specified element is incompatible with this collection (`#optional-restrictions optional`)
- **NullPointerException** — if the specified element is null and this collection does not permit null elements (`#optional-restrictions optional`)
