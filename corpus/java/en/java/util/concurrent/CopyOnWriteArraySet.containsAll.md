---
id: "java-en-function-copyonwritearrayset-containsall"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArraySet.containsAll"
signature: "public boolean containsAll(Collection<?> c)"
title: "CopyOnWriteArraySet.containsAll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArraySet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArraySet.containsAll

```java
public boolean containsAll(Collection<?> c)
```

Returns `true` if this set contains all of the elements of the
 specified collection.  If the specified collection is also a set, this
 method returns `true` if it is a subset of this set.

**参数**

- **c** — collection to be checked for containment in this set

**返回**

- `true` if this set contains all of the elements of the specified collection

**异常**

- **NullPointerException** — if the specified collection is null

**参见**

- #contains(Object)
