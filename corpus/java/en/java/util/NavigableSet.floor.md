---
id: "java-en-function-navigableset-floor"
language: "java"
lang: "en"
category: "function"
name: "NavigableSet.floor"
signature: "E floor(E e)"
title: "NavigableSet.floor"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableSet.floor

```java
E floor(E e)
```

Returns the greatest element in this set less than or equal to
 the given element, or `null` if there is no such element.

**参数**

- **e** — the value to match

**返回**

- the greatest element less than or equal to `e`, or `null` if there is no such element

**异常**

- **ClassCastException** — if the specified element cannot be compared with the elements currently in the set
- **NullPointerException** — if the specified element is null and this set does not permit null elements
