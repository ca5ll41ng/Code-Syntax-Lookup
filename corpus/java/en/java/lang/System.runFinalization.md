---
id: "java-en-function-system-runfinalization"
language: "java"
lang: "en"
category: "function"
name: "System.runFinalization"
signature: "public static void runFinalization()"
title: "System.runFinalization"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.runFinalization

```java
public static void runFinalization()
```

Runs the finalization methods of any objects pending finalization.

 Calling this method suggests that the Java Virtual Machine expend
 effort toward running the `finalize` methods of objects
 that have been found to be discarded but whose `finalize`
 methods have not yet been run. When control returns from the
 method call, the Java Virtual Machine has made a best effort to
 complete all outstanding finalizations.
 

 The call `System.runFinalization()` is effectively
 equivalent to the call:
 
```

 Runtime.getRuntime().runFinalization()
 
```

**参见**

- java.lang.Runtime#runFinalization()

> **⚠ Deprecated** — Finalization has been deprecated for removal.  See `finalize` for background information and details about migration options.    When running in a JVM in which finalization has been disabled or removed, no objects will be pending finalization, so this method does nothing.
