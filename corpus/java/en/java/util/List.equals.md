---
id: "java-en-function-list-equals"
language: "java"
lang: "en"
category: "function"
name: "List.equals"
signature: "boolean equals(Object o)"
title: "List.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.equals

```java
boolean equals(Object o)
```

Compares the specified object with this list for equality.  Returns
 `true` if and only if the specified object is also a list, both
 lists have the same size, and all corresponding pairs of elements in
 the two lists are equal.  (Two elements `e1` and
 `e2` are equal if `Objects.equals(e1, e2)`.)
 In other words, two lists are defined to be
 equal if they contain the same elements in the same order.  This
 definition ensures that the equals method works properly across
 different implementations of the `List` interface.

**参数**

- **o** — the object to be compared for equality with this list

**返回**

- `true` if the specified object is equal to this list
