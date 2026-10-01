---
id: "java-en-function-abstractlist-equals"
language: "java"
lang: "en"
category: "function"
name: "AbstractList.equals"
signature: "public boolean equals(Object o)"
title: "AbstractList.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractList.equals

```java
public boolean equals(Object o)
```

Compares the specified object with this list for equality.  Returns
 `true` if and only if the specified object is also a list, both
 lists have the same size, and all corresponding pairs of elements in
 the two lists are equal.  (Two elements `e1` and
 `e2` are equal if `(e1==null ? e2==null :
 e1.equals(e2))`.)  In other words, two lists are defined to be
 equal if they contain the same elements in the same order.

 This implementation first checks if the specified object is this
 list. If so, it returns `true`; if not, it checks if the
 specified object is a list. If not, it returns `false`; if so,
 it iterates over both lists, comparing corresponding pairs of elements.
 If any comparison returns `false`, this method returns
 `false`.  If either iterator runs out of elements before the
 other it returns `false` (as the lists are of unequal length);
 otherwise it returns `true` when the iterations complete.

**参数**

- **o** — the object to be compared for equality with this list

**返回**

- `true` if the specified object is equal to this list
