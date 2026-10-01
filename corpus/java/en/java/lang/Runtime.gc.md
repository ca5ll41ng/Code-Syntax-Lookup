---
id: "java-en-function-runtime-gc"
language: "java"
lang: "en"
category: "function"
name: "Runtime.gc"
signature: "public native void gc()"
title: "Runtime.gc"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Runtime.gc

```java
public native void gc()
```

Runs the garbage collector in the Java Virtual Machine.
 

 Calling this method suggests that the Java Virtual Machine
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
 

 The name `gc` stands for "garbage
 collector". The Java Virtual Machine performs this recycling
 process automatically as needed, in a separate thread, even if the
 `gc` method is not invoked explicitly.
 

 The method `gc` is the conventional and convenient
 means of invoking this method.
