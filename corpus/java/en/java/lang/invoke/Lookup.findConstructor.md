---
id: "java-en-function-lookup-findconstructor"
language: "java"
lang: "en"
category: "function"
name: "Lookup.findConstructor"
signature: "public MethodHandle findConstructor(Class<?> refc, MethodType type) throws NoSuchMethodException, IllegalAccessException"
title: "Lookup.findConstructor"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.findConstructor

```java
public MethodHandle findConstructor(Class<?> refc, MethodType type) throws NoSuchMethodException, IllegalAccessException
```

Produces a method handle which creates an object and initializes it, using
 the constructor of the specified type.
 The parameter types of the method handle will be those of the constructor,
 while the return type will be a reference to the constructor's class.
 The constructor and all its argument types must be accessible to the lookup object.
 

 The requested type must have a return type of `void`.
 (This is consistent with the JVM's treatment of constructor type descriptors.)
 

 The returned method handle will have
 `asVarargsCollector variable arity` if and only if
 the constructor's variable arity modifier bit (`0x0080`) is set.
 

 If the returned method handle is invoked, the constructor's class will
 be initialized, if it has not already been initialized.
 

**Example:**
 {@snippet lang="java" :
import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle MH_newArrayList = publicLookup().findConstructor(
  ArrayList.class, methodType(void.class, Collection.class));
Collection orig = Arrays.asList("x", "y");
Collection copy = (ArrayList) MH_newArrayList.invokeExact(orig);
assert(orig != copy);
assertEquals(orig, copy);
// a variable-arity constructor:
MethodHandle MH_newProcessBuilder = publicLookup().findConstructor(
  ProcessBuilder.class, methodType(void.class, String[].class));
ProcessBuilder pb = (ProcessBuilder)
  MH_newProcessBuilder.invoke("x", "y", "z");
assertEquals("[x, y, z]", pb.command().toString());
 }

**参数**

- **refc** — the class or interface from which the method is accessed
- **type** — the type of the method, with the receiver argument omitted, and a void return type

**返回**

- the desired method handle

**异常**

- **NoSuchMethodException** — if the constructor does not exist
- **IllegalAccessException** — if access checking fails or if the method's variable arity modifier bit is set and `asVarargsCollector` fails
- **NullPointerException** — if any argument is null
