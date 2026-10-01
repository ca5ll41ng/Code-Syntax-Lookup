---
id: "java-en-function-collections-emptymap"
language: "java"
lang: "en"
category: "function"
name: "Collections.emptyMap"
signature: "public static final <K,V> Map<K,V> emptyMap()"
title: "Collections.emptyMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.emptyMap

```java
public static final <K,V> Map<K,V> emptyMap()
```

Returns an empty map (immutable).  This map is serializable.

 

This example illustrates the type-safe way to obtain an empty map:
 
```

     Map&lt;String, Date&gt; s = Collections.emptyMap();
 
```

 `Map` object for each call.  Using this method is likely to have
 comparable cost to using the like-named field.  (Unlike this method, the
 field does not provide type safety.)

**参数**

- **the** — class of the map keys
- **the** — class of the map values

**返回**

- an empty map

**参见**

- #EMPTY_MAP

> *Since 1.5*
