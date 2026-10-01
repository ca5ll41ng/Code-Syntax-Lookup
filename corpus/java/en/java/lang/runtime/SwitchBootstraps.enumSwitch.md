---
id: "java-en-function-switchbootstraps-enumswitch"
language: "java"
lang: "en"
category: "function"
name: "SwitchBootstraps.enumSwitch"
signature: "public static CallSite enumSwitch(MethodHandles.Lookup lookup, String invocationName, MethodType invocationType, Object... labels)"
title: "SwitchBootstraps.enumSwitch"
directive: "method"
module: "java.base/java.lang.runtime"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/runtime/SwitchBootstraps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SwitchBootstraps.enumSwitch

```java
public static CallSite enumSwitch(MethodHandles.Lookup lookup, String invocationName, MethodType invocationType, Object... labels)
```

Bootstrap method for linking an `invokedynamic` call site that
 implements a `switch` on a target of an enum type. The static
 arguments are used to encode the case labels associated to the switch
 construct, where each label can be encoded in two ways:
 
   
- as a `String` value, which represents the name of
       the enum constant associated with the label
   
- as a `Class` value, which represents the enum type
       associated with a type test pattern
 

 

 The returned `CallSite`'s method handle will have
 a return type of `int` and accepts two parameters: the first argument
 will be an `Enum` instance (`target`) and the second
 will be `int` (`restart`).
 

 If the `target` is `null`, then the method of the call site
 returns -1.
 

 If the `target` is not `null`, then the method of the call site
 returns the index of the first element in the `labels` array starting from
 the `restart` index matching one of the following conditions:
 
   
- the element is of type `Class` that is assignable
       from the target's class; or
   
- the element is of type `String` and equals to the target
       enum constant's `name`.
 

 

 If for a given `target` there is no element in the `labels`
 fulfilling one of the above conditions, then the method of the call
 site returns the length of the `labels` array.
 

 The value of the `restart` index must be between `0` (inclusive) and
 the length of the `labels` array (inclusive),
 or an `IndexOutOfBoundsException` is thrown.

 values that do not represent any enum constants at runtime.

**参数**

- **lookup** — the full-privilege lookup context of the caller
- **invocationName** — unused, `null` is permitted
- **invocationType** — The invocation type of the `CallSite` with two parameters, an enum type, an `int`, and `int` as a return type.
- **labels** — case labels - `String` constants and `Class` instances, in any combination

**返回**

- a `CallSite` returning the first matching element as described above

**异常**

- **IllegalArgumentException** — if any element in the labels array is null
- **IllegalArgumentException** — if any element in the labels array is an empty `String`
- **IllegalArgumentException** — if the invocation type is not a method type whose first parameter type is an enum type, second parameter of type `int` and whose return type is `int`
- **IllegalArgumentException** — if `labels` contains an element that is not of type `String` or `Class` equal to the target enum type
