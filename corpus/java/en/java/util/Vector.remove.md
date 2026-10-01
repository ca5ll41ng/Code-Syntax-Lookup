---
id: "java-en-function-vector-remove"
language: "java"
lang: "en"
category: "function"
name: "Vector.remove"
signature: "public boolean remove(Object o)"
title: "Vector.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.remove

```java
public boolean remove(Object o)
```

Removes the first occurrence of the specified element in this Vector
 If the Vector does not contain the element, it is unchanged.  More
 formally, removes the element with the lowest index i such that
 `Objects.equals(o, get(i))` (if such
 an element exists).

**参数**

- **o** — element to be removed from this Vector, if present

**返回**

- true if the Vector contained the specified element

> *Since 1.2*
