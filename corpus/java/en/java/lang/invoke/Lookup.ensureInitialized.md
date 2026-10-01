---
id: "java-en-function-lookup-ensureinitialized"
language: "java"
lang: "en"
category: "function"
name: "Lookup.ensureInitialized"
signature: "public <T> Class<T> ensureInitialized(Class<T> targetClass) throws IllegalAccessException"
title: "Lookup.ensureInitialized"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.ensureInitialized

```java
public <T> Class<T> ensureInitialized(Class<T> targetClass) throws IllegalAccessException
```

Ensures that `targetClass` has been initialized. The class
 to be initialized must be `accessClass accessible`
 to this `Lookup` object.  This method causes `targetClass`
 to be initialized if it has not been already initialized,
 as specified in JVMS {@jvms 5.5}.

 

 This method returns when `targetClass` is fully initialized, or
 when `targetClass` is being initialized by the current thread.

**参数**

- **the** — type of the class to be initialized
- **targetClass** — the class to be initialized

**返回**

- `targetClass` that has been initialized, or that is being initialized by the current thread.

**异常**

- **IllegalArgumentException** — if `targetClass` is a primitive type or `void` or array class
- **IllegalAccessException** — if `targetClass` is not `accessClass accessible` to this lookup
- **ExceptionInInitializerError** — if the class initialization provoked by this method fails

> *Since 15*
