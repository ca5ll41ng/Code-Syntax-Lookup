---
id: "java-en-function-lockinfo-from"
language: "java"
lang: "en"
category: "function"
name: "LockInfo.from"
signature: "public static LockInfo from(CompositeData cd)"
title: "LockInfo.from"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/LockInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LockInfo.from

```java
public static LockInfo from(CompositeData cd)
```

Returns a `LockInfo` object represented by the
 given `CompositeData`.
 The given `CompositeData` must contain the following attributes:
 
 The attributes and the types the given CompositeData contains
 
 
   Attribute Name
   Type
 
 
 
 
   className
   `java.lang.String`
 
 
   identityHashCode
   `java.lang.Integer`

**参数**

- **cd** — `CompositeData` representing a `LockInfo`

**返回**

- a `LockInfo` object represented by `cd` if `cd` is not `null`; `null` otherwise.

**异常**

- **IllegalArgumentException** — if `cd` does not represent a `LockInfo` with the attributes described above.

> *Since 1.8*
