---
id: "java-en-function-linkedhashset-newlinkedhashset"
language: "java"
lang: "en"
category: "function"
name: "LinkedHashSet.newLinkedHashSet"
signature: "public static <T> LinkedHashSet<T> newLinkedHashSet(int numElements)"
title: "LinkedHashSet.newLinkedHashSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedHashSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedHashSet.newLinkedHashSet

```java
public static <T> LinkedHashSet<T> newLinkedHashSet(int numElements)
```

Creates a new, empty LinkedHashSet suitable for the expected number of elements.
 The returned set uses the default load factor of 0.75, and its initial capacity is
 generally large enough so that the expected number of elements can be added
 without resizing the set.

**参数**

- **numElements** — the expected number of elements
- **the** — type of elements maintained by the new set

**返回**

- the newly created set

**异常**

- **IllegalArgumentException** — if numElements is negative

> *Since 19*
