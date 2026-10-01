---
id: "java-en-function-lookup-bind"
language: "java"
lang: "en"
category: "function"
name: "Lookup.bind"
signature: "public MethodHandle bind(Object receiver, String name, MethodType type) throws NoSuchMethodException, IllegalAccessException"
title: "Lookup.bind"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.bind

```java
public MethodHandle bind(Object receiver, String name, MethodType type) throws NoSuchMethodException, IllegalAccessException
```

Produces an early-bound method handle for a non-static method.
 The receiver must have a supertype `defc` in which a method
 of the given name and type is accessible to the lookup class.
 The method and all its argument types must be accessible to the lookup object.
 The type of the method handle will be that of the method,
 without any insertion of an additional receiver parameter.
 The given receiver will be bound into the method handle,
 so that every call to the method handle will invoke the
 requested method on the given receiver.
 

 The returned method handle will have
 `asVarargsCollector variable arity` if and only if
 the method's variable arity modifier bit (`0x0080`) is set
 and the trailing array argument is not the only argument.
 (If the trailing array argument is the only argument,
 the given receiver value will be bound to it.)
 

 This is almost equivalent to the following code, with some differences noted below:
 {@snippet lang="java" :
import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle mh0 = lookup().findVirtual(defc, name, type);
MethodHandle mh1 = mh0.bindTo(receiver);
mh1 = mh1.withVarargs(mh0.isVarargsCollector());
return mh1;
 }
 where `defc` is either `receiver.getClass()` or a super
 type of that class, in which the requested method is accessible
 to the lookup class.
 (Unlike `bind`, `bindTo` does not preserve variable arity.
 Also, `bindTo` may throw a `ClassCastException` in instances where `bind` would
 throw an `IllegalAccessException`, as in the case where the member is `protected` and
 the receiver is restricted by `findVirtual` to the lookup class.)

**参数**

- **receiver** — the object from which the method is accessed
- **name** — the name of the method
- **type** — the type of the method, with the receiver argument omitted

**返回**

- the desired method handle

**异常**

- **NoSuchMethodException** — if the method does not exist
- **IllegalAccessException** — if access checking fails or if the method's variable arity modifier bit is set and `asVarargsCollector` fails
- **NullPointerException** — if any argument is null

**参见**

- MethodHandle#bindTo
- #findVirtual
