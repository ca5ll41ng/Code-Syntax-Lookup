---
id: "java-en-function-list-add"
language: "java"
lang: "en"
category: "function"
name: "List.add"
signature: "boolean add(E e)"
title: "List.add"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.add

```java
boolean add(E e)
```

Appends the specified element to the end of this list (optional
 operation).

 

Lists that support this operation may place limitations on what
 elements may be added to this list.  In particular, some
 lists will refuse to add null elements, and others will impose
 restrictions on the type of elements that may be added.  List
 classes should clearly specify in their documentation any restrictions
 on what elements may be added.

**参数**

- **e** — element to be appended to this list

**返回**

- `true` (as specified by `add`)

**异常**

- **UnsupportedOperationException** — if the `add` operation is not supported by this list
- **ClassCastException** — if the class of the specified element prevents it from being added to this list
- **NullPointerException** — if the specified element is null and this list does not permit null elements
- **IllegalArgumentException** — if some property of this element prevents it from being added to this list
