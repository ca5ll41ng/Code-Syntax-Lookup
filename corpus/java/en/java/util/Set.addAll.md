---
id: "java-en-function-set-addall"
language: "java"
lang: "en"
category: "function"
name: "Set.addAll"
signature: "boolean addAll(Collection<? extends E> c)"
title: "Set.addAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Set.addAll

```java
boolean addAll(Collection<? extends E> c)
```

Adds all of the elements in the specified collection to this set if
 they're not already present (optional operation).  If the specified
 collection is also a set, the `addAll` operation effectively
 modifies this set so that its value is the union of the two
 sets.  The behavior of this operation is undefined if the specified
 collection is modified while the operation is in progress.

**参数**

- **c** — collection containing elements to be added to this set

**返回**

- `true` if this set changed as a result of the call

**异常**

- **UnsupportedOperationException** — if the `addAll` operation is not supported by this set
- **ClassCastException** — if the class of an element of the specified collection prevents it from being added to this set
- **NullPointerException** — if the specified collection contains one or more null elements and this set does not permit null elements, or if the specified collection is null
- **IllegalArgumentException** — if some property of an element of the specified collection prevents it from being added to this set

**参见**

- #add(Object)
