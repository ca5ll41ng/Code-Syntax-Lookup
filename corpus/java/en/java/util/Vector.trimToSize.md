---
id: "java-en-function-vector-trimtosize"
language: "java"
lang: "en"
category: "function"
name: "Vector.trimToSize"
signature: "public synchronized void trimToSize()"
title: "Vector.trimToSize"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.trimToSize

```java
public synchronized void trimToSize()
```

Trims the capacity of this vector to be the vector's current
 size. If the capacity of this vector is larger than its current
 size, then the capacity is changed to equal the size by replacing
 its internal data array, kept in the field `elementData`,
 with a smaller one. An application can use this operation to
 minimize the storage of a vector.
