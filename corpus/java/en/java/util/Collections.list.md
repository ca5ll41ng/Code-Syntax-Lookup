---
id: "java-en-function-collections-list"
language: "java"
lang: "en"
category: "function"
name: "Collections.list"
signature: "public static <T> ArrayList<T> list(Enumeration<T> e)"
title: "Collections.list"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.list

```java
public static <T> ArrayList<T> list(Enumeration<T> e)
```

Returns an array list containing the elements returned by the
 specified enumeration in the order they are returned by the
 enumeration.  This method provides interoperability between
 legacy APIs that return enumerations and new APIs that require
 collections.

**参数**

- **the** — class of the objects returned by the enumeration
- **e** — enumeration providing elements for the returned array list

**返回**

- an array list containing the elements returned by the specified enumeration.

**参见**

- Enumeration
- ArrayList

> *Since 1.4*
