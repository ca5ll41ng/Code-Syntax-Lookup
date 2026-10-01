---
id: "java-en-function-treeset-contains"
language: "java"
lang: "en"
category: "function"
name: "TreeSet.contains"
signature: "public boolean contains(Object o)"
title: "TreeSet.contains"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeSet.contains

```java
public boolean contains(Object o)
```

Returns `true` if this set contains the specified element.
 More formally, returns `true` if and only if this set
 contains an element `e` such that
 `Objects.equals(o, e)`.

**参数**

- **o** — object to be checked for containment in this set

**返回**

- `true` if this set contains the specified element

**异常**

- **ClassCastException** — if the specified object cannot be compared with the elements currently in the set
- **NullPointerException** — if the specified element is null and this set uses natural ordering, or its comparator does not permit null elements
