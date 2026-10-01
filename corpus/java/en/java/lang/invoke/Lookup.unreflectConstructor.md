---
id: "java-en-function-lookup-unreflectconstructor"
language: "java"
lang: "en"
category: "function"
name: "Lookup.unreflectConstructor"
signature: "public MethodHandle unreflectConstructor(Constructor<?> c) throws IllegalAccessException"
title: "Lookup.unreflectConstructor"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.unreflectConstructor

```java
public MethodHandle unreflectConstructor(Constructor<?> c) throws IllegalAccessException
```

Produces a method handle for a reflected constructor.
 The type of the method handle will be that of the constructor,
 with the return type changed to the declaring class.
 The method handle will perform a `newInstance` operation,
 creating a new instance of the constructor's class on the
 arguments passed to the method handle.
 

 If the constructor's `accessible` flag is not set,
 access checking is performed immediately on behalf of the lookup class.
 

 The returned method handle will have
 `asVarargsCollector variable arity` if and only if
 the constructor's variable arity modifier bit (`0x0080`) is set.
 

 If the returned method handle is invoked, the constructor's class will
 be initialized, if it has not already been initialized.

**参数**

- **c** — the reflected constructor

**返回**

- a method handle which can invoke the reflected constructor

**异常**

- **IllegalAccessException** — if access checking fails or if the method's variable arity modifier bit is set and `asVarargsCollector` fails
- **NullPointerException** — if the argument is null
