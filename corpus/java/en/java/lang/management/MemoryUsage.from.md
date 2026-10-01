---
id: "java-en-function-memoryusage-from"
language: "java"
lang: "en"
category: "function"
name: "MemoryUsage.from"
signature: "public static MemoryUsage from(CompositeData cd)"
title: "MemoryUsage.from"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryUsage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryUsage.from

```java
public static MemoryUsage from(CompositeData cd)
```

Returns a `MemoryUsage` object represented by the
 given `CompositeData`. The given `CompositeData`
 must contain the following attributes:

 
 The attributes and the types the given CompositeData contains
 
 
   Attribute Name
   Type
 
 
 
 
   init
   `java.lang.Long`
 
 
   used
   `java.lang.Long`
 
 
   committed
   `java.lang.Long`
 
 
   max
   `java.lang.Long`

**参数**

- **cd** — `CompositeData` representing a `MemoryUsage`

**返回**

- a `MemoryUsage` object represented by `cd` if `cd` is not `null`; `null` otherwise.

**异常**

- **IllegalArgumentException** — if `cd` does not represent a `MemoryUsage` with the attributes described above.
