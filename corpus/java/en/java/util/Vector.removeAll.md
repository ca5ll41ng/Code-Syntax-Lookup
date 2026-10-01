---
id: "java-en-function-vector-removeall"
language: "java"
lang: "en"
category: "function"
name: "Vector.removeAll"
signature: "public boolean removeAll(Collection<?> c)"
title: "Vector.removeAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.removeAll

```java
public boolean removeAll(Collection<?> c)
```

Removes from this Vector all of its elements that are contained in the
 specified Collection.

**参数**

- **c** — a collection of elements to be removed from the Vector

**返回**

- true if this Vector changed as a result of the call

**异常**

- **ClassCastException** — if the types of one or more elements in this vector are incompatible with the specified collection (optional)
- **NullPointerException** — if this vector contains one or more null elements and the specified collection does not support null elements (optional), or if the specified collection is null

> *Since 1.2*
