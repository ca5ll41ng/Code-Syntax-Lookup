---
id: "java-en-function-switchbootstraps-typeswitch"
language: "java"
lang: "en"
category: "function"
name: "SwitchBootstraps.typeSwitch"
signature: "public static CallSite typeSwitch(MethodHandles.Lookup lookup, String invocationName, MethodType invocationType, Object... labels)"
title: "SwitchBootstraps.typeSwitch"
directive: "method"
module: "java.base/java.lang.runtime"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/runtime/SwitchBootstraps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SwitchBootstraps.typeSwitch

```java
public static CallSite typeSwitch(MethodHandles.Lookup lookup, String invocationName, MethodType invocationType, Object... labels)
```

Bootstrap method for linking an `invokedynamic` call site that
 implements a `switch` over a target value. The static arguments
 `labels` are an array of case labels which must be non-null and of
 type `String`, `Integer`, `Class`, or `EnumDesc`.
 In addition, when preview features are enabled, `Long`, `Float`,
 `Double`, and `Boolean` labels are also permitted.
 

 The type of the returned `CallSite`'s method handle will have
 a return type of `int`.   It has two parameters: the first argument
 will be a value of the (`target`) type and the second
 will be `int` (`restart`).
 

 If the `target` is `null`, then the method of the call site
 returns -1.
 

 If the `target` is not `null`, then the method of the call site
 returns the index of the first element in the `labels` array starting from
 the `restart` index matching one of the following conditions:
 
   
- the element is of type `Class` that is assignable
       from the target's class
   
- the element is of type `String` and `equals` to the target
   
- the element is of type `Integer` and `==` to the target after
       unboxing if necessary
   
- (Preview) the element is of type `Long` or `Boolean`
       and `==` to the target after unboxing if necessary
   
- (Preview) the element is of type `Float` or `Double`
       and `equals` to the target after boxing if necessary
   
- the element is of type `EnumDesc`, that describes an enum constant
       that is `==` to the target
 

 

 If no element in the `labels` array matches the target, then
 the method of the call site return the length of the `labels` array.
 

 The value of the `restart` index must be between `0` (inclusive) and
 the length of the `labels` array (inclusive),
 both  or an `IndexOutOfBoundsException` is thrown.

**参数**

- **lookup** — the full-privilege lookup context of the caller
- **invocationName** — unused, `null` is permitted
- **invocationType** — The invocation type of the `CallSite` with two parameters, a target type, an `int`, and `int` as a return type.
- **labels** — case labels as described above

**返回**

- a `CallSite` returning the first matching element as described above

**异常**

- **IllegalArgumentException** — if any element in the labels array is null
- **IllegalArgumentException** — if the invocation type is not a method type of first parameter of a target type, second parameter of type `int` and with `int` as its return type
- **IllegalArgumentException** — if `labels` contains an element that is not of type `String`, `Integer`, `Long`, `Float`, `Double`, `Boolean`, `Class` or `EnumDesc`
- **IllegalArgumentException** — if preview features are disabled and if `labels` contains an element that is of type `Long`, `Float`, `Double`, or `Boolean`
