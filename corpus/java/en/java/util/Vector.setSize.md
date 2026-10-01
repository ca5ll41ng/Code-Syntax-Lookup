---
id: "java-en-function-vector-setsize"
language: "java"
lang: "en"
category: "function"
name: "Vector.setSize"
signature: "public synchronized void setSize(int newSize)"
title: "Vector.setSize"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.setSize

```java
public synchronized void setSize(int newSize)
```

Sets the size of this vector. If the new size is greater than the
 current size, new `null` items are added to the end of
 the vector. If the new size is less than the current size, all
 components at index `newSize` and greater are discarded.

**参数**

- **newSize** — the new size of this vector

**异常**

- **ArrayIndexOutOfBoundsException** — if the new size is negative
