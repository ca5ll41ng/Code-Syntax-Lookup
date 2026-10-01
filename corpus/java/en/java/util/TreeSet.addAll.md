---
id: "java-en-function-treeset-addall"
language: "java"
lang: "en"
category: "function"
name: "TreeSet.addAll"
signature: "public boolean addAll(Collection<? extends E> c)"
title: "TreeSet.addAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeSet.addAll

```java
public boolean addAll(Collection<? extends E> c)
```

Adds all of the elements in the specified collection to this set.

**参数**

- **c** — collection containing elements to be added to this set

**返回**

- `true` if this set changed as a result of the call

**异常**

- **ClassCastException** — if the elements provided cannot be compared with the elements currently in the set
- **NullPointerException** — if the specified collection is null or if any element is null and this set uses natural ordering, or its comparator does not permit null elements
