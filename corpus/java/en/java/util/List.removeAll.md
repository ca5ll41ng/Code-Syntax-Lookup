---
id: "java-en-function-list-removeall"
language: "java"
lang: "en"
category: "function"
name: "List.removeAll"
signature: "boolean removeAll(Collection<?> c)"
title: "List.removeAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.removeAll

```java
boolean removeAll(Collection<?> c)
```

Removes from this list all of its elements that are contained in the
 specified collection (optional operation).

**参数**

- **c** — collection containing elements to be removed from this list

**返回**

- `true` if this list changed as a result of the call

**异常**

- **UnsupportedOperationException** — if the `removeAll` operation is not supported by this list
- **ClassCastException** — if the class of an element of this list is incompatible with the specified collection (optional)
- **NullPointerException** — if this list contains a null element and the specified collection does not permit null elements (optional), or if the specified collection is null

**参见**

- #remove(Object)
- #contains(Object)
