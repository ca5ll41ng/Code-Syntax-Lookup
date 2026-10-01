---
id: "java-en-function-vector-ensurecapacity"
language: "java"
lang: "en"
category: "function"
name: "Vector.ensureCapacity"
signature: "public synchronized void ensureCapacity(int minCapacity)"
title: "Vector.ensureCapacity"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.ensureCapacity

```java
public synchronized void ensureCapacity(int minCapacity)
```

Increases the capacity of this vector, if necessary, to ensure
 that it can hold at least the number of components specified by
 the minimum capacity argument.

 

If the current capacity of this vector is less than
 `minCapacity`, then its capacity is increased by replacing its
 internal data array, kept in the field `elementData`, with a
 larger one.  The size of the new data array will be the old size plus
 `capacityIncrement`, unless the value of
 `capacityIncrement` is less than or equal to zero, in which case
 the new capacity will be twice the old capacity; but if this new size
 is still smaller than `minCapacity`, then the new capacity will
 be `minCapacity`.

**参数**

- **minCapacity** — the desired minimum capacity
