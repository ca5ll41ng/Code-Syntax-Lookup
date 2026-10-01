---
id: "java-en-function-monitorinfo-from"
language: "java"
lang: "en"
category: "function"
name: "MonitorInfo.from"
signature: "public static MonitorInfo from(CompositeData cd)"
title: "MonitorInfo.from"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MonitorInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MonitorInfo.from

```java
public static MonitorInfo from(CompositeData cd)
```

Returns a `MonitorInfo` object represented by the
 given `CompositeData`.
 The given `CompositeData` must contain the following attributes
 as well as the attributes specified in the
 
 mapped type for the `LockInfo` class:
 
 The attributes and their types the given CompositeData contains
 
 
   Attribute Name
   Type
 
 
 
 
   lockedStackFrame
   
       `CompositeData` for `StackTraceElement` as specified
       in `from` method.
   
 
 
   lockedStackDepth
   `java.lang.Integer`

**参数**

- **cd** — `CompositeData` representing a `MonitorInfo`

**返回**

- a `MonitorInfo` object represented by `cd` if `cd` is not `null`; `null` otherwise.

**异常**

- **IllegalArgumentException** — if `cd` does not represent a `MonitorInfo` with the attributes described above.
