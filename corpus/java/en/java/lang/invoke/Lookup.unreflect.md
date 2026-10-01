---
id: "java-en-function-lookup-unreflect"
language: "java"
lang: "en"
category: "function"
name: "Lookup.unreflect"
signature: "public MethodHandle unreflect(Method m) throws IllegalAccessException"
title: "Lookup.unreflect"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.unreflect

```java
public MethodHandle unreflect(Method m) throws IllegalAccessException
```

Makes a direct method handle
 to m, if the lookup class has permission.
 If m is non-static, the receiver argument is treated as an initial argument.
 If m is virtual, overriding is respected on every call.
 Unlike the Core Reflection API, exceptions are not wrapped.
 The type of the method handle will be that of the method,
 with the receiver type prepended (but only if it is non-static).
 If the method's `accessible` flag is not set,
 access checking is performed immediately on behalf of the lookup class.
 If m is not public, do not share the resulting handle with untrusted parties.
 

 The returned method handle will have
 `asVarargsCollector variable arity` if and only if
 the method's variable arity modifier bit (`0x0080`) is set.
 

 If m is static, and
 if the returned method handle is invoked, the method's class will
 be initialized, if it has not already been initialized.

**参数**

- **m** — the reflected method

**返回**

- a method handle which can invoke the reflected method

**异常**

- **IllegalAccessException** — if access checking fails or if the method's variable arity modifier bit is set and `asVarargsCollector` fails
- **NullPointerException** — if the argument is null
