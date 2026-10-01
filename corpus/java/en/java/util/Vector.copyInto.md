---
id: "java-en-function-vector-copyinto"
language: "java"
lang: "en"
category: "function"
name: "Vector.copyInto"
signature: "public synchronized void copyInto(Object[] anArray)"
title: "Vector.copyInto"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.copyInto

```java
public synchronized void copyInto(Object[] anArray)
```

Copies the components of this vector into the specified array.
 The item at index `k` in this vector is copied into
 component `k` of `anArray`.

**参数**

- **anArray** — the array into which the components get copied

**异常**

- **NullPointerException** — if the given array is null
- **IndexOutOfBoundsException** — if the specified array is not large enough to hold all the components of this vector
- **ArrayStoreException** — if a component of this vector is not of a runtime type that can be stored in the specified array

**参见**

- #toArray(Object[])
