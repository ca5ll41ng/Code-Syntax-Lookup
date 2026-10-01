---
id: "java-en-function-set-add"
language: "java"
lang: "en"
category: "function"
name: "Set.add"
signature: "boolean add(E e)"
title: "Set.add"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Set.add

```java
boolean add(E e)
```

Adds the specified element to this set if it is not already present
 (optional operation).  More formally, adds the specified element
 `e` to this set if the set contains no element `e2`
 such that
 `Objects.equals(e, e2)`.
 If this set already contains the element, the call leaves the set
 unchanged and returns `false`.  In combination with the
 restriction on constructors, this ensures that sets never contain
 duplicate elements.

 

The stipulation above does not imply that sets must accept all
 elements; sets may refuse to add any particular element, including
 `null`, and throw an exception, as described in the
 specification for `add Collection.add`.
 Individual set implementations should clearly document any
 restrictions on the elements that they may contain.

**参数**

- **e** — element to be added to this set

**返回**

- `true` if this set did not already contain the specified element

**异常**

- **UnsupportedOperationException** — if the `add` operation is not supported by this set
- **ClassCastException** — if the class of the specified element prevents it from being added to this set
- **NullPointerException** — if the specified element is null and this set does not permit null elements
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this set
