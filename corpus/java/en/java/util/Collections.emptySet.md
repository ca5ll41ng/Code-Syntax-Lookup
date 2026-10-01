---
id: "java-en-function-collections-emptyset"
language: "java"
lang: "en"
category: "function"
name: "Collections.emptySet"
signature: "public static final <T> Set<T> emptySet()"
title: "Collections.emptySet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.emptySet

```java
public static final <T> Set<T> emptySet()
```

Returns an empty set (immutable).  This set is serializable.
 Unlike the like-named field, this method is parameterized.

 

This example illustrates the type-safe way to obtain an empty set:
 
```

     Set&lt;String&gt; s = Collections.emptySet();
 
```

 `Set` object for each call.  Using this method is likely to have
 comparable cost to using the like-named field.  (Unlike this method, the
 field does not provide type safety.)

**参数**

- **the** — class of the objects in the set

**返回**

- the empty set

**参见**

- #EMPTY_SET

> *Since 1.5*
