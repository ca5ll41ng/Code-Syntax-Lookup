---
id: "java-en-function-set-retainall"
language: "java"
lang: "en"
category: "function"
name: "Set.retainAll"
signature: "boolean retainAll(Collection<?> c)"
title: "Set.retainAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Set.retainAll

```java
boolean retainAll(Collection<?> c)
```

Retains only the elements in this set that are contained in the
 specified collection (optional operation).  In other words, removes
 from this set all of its elements that are not contained in the
 specified collection.  If the specified collection is also a set, this
 operation effectively modifies this set so that its value is the
 intersection of the two sets.

**参数**

- **c** — collection containing elements to be retained in this set

**返回**

- `true` if this set changed as a result of the call

**异常**

- **UnsupportedOperationException** — if the `retainAll` operation is not supported by this set
- **ClassCastException** — if the class of an element of this set is incompatible with the specified collection (optional)
- **NullPointerException** — if this set contains a null element and the specified collection does not permit null elements (optional), or if the specified collection is null

**参见**

- #remove(Object)
