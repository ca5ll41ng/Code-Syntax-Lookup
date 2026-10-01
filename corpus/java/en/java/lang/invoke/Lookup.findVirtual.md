---
id: "java-en-function-lookup-findvirtual"
language: "java"
lang: "en"
category: "function"
name: "Lookup.findVirtual"
signature: "public MethodHandle findVirtual(Class<?> refc, String name, MethodType type) throws NoSuchMethodException, IllegalAccessException"
title: "Lookup.findVirtual"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.findVirtual

```java
public MethodHandle findVirtual(Class<?> refc, String name, MethodType type) throws NoSuchMethodException, IllegalAccessException
```

Produces a method handle for a virtual method.
 The type of the method handle will be that of the method,
 with the receiver type (usually `refc`) prepended.
 The method and all its argument types must be accessible to the lookup object.
 

 When called, the handle will treat the first argument as a receiver
 and, for non-private methods, dispatch on the receiver's type to determine which method
 implementation to enter.
 For private methods the named method in `refc` will be invoked on the receiver.
 (The dispatching action is identical with that performed by an
 `invokevirtual` or `invokeinterface` instruction.)
 

 The first argument will be of type `refc` if the lookup
 class has full privileges to access the member.  Otherwise
 the member must be `protected` and the first argument
 will be restricted in type to the lookup class.
 

 The returned method handle will have
 `asVarargsCollector variable arity` if and only if
 the method's variable arity modifier bit (`0x0080`) is set.
 

 Because of the general equivalence between `invokevirtual`
 instructions and method handles produced by `findVirtual`,
 if the class is `MethodHandle` and the name string is
 `invokeExact` or `invoke`, the resulting
 method handle is equivalent to one produced by
 `exactInvoker MethodHandles.exactInvoker` or
 `invoker MethodHandles.invoker`
 with the same `type` argument.
 

 If the class is `VarHandle` and the name string corresponds to
 the name of a signature-polymorphic access mode method, the resulting
 method handle is equivalent to one produced by
 `varHandleInvoker` with
 the access mode corresponding to the name string and with the same
 `type` arguments.
 

 **Example:**
 {@snippet lang="java" :
import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle MH_concat = publicLookup().findVirtual(String.class,
  "concat", methodType(String.class, String.class));
MethodHandle MH_hashCode = publicLookup().findVirtual(Object.class,
  "hashCode", methodType(int.class));
MethodHandle MH_hashCode_String = publicLookup().findVirtual(String.class,
  "hashCode", methodType(int.class));
assertEquals("xy", (String) MH_concat.invokeExact("x", "y"));
assertEquals("xy".hashCode(), (int) MH_hashCode.invokeExact((Object)"xy"));
assertEquals("xy".hashCode(), (int) MH_hashCode_String.invokeExact("xy"));
// interface method:
MethodHandle MH_subSequence = publicLookup().findVirtual(CharSequence.class,
  "subSequence", methodType(CharSequence.class, int.class, int.class));
assertEquals("def", MH_subSequence.invoke("abcdefghi", 3, 6).toString());
// constructor "internal method" must be accessed differently:
MethodType MT_newString = methodType(void.class); //()V for new String()
try { assertEquals("impossible", lookup()
        .findVirtual(String.class, "", MT_newString));
 } catch (NoSuchMethodException ex) { } // OK
MethodHandle MH_newString = publicLookup()
  .findConstructor(String.class, MT_newString);
assertEquals("", (String) MH_newString.invokeExact());
 }

**参数**

- **refc** — the class or interface from which the method is accessed
- **name** — the name of the method
- **type** — the type of the method, with the receiver argument omitted

**返回**

- the desired method handle

**异常**

- **NoSuchMethodException** — if the method does not exist
- **IllegalAccessException** — if access checking fails, or if the method is `static`, or if the method's variable arity modifier bit is set and `asVarargsCollector` fails
- **NullPointerException** — if any argument is null
