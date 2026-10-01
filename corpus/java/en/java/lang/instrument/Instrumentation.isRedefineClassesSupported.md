---
id: "java-en-function-instrumentation-isredefineclassessupported"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.isRedefineClassesSupported"
signature: "boolean isRedefineClassesSupported()"
title: "Instrumentation.isRedefineClassesSupported"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.isRedefineClassesSupported

```java
boolean isRedefineClassesSupported()
```

Returns whether or not the current JVM configuration supports redefinition
 of classes.
 The ability to redefine an already loaded class is an optional capability
 of a JVM.
 Redefinition will only be supported if the
 Can-Redefine-Classes manifest attribute is set to
 true in the agent JAR file (as described in the
 `java.lang.instrument package specification`) and the JVM supports
 this capability.
 During a single instantiation of a single JVM, multiple calls to this
 method will always return the same answer.

**返回**

- true if the current JVM configuration supports redefinition of classes, false if not.

**参见**

- #redefineClasses
