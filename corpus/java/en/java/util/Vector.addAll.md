---
id: "java-en-function-vector-addall"
language: "java"
lang: "en"
category: "function"
name: "Vector.addAll"
signature: "public boolean addAll(Collection<? extends E> c)"
title: "Vector.addAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.addAll

```java
public boolean addAll(Collection<? extends E> c)
```

Appends all of the elements in the specified Collection to the end of
 this Vector, in the order that they are returned by the specified
 Collection's Iterator.  The behavior of this operation is undefined if
 the specified Collection is modified while the operation is in progress.
 (This implies that the behavior of this call is undefined if the
 specified Collection is this Vector, and this Vector is nonempty.)

**参数**

- **c** — elements to be inserted into this Vector

**返回**

- `true` if this Vector changed as a result of the call

**异常**

- **NullPointerException** — if the specified collection is null

> *Since 1.2*
