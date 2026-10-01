---
id: "java-en-function-arrayspliterator-arrayspliterator"
language: "java"
lang: "en"
category: "function"
name: "ArraySpliterator.ArraySpliterator"
signature: "public ArraySpliterator(Object[] array, int additionalCharacteristics)"
title: "ArraySpliterator.ArraySpliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterators.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArraySpliterator.ArraySpliterator

```java
public ArraySpliterator(Object[] array, int additionalCharacteristics)
```

Creates a spliterator covering all of the given array.
 Its size is known exactly and it is SIZED and SUBSIZED.

**参数**

- **array** — the array, assumed to be unmodified during use
- **additionalCharacteristics** — Additional spliterator characteristics of this spliterator's source or elements beyond `SIZED` and `SUBSIZED` which are always reported
