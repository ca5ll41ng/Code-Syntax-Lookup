---
id: "java-en-function-runtime-runfinalization"
language: "java"
lang: "en"
category: "function"
name: "Runtime.runFinalization"
signature: "public void runFinalization()"
title: "Runtime.runFinalization"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Runtime.runFinalization

```java
public void runFinalization()
```

Runs the finalization methods of any objects pending finalization.
 Calling this method suggests that the Java virtual machine expend
 effort toward running the `finalize` methods of objects
 that have been found to be discarded but whose `finalize`
 methods have not yet been run. When control returns from the
 method call, the virtual machine has made a best effort to
 complete all outstanding finalizations.
 

 The virtual machine performs the finalization process
 automatically as needed, in a separate thread, if the
 `runFinalization` method is not invoked explicitly.
 

 The method `runFinalization` is the conventional
 and convenient means of invoking this method.

**参见**

- java.lang.Object#finalize()

> **⚠ Deprecated** — Finalization has been deprecated for removal.  See `finalize` for background information and details about migration options.    When running in a JVM in which finalization has been disabled or removed, no objects will be pending finalization, so this method does nothing.
