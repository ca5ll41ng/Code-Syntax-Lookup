---
id: "java-en-function-system-gc"
language: "java"
lang: "en"
category: "function"
name: "System.gc"
signature: "public static void gc()"
title: "System.gc"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.gc

```java
public static void gc()
```

Runs the garbage collector in the Java Virtual Machine.
 

 Calling the `gc` method suggests that the Java Virtual Machine
 expend effort toward recycling unused objects in order to
 make the memory they currently occupy available for reuse
 by the Java Virtual Machine.
 When control returns from the method call, the Java Virtual Machine
 has made a best effort to reclaim space from all unused objects.
 There is no guarantee that this effort will recycle any particular
 number of unused objects, reclaim any particular amount of space, or
 complete at any particular time, if at all, before the method returns or ever.
 There is also no guarantee that this effort will determine
 the change of reachability in any particular number of objects,
 or that any particular number of `java.lang.ref.Reference Reference`
 objects will be cleared and enqueued.

 

 The call `System.gc()` is effectively equivalent to the
 call:
 
```

 Runtime.getRuntime().gc()
 
```

**参见**

- java.lang.Runtime#gc()
