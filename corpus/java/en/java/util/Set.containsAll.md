---
id: "java-en-function-set-containsall"
language: "java"
lang: "en"
category: "function"
name: "Set.containsAll"
signature: "boolean containsAll(Collection<?> c)"
title: "Set.containsAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Set.containsAll

```java
boolean containsAll(Collection<?> c)
```

Returns `true` if this set contains all of the elements of the
 specified collection.  If the specified collection is also a set, this
 method returns `true` if it is a subset of this set.

**参数**

- **c** — collection to be checked for containment in this set

**返回**

- `true` if this set contains all of the elements of the specified collection

**异常**

- **ClassCastException** — if the types of one or more elements in the specified collection are incompatible with this set (optional)
- **NullPointerException** — if the specified collection contains one or more null elements and this set does not permit null elements (optional), or if the specified collection is null

**参见**

- #contains(Object)
