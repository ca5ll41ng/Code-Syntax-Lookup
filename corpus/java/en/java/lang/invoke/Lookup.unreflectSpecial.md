---
id: "java-en-function-lookup-unreflectspecial"
language: "java"
lang: "en"
category: "function"
name: "Lookup.unreflectSpecial"
signature: "public MethodHandle unreflectSpecial(Method m, Class<?> specialCaller) throws IllegalAccessException"
title: "Lookup.unreflectSpecial"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.unreflectSpecial

```java
public MethodHandle unreflectSpecial(Method m, Class<?> specialCaller) throws IllegalAccessException
```

Produces a method handle for a reflected method.
 It will bypass checks for overriding methods on the receiver,
 as if called from an `invokespecial`
 instruction from within the explicitly specified `specialCaller`.
 The type of the method handle will be that of the method,
 with a suitably restricted receiver type prepended.
 (The receiver type will be `specialCaller` or a subtype.)
 If the method's `accessible` flag is not set,
 access checking is performed immediately on behalf of the lookup class,
 as if `invokespecial` instruction were being linked.
 

 Before method resolution,
 if the explicitly specified caller class is not identical with the
 lookup class, or if this lookup object does not have
 private access
 privileges, the access fails.
 

 The returned method handle will have
 `asVarargsCollector variable arity` if and only if
 the method's variable arity modifier bit (`0x0080`) is set.

**参数**

- **m** — the reflected method
- **specialCaller** — the class nominally calling the method

**返回**

- a method handle which can invoke the reflected method

**异常**

- **IllegalAccessException** — if access checking fails, or if the method is `static`, or if the method's variable arity modifier bit is set and `asVarargsCollector` fails
- **NullPointerException** — if any argument is null
