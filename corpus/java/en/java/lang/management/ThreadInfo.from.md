---
id: "java-en-function-threadinfo-from"
language: "java"
lang: "en"
category: "function"
name: "ThreadInfo.from"
signature: "public static ThreadInfo from(CompositeData cd)"
title: "ThreadInfo.from"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadInfo.from

```java
public static ThreadInfo from(CompositeData cd)
```

Returns a `ThreadInfo` object represented by the
 given `CompositeData`.

 
 A `CompositeData` representing a `ThreadInfo` of
 version N must contain all of the attributes defined
 in version &le; N unless specified otherwise.
 The same rule applies the composite type of the given
 `CompositeData` and transitively to attributes whose
 `getCompositeType() type` or
 `getElementOpenType() component type` is
 `CompositeType`.
 

 A `CompositeData` representing `ThreadInfo` of
 version N contains `"stackTrace"` attribute and
 `"lockedMonitors"` attribute representing
 an array of `StackTraceElement` and
 an array of `MonitorInfo` respectively
 and their types are of version N.
 The `"lockedStackFrame"` attribute in
 `from(CompositeData) MonitorInfo`'s composite type
 must represent `StackTraceElement` of the same version N.
 Otherwise, this method will throw `IllegalArgumentException`.

 
 The attributes and their types for ThreadInfo's composite data
 
 
   Attribute Name
   Type
   Since
 
 
 
 
   threadId
   `java.lang.Long`
   5
 
 
   threadName
   `java.lang.String`
   5
 
 
   threadState
   `java.lang.String`
   5
 
 
   suspended
   `java.lang.Boolean`
   5
 
 
   inNative
   `java.lang.Boolean`
   5
 
 
   blockedCount
   `java.lang.Long`
   5
 
 
   blockedTime
   `java.lang.Long`
   5
 
 
   waitedCount
   `java.lang.Long`
   5
 
 
   waitedTime
   `java.lang.Long`
   5
 
 
   lockName
   `java.lang.String`
   5
 
 
   lockOwnerId
   `java.lang.Long`
   5
 
 
   lockOwnerName
   `java.lang.String`
   5
 
 
   stackTrace
   `javax.management.openmbean.CompositeData[]`, each element
       is a `CompositeData` representing `StackTraceElement`
       as specified below.
   
   5
 
 
   lockInfo
   `javax.management.openmbean.CompositeData`
       - the mapped type for `LockInfo` as specified in the
         `from` method.
       

       If the given `CompositeData` does not contain this attribute,
       the `LockInfo` object will be constructed from
       the value of the `lockName` attribute.
    6
 
 
   lockedMonitors
   `javax.management.openmbean.CompositeData[]`
       whose element type is the mapped type for
       `MonitorInfo` as specified in the
       `from MonitorInfo.from` method.
       

       If the given `CompositeData` does not contain this attribute,
       this attribute will be set to an empty array.
    6
 
 
   lockedSynchronizers
   `javax.management.openmbean.CompositeData[]`
       whose element type is the mapped type for
       `LockInfo` as specified in the `from` method.
       

       If the given `CompositeData` does not contain this attribute,
       this attribute will be set to an empty array.
    6
 
 
   daemon
   `java.lang.Boolean`
       

       If the given `CompositeData` does not contain this attribute,
       this attribute will be set to `false`.
    9
 
 
   priority
   `java.lang.Integer`
       

       If the given `CompositeData` does not contain this attribute,
       This attribute will be set to `NORM_PRIORITY`.
    9
 
 
 

 A `CompositeData` representing
 `StackTraceElement` of version N must contain
 all of the attributes defined in version &le; N
 unless specified otherwise.

 
 The attributes and their types for StackTraceElement's composite data
 
 
   Attribute Name
   Type
   Since
 
 
 
 
   classLoaderName
   `java.lang.String`
   9
 
 
   moduleName
   `java.lang.String`
   9
 
 
   moduleVersion
   `java.lang.String`
   9
 
 
   className
   `java.lang.String`
   5
 
 
   methodName
   `java.lang.String`
   5
 
 
   fileName
   `java.lang.String`
   5
 
 
   lineNumber
   `java.lang.Integer`
   5
 
 
   nativeMethod
   `java.lang.Boolean`
   5

**参数**

- **cd** — `CompositeData` representing a `ThreadInfo`

**返回**

- a `ThreadInfo` object represented by `cd` if `cd` is not `null`; `null` otherwise.

**异常**

- **IllegalArgumentException** — if the given `cd` and its composite type does not contain all of the attributes defined for a `ThreadInfo` of a specific runtime version.
