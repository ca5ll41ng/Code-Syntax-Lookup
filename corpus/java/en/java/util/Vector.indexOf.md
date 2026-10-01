---
id: "java-en-function-vector-indexof"
language: "java"
lang: "en"
category: "function"
name: "Vector.indexOf"
signature: "public int indexOf(Object o)"
title: "Vector.indexOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.indexOf

```java
public int indexOf(Object o)
```

Returns the index of the first occurrence of the specified element
 in this vector, or -1 if this vector does not contain the element.
 More formally, returns the lowest index `i` such that
 `Objects.equals(o, get(i))`,
 or -1 if there is no such index.

**参数**

- **o** — element to search for

**返回**

- the index of the first occurrence of the specified element in this vector, or -1 if this vector does not contain the element
