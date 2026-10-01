---
id: "java-en-function-memorynotificationinfo-from"
language: "java"
lang: "en"
category: "function"
name: "MemoryNotificationInfo.from"
signature: "public static MemoryNotificationInfo from(CompositeData cd)"
title: "MemoryNotificationInfo.from"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryNotificationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryNotificationInfo.from

```java
public static MemoryNotificationInfo from(CompositeData cd)
```

Returns a `MemoryNotificationInfo` object represented by the
 given `CompositeData`.
 The given `CompositeData` must contain
 the following attributes:
 
 The attributes and the types the given CompositeData contains
 
 
   Attribute Name
   Type
 
 
 
 
   poolName
   `java.lang.String`
 
 
   usage
   `javax.management.openmbean.CompositeData`
 
 
   count
   `java.lang.Long`

**参数**

- **cd** — `CompositeData` representing a `MemoryNotificationInfo`

**返回**

- a `MemoryNotificationInfo` object represented by `cd` if `cd` is not `null`; `null` otherwise.

**异常**

- **IllegalArgumentException** — if `cd` does not represent a `MemoryNotificationInfo` object.
