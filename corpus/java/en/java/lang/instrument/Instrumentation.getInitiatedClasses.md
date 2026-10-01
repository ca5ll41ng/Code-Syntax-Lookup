---
id: "java-en-function-instrumentation-getinitiatedclasses"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.getInitiatedClasses"
signature: "Class[] getInitiatedClasses(ClassLoader loader)"
title: "Instrumentation.getInitiatedClasses"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.getInitiatedClasses

```java
Class[] getInitiatedClasses(ClassLoader loader)
```

Returns an array of all classes which `loader` can find by name
 via `loadClass(String, boolean) ClassLoader::loadClass`,
 `forName(String) Class::forName` and bytecode linkage.
 That is, all classes for which `loader` has been recorded as
 an initiating loader. If the supplied `loader` is `null`,
 classes that the bootstrap class loader can find by name are returned.
 

 The returned array does not include `isHidden()
 hidden classes or interfaces` or array classes whose
 `componentType() element type` is a
 `isHidden() hidden class or interface`.
 as they cannot be discovered by any class loader.

**参数**

- **loader** — the loader whose initiated class list will be returned

**返回**

- an array containing all classes which `loader` can find by name; zero-length if there are none
