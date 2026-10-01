---
id: "java-en-function-list-containsall"
language: "java"
lang: "en"
category: "function"
name: "List.containsAll"
signature: "boolean containsAll(Collection<?> c)"
title: "List.containsAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.containsAll

```java
boolean containsAll(Collection<?> c)
```

Returns `true` if this list contains all of the elements of the
 specified collection.

**参数**

- **c** — collection to be checked for containment in this list

**返回**

- `true` if this list contains all of the elements of the specified collection

**异常**

- **ClassCastException** — if the types of one or more elements in the specified collection are incompatible with this list (optional)
- **NullPointerException** — if the specified collection contains one or more null elements and this list does not permit null elements (optional), or if the specified collection is null

**参见**

- #contains(Object)
