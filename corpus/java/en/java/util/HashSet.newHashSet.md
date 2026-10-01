---
id: "java-en-function-hashset-newhashset"
language: "java"
lang: "en"
category: "function"
name: "HashSet.newHashSet"
signature: "public static <T> HashSet<T> newHashSet(int numElements)"
title: "HashSet.newHashSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HashSet.newHashSet

```java
public static <T> HashSet<T> newHashSet(int numElements)
```

Creates a new, empty HashSet suitable for the expected number of elements.
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
