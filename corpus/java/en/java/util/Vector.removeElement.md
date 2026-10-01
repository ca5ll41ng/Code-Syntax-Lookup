---
id: "java-en-function-vector-removeelement"
language: "java"
lang: "en"
category: "function"
name: "Vector.removeElement"
signature: "public synchronized boolean removeElement(Object obj)"
title: "Vector.removeElement"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.removeElement

```java
public synchronized boolean removeElement(Object obj)
```

Removes the first (lowest-indexed) occurrence of the argument
 from this vector. If the object is found in this vector, each
 component in the vector with an index greater or equal to the
 object's index is shifted downward to have an index one smaller
 than the value it had previously.

 

This method is identical in functionality to the
 `remove` method (which is part of the
 `List` interface).

**参数**

- **obj** — the component to be removed

**返回**

- `true` if the argument was a component of this vector; `false` otherwise.
