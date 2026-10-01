---
id: "java-en-function-instrumentation-isnativemethodprefixsupported"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.isNativeMethodPrefixSupported"
signature: "boolean isNativeMethodPrefixSupported()"
title: "Instrumentation.isNativeMethodPrefixSupported"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.isNativeMethodPrefixSupported

```java
boolean isNativeMethodPrefixSupported()
```

Returns whether the current JVM configuration supports
 `setNativeMethodPrefix(ClassFileTransformer,String)
 setting a native method prefix`.
 The ability to set a native method prefix is an optional
 capability of a JVM.
 Setting a native method prefix will only be supported if the
 Can-Set-Native-Method-Prefix manifest attribute is set to
 true in the agent JAR file (as described in the
 `java.lang.instrument package specification`) and the JVM supports
 this capability.
 During a single instantiation of a single JVM, multiple
 calls to this method will always return the same answer.

**返回**

- true if the current JVM configuration supports setting a native method prefix, false if not.

**参见**

- #setNativeMethodPrefix

> *Since 1.6*
