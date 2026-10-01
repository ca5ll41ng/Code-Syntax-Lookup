---
id: "java-en-function-vector-lastindexof"
language: "java"
lang: "en"
category: "function"
name: "Vector.lastIndexOf"
signature: "public synchronized int lastIndexOf(Object o)"
title: "Vector.lastIndexOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.lastIndexOf

```java
public synchronized int lastIndexOf(Object o)
```

Returns the index of the last occurrence of the specified element
 in this vector, or -1 if this vector does not contain the element.
 More formally, returns the highest index `i` such that
 `Objects.equals(o, get(i))`,
 or -1 if there is no such index.

**参数**

- **o** — element to search for

**返回**

- the index of the last occurrence of the specified element in this vector, or -1 if this vector does not contain the element
