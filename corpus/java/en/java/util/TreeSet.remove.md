---
id: "java-en-function-treeset-remove"
language: "java"
lang: "en"
category: "function"
name: "TreeSet.remove"
signature: "public boolean remove(Object o)"
title: "TreeSet.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeSet.remove

```java
public boolean remove(Object o)
```

Removes the specified element from this set if it is present.
 More formally, removes an element `e` such that
 `Objects.equals(o, e)`,
 if this set contains such an element.  Returns `true` if
 this set contained the element (or equivalently, if this set
 changed as a result of the call).  (This set will not contain the
 element once the call returns.)

**参数**

- **o** — object to be removed from this set, if present

**返回**

- `true` if this set contained the specified element

**异常**

- **ClassCastException** — if the specified object cannot be compared with the elements currently in this set
- **NullPointerException** — if the specified element is null and this set uses natural ordering, or its comparator does not permit null elements
