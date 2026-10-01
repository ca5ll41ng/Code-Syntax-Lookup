---
id: "java-en-function-navigableset-lower"
language: "java"
lang: "en"
category: "function"
name: "NavigableSet.lower"
signature: "E lower(E e)"
title: "NavigableSet.lower"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableSet.lower

```java
E lower(E e)
```

Returns the greatest element in this set strictly less than the
 given element, or `null` if there is no such element.

**参数**

- **e** — the value to match

**返回**

- the greatest element less than `e`, or `null` if there is no such element

**异常**

- **ClassCastException** — if the specified element cannot be compared with the elements currently in the set
- **NullPointerException** — if the specified element is null and this set does not permit null elements
