---
id: "java-en-function-collections-emptyenumeration"
language: "java"
lang: "en"
category: "function"
name: "Collections.emptyEnumeration"
signature: "public static <T> Enumeration<T> emptyEnumeration()"
title: "Collections.emptyEnumeration"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.emptyEnumeration

```java
public static <T> Enumeration<T> emptyEnumeration()
```

Returns an enumeration that has no elements.  More precisely,

 
 
- `hasMoreElements hasMoreElements` always
 returns `false`.
 
-  `nextElement nextElement` always throws
 `NoSuchElementException`.
 

 

Implementations of this method are permitted, but not
 required, to return the same object from multiple invocations.

**参数**

- **the** — class of the objects in the enumeration

**返回**

- an empty enumeration

> *Since 1.7*
