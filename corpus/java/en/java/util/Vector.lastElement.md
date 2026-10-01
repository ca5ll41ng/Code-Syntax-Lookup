---
id: "java-en-function-vector-lastelement"
language: "java"
lang: "en"
category: "function"
name: "Vector.lastElement"
signature: "public synchronized E lastElement()"
title: "Vector.lastElement"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.lastElement

```java
public synchronized E lastElement()
```

Returns the last component of the vector.

**返回**

- the last component of the vector, i.e., the component at index `size() - 1`

**异常**

- **NoSuchElementException** — if this vector is empty
