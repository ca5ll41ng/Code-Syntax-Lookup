---
id: "java-en-function-lookup-findstatic"
language: "java"
lang: "en"
category: "function"
name: "Lookup.findStatic"
signature: "public MethodHandle findStatic(Class<?> refc, String name, MethodType type) throws NoSuchMethodException, IllegalAccessException"
title: "Lookup.findStatic"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.findStatic

```java
public MethodHandle findStatic(Class<?> refc, String name, MethodType type) throws NoSuchMethodException, IllegalAccessException
```

Produces a method handle for a static method.
 The type of the method handle will be that of the method.
 (Since static methods do not take receivers, there is no
 additional receiver argument inserted into the method handle type,
 as there would be with `findVirtual findVirtual` or `findSpecial findSpecial`.)
 The method and all its argument types must be accessible to the lookup object.
 

 The returned method handle will have
 `asVarargsCollector variable arity` if and only if
 the method's variable arity modifier bit (`0x0080`) is set.
 

 If the returned method handle is invoked, the method's class will
 be initialized, if it has not already been initialized.
 

**Example:**
 {@snippet lang="java" :
import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle MH_asList = publicLookup().findStatic(Arrays.class,
  "asList", methodType(List.class, Object[].class));
assertEquals("[x, y]", MH_asList.invoke("x", "y").toString());
 }

**参数**

- **refc** — the class from which the method is accessed
- **name** — the name of the method
- **type** — the type of the method

**返回**

- the desired method handle

**异常**

- **NoSuchMethodException** — if the method does not exist
- **IllegalAccessException** — if access checking fails, or if the method is not `static`, or if the method's variable arity modifier bit is set and `asVarargsCollector` fails
- **NullPointerException** — if any argument is null
