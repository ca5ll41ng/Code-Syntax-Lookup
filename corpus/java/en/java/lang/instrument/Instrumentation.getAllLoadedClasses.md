---
id: "java-en-function-instrumentation-getallloadedclasses"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.getAllLoadedClasses"
signature: "Class[] getAllLoadedClasses()"
title: "Instrumentation.getAllLoadedClasses"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.getAllLoadedClasses

```java
Class[] getAllLoadedClasses()
```

Returns an array of all classes currently loaded by the JVM.
 The returned array includes all classes and interfaces, including
 `isHidden hidden classes or interfaces`, and array classes
 of all types.

**返回**

- an array containing all the classes loaded by the JVM, zero-length if there are none
