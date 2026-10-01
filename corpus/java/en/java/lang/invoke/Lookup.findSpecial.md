---
id: "java-en-function-lookup-findspecial"
language: "java"
lang: "en"
category: "function"
name: "Lookup.findSpecial"
signature: "public MethodHandle findSpecial(Class<?> refc, String name, MethodType type, Class<?> specialCaller) throws NoSuchMethodException, IllegalAccessException"
title: "Lookup.findSpecial"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.findSpecial

```java
public MethodHandle findSpecial(Class<?> refc, String name, MethodType type, Class<?> specialCaller) throws NoSuchMethodException, IllegalAccessException
```

Produces an early-bound method handle for a virtual method.
 It will bypass checks for overriding methods on the receiver,
 as if called from an `invokespecial`
 instruction from within the explicitly specified `specialCaller`.
 The type of the method handle will be that of the method,
 with a suitably restricted receiver type prepended.
 (The receiver type will be `specialCaller` or a subtype.)
 The method and all its argument types must be accessible
 to the lookup object.
 

 Before method resolution,
 if the explicitly specified caller class is not identical with the
 lookup class, or if this lookup object does not have
 private access
 privileges, the access fails.
 

 The returned method handle will have
 `asVarargsCollector variable arity` if and only if
 the method's variable arity modifier bit (`0x0080`) is set.
 
 (Note:  JVM internal methods named `ConstantDescs#INIT_NAME`
 are not visible to this API,
 even though the `invokespecial` instruction can refer to them
 in special circumstances.  Use `findConstructor findConstructor`
 to access instance initialization methods in a safe manner.)
 

**Example:**
 {@snippet lang="java" :
import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
static class Listie extends ArrayList {
  public String toString() { return "[wee Listie]"; }
  static Lookup lookup() { return MethodHandles.lookup(); }
}
...
// no access to constructor via invokeSpecial:
MethodHandle MH_newListie = Listie.lookup()
  .findConstructor(Listie.class, methodType(void.class));
Listie l = (Listie) MH_newListie.invokeExact();
try { assertEquals("impossible", Listie.lookup().findSpecial(
        Listie.class, "", methodType(void.class), Listie.class));
 } catch (NoSuchMethodException ex) { } // OK
// access to super and self methods via invokeSpecial:
MethodHandle MH_super = Listie.lookup().findSpecial(
  ArrayList.class, "toString" , methodType(String.class), Listie.class);
MethodHandle MH_this = Listie.lookup().findSpecial(
  Listie.class, "toString" , methodType(String.class), Listie.class);
MethodHandle MH_duper = Listie.lookup().findSpecial(
  Object.class, "toString" , methodType(String.class), Listie.class);
assertEquals("[]", (String) MH_super.invokeExact(l));
assertEquals(""+l, (String) MH_this.invokeExact(l));
assertEquals("[]", (String) MH_duper.invokeExact(l)); // ArrayList method
try { assertEquals("inaccessible", Listie.lookup().findSpecial(
        String.class, "toString", methodType(String.class), Listie.class));
 } catch (IllegalAccessException ex) { } // OK
Listie subl = new Listie() { public String toString() { return "[subclass]"; } };
assertEquals(""+l, (String) MH_this.invokeExact(subl)); // Listie method
 }

**参数**

- **refc** — the class or interface from which the method is accessed
- **name** — the name of the method (which must not be "&lt;init&gt;")
- **type** — the type of the method, with the receiver argument omitted
- **specialCaller** — the proposed calling class to perform the `invokespecial`

**返回**

- the desired method handle

**异常**

- **NoSuchMethodException** — if the method does not exist
- **IllegalAccessException** — if access checking fails, or if the method is `static`, or if the method's variable arity modifier bit is set and `asVarargsCollector` fails
- **NullPointerException** — if any argument is null
