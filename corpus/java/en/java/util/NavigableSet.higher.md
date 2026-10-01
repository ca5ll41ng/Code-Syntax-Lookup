---
id: "java-en-function-navigableset-higher"
language: "java"
lang: "en"
category: "function"
name: "NavigableSet.higher"
signature: "E higher(E e)"
title: "NavigableSet.higher"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableSet.higher

```java
E higher(E e)
```

Returns the least element in this set strictly greater than the
 given element, or `null` if there is no such element.

**参数**

- **e** — the value to match

**返回**

- the least element greater than `e`, or `null` if there is no such element

**异常**

- **ClassCastException** — if the specified element cannot be compared with the elements currently in the set
- **NullPointerException** — if the specified element is null and this set does not permit null elements
