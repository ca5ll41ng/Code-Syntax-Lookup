---
id: "java-en-function-methodhandle-astype"
language: "java"
lang: "en"
category: "function"
name: "MethodHandle.asType"
signature: "public final MethodHandle asType(MethodType newType)"
title: "MethodHandle.asType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandle.asType

```java
public final MethodHandle asType(MethodType newType)
```

Produces an adapter method handle which adapts the type of the
 current method handle to a new type.
 The resulting method handle is guaranteed to report a type
 which is equal to the desired new type.
 

 If the original type and new type are equal, returns `this`.
 

 The new method handle, when invoked, will perform the following
 steps:
 
 
- Convert the incoming argument list to match the original
     method handle's argument list.
 
- Invoke the original method handle on the converted argument list.
 
- Convert any result returned by the original method handle
     to the return type of new method handle.
 

 

 This method provides the crucial behavioral difference between
 `invokeExact invokeExact` and plain, inexact `invoke invoke`.
 The two methods
 perform the same steps when the caller's type descriptor exactly matches
 the callee's, but when the types differ, plain `invoke invoke`
 also calls `asType` (or some internal equivalent) in order
 to match up the caller's and callee's types.
 

 If the current method is a variable arity method handle
 argument list conversion may involve the conversion and collection
 of several arguments into an array, as
 `asVarargsCollector described elsewhere`.
 In every other case, all conversions are applied pairwise,
 which means that each argument or return value is converted to
 exactly one argument or return value (or no return value).
 The applied conversions are defined by consulting
 the corresponding component types of the old and new
 method handle types.
 

 Let T0 and T1 be corresponding new and old parameter types,
 or old and new return types.  Specifically, for some valid index `i`, let
 T0`=newType.parameterType(i)` and T1`=this.type().parameterType(i)`.
 Or else, going the other way for return values, let
 T0`=this.type().returnType()` and T1`=newType.returnType()`.
 If the types are the same, the new method handle makes no change
 to the corresponding argument or return value (if any).
 Otherwise, one of the following conversions is applied
 if possible:
 
 
- If T0 and T1 are references, then a cast to T1 is applied.
     (The types do not need to be related in any particular way.
     This is because a dynamic value of null can convert to any reference type.)
 
- If T0 and T1 are primitives, then a Java method invocation
     conversion (JLS {@jls 5.3}) is applied, if one exists.
     (Specifically, T0 must convert to T1 by a widening primitive conversion.)
 
- If T0 is a primitive and T1 a reference,
     a Java casting conversion (JLS {@jls 5.5}) is applied if one exists.
     (Specifically, the value is boxed from T0 to its wrapper class,
     which is then widened as needed to T1.)
 
- If T0 is a reference and T1 a primitive, an unboxing
     conversion will be applied at runtime, possibly followed
     by a Java method invocation conversion (JLS {@jls 5.3})
     on the primitive value.  (These are the primitive widening conversions.)
     T0 must be a wrapper class or a supertype of one.
     (In the case where T0 is Object, these are the conversions
     allowed by `invoke java.lang.reflect.Method.invoke`.)
     The unboxing conversion must have a possibility of success, which means that
     if T0 is not itself a wrapper class, there must exist at least one
     wrapper class TW which is a subtype of T0 and whose unboxed
     primitive value can be widened to T1.
 
- If the return type T1 is marked as void, any returned value is discarded
 
- If the return type T0 is void and T1 a reference, a null value is introduced.
 
- If the return type T0 is void and T1 a primitive,
     a zero value is introduced.
 

 (Note: Both T0 and T1 may be regarded as static types,
 because neither corresponds specifically to the dynamic type of any
 actual argument or return value.)
 

 The method handle conversion cannot be made if any one of the required
 pairwise conversions cannot be made.
 

 At runtime, the conversions applied to reference arguments
 or return values may require additional runtime checks which can fail.
 An unboxing operation may fail because the original reference is null,
 causing a `java.lang.NullPointerException NullPointerException`.
 An unboxing operation or a reference cast may also fail on a reference
 to an object of the wrong type,
 causing a `java.lang.ClassCastException ClassCastException`.
 Although an unboxing operation may accept several kinds of wrappers,
 if none are available, a `ClassCastException` will be thrown.

**参数**

- **newType** — the expected type of the new method handle

**返回**

- a method handle which delegates to `this` after performing any necessary argument conversions, and arranges for any necessary return value conversions

**异常**

- **NullPointerException** — if `newType` is a null reference
- **WrongMethodTypeException** — if the conversion cannot be made

**参见**

- MethodHandles#explicitCastArguments
