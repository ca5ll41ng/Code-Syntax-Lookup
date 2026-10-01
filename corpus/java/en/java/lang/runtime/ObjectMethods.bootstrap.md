---
id: "java-en-function-objectmethods-bootstrap"
language: "java"
lang: "en"
category: "function"
name: "ObjectMethods.bootstrap"
signature: "public static Object bootstrap(MethodHandles.Lookup lookup, String methodName, TypeDescriptor type, Class<?> recordClass, String names, MethodHandle... getters) throws Throwable"
title: "ObjectMethods.bootstrap"
directive: "method"
module: "java.base/java.lang.runtime"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/runtime/ObjectMethods.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectMethods.bootstrap

```java
public static Object bootstrap(MethodHandles.Lookup lookup, String methodName, TypeDescriptor type, Class<?> recordClass, String names, MethodHandle... getters) throws Throwable
```

Bootstrap method to generate the `equals`,
 `hashCode`, and `toString` methods, based
 on a description of the component names and accessor methods, for either
 `invokedynamic` call sites or dynamic constant pool entries.

 For more detail on the semantics of the generated methods see the specification
 of `equals`, `hashCode` and
 `toString`.

**参数**

- **lookup** — the full-privilege lookup context of the caller
- **methodName** — the name of the method to generate, which must be one of `"equals"`, `"hashCode"`, or `"toString"`
- **type** — a `MethodType` corresponding the descriptor type for the method, which must correspond to the descriptor for the corresponding `Object` method, if linking an `invokedynamic` call site, or the constant `MethodHandle.class`, if linking a dynamic constant
- **recordClass** — the record class hosting the record components
- **names** — the list of component names, joined into a string separated by ";", or the empty string if there are no components. This parameter is ignored if the `methodName` parameter is `"equals"` or `"hashCode"`
- **getters** — method handles for the accessor methods for the components

**返回**

- a call site if invoked by indy, or a method handle if invoked by a condy

**异常**

- **IllegalArgumentException** — if the bootstrap arguments are invalid or inconsistent
- **Throwable** — if any exception is thrown during call site construction
