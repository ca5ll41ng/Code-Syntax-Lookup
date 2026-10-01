---
id: "java-en-function-list-remove"
language: "java"
lang: "en"
category: "function"
name: "List.remove"
signature: "boolean remove(Object o)"
title: "List.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.remove

```java
boolean remove(Object o)
```

Removes the first occurrence of the specified element from this list,
 if it is present (optional operation).  If this list does not contain
 the element, it is unchanged.  More formally, removes the element with
 the lowest index `i` such that
 `Objects.equals(o, get(i))`
 (if such an element exists).  Returns `true` if this list
 contained the specified element (or equivalently, if this list changed
 as a result of the call).

**参数**

- **o** — element to be removed from this list, if present

**返回**

- `true` if this list contained the specified element

**异常**

- **ClassCastException** — if the type of the specified element is incompatible with this list (optional)
- **NullPointerException** — if the specified element is null and this list does not permit null elements (optional)
- **UnsupportedOperationException** — if the `remove` operation is not supported by this list
