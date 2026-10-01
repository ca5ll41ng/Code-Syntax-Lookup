---
id: "java-en-function-vector-retainall"
language: "java"
lang: "en"
category: "function"
name: "Vector.retainAll"
signature: "public boolean retainAll(Collection<?> c)"
title: "Vector.retainAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.retainAll

```java
public boolean retainAll(Collection<?> c)
```

Retains only the elements in this Vector that are contained in the
 specified Collection.  In other words, removes from this Vector all
 of its elements that are not contained in the specified Collection.

**参数**

- **c** — a collection of elements to be retained in this Vector (all other elements are removed)

**返回**

- true if this Vector changed as a result of the call

**异常**

- **ClassCastException** — if the types of one or more elements in this vector are incompatible with the specified collection (optional)
- **NullPointerException** — if this vector contains one or more null elements and the specified collection does not support null elements (optional), or if the specified collection is null

> *Since 1.2*
