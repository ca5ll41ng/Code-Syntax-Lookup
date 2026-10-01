---
id: "java-en-function-collections-enumeration"
language: "java"
lang: "en"
category: "function"
name: "Collections.enumeration"
signature: "public static <T> Enumeration<T> enumeration(final Collection<T> c)"
title: "Collections.enumeration"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.enumeration

```java
public static <T> Enumeration<T> enumeration(final Collection<T> c)
```

Returns an enumeration over the specified collection.  This provides
 interoperability with legacy APIs that require an enumeration
 as input.

 

The iterator returned from a call to `asIterator`
 does not support removal of elements from the specified collection.  This
 is necessary to avoid unintentionally increasing the capabilities of the
 returned enumeration.

**参数**

- **the** — class of the objects in the collection
- **c** — the collection for which an enumeration is to be returned.

**返回**

- an enumeration over the specified collection.

**参见**

- Enumeration
