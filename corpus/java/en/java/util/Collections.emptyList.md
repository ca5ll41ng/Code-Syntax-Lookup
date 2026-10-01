---
id: "java-en-function-collections-emptylist"
language: "java"
lang: "en"
category: "function"
name: "Collections.emptyList"
signature: "public static final <T> List<T> emptyList()"
title: "Collections.emptyList"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.emptyList

```java
public static final <T> List<T> emptyList()
```

Returns an empty list (immutable).  This list is serializable.

 

This example illustrates the type-safe way to obtain an empty list:
 
```

     List&lt;String&gt; s = Collections.emptyList();
 
```

 Implementations of this method need not create a separate `List`
 object for each call.   Using this method is likely to have comparable
 cost to using the like-named field.  (Unlike this method, the field does
 not provide type safety.)

**参数**

- **type** — of elements, if there were any, in the list

**返回**

- an empty immutable list

**参见**

- #EMPTY_LIST

> *Since 1.5*
