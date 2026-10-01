---
id: "java-en-function-methodhandle-invokewitharguments"
language: "java"
lang: "en"
category: "function"
name: "MethodHandle.invokeWithArguments"
signature: "public Object invokeWithArguments(Object... arguments) throws Throwable"
title: "MethodHandle.invokeWithArguments"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandle.invokeWithArguments

```java
public Object invokeWithArguments(Object... arguments) throws Throwable
```

Performs a variable arity invocation, passing the arguments in the given array
 to the method handle, as if via an inexact `invoke invoke` from a call site
 which mentions only the type `Object`, and whose actual argument count is the length
 of the argument array.
 

 Specifically, execution proceeds as if by the following steps,
 although the methods are not guaranteed to be called if the JVM
 can predict their effects.
 
 
- Determine the length of the argument array as `N`.
     For a null reference, `N=0`. 
 
- Collect the `N` elements of the array as a logical
     argument list, each argument statically typed as an `Object`. 
 
- Determine, as `M`, the parameter count of the type of this
     method handle. 
 
- Determine the general type `TN` of `N` arguments or
     `M` arguments, if smaller than `N`, as
     `TN=MethodType.genericMethodType(Math.min(N, M))`.
 
- If `N` is greater than `M`, perform the following
     checks and actions to shorten the logical argument list: 
     
- Check that this method handle has variable arity with a
         `lastParameterType trailing parameter`
         of some array type `A[]`.  If not, fail with a
         `WrongMethodTypeException`. 
     
- Collect the trailing elements (there are `N-M+1` of them)
         from the logical argument list into a single array of
         type `A[]`, using `asType` conversions to
         convert each trailing argument to type `A`. 
     
- If any of these conversions proves impossible, fail with either
         a `ClassCastException` if any trailing element cannot be
         cast to `A` or a `NullPointerException` if any
         trailing element is `null` and `A` is not a reference
         type. 
     
- Replace the logical arguments gathered into the array of
         type `A[]` with the array itself, thus shortening
         the argument list to length `M`. This final argument
         retains the static type `A[]`.
     
- Adjust the type `TN` by changing the `N`th
         parameter type from `Object` to `A[]`.
     

 
- Force the original target method handle `MH0` to the
     required type, as `MH1 = MH0.asType(TN)`. 
 
- Spread the argument list into `N` separate arguments `A0, ...`. 
 
- Invoke the type-adjusted method handle on the unpacked arguments:
     MH1.invokeExact(A0, ...). 
 
- Take the return value as an `Object` reference. 
 

 

 If the target method handle has variable arity, and the argument list is longer
 than that arity, the excess arguments, starting at the position of the trailing
 array argument, will be gathered (if possible, as if by `asType` conversions)
 into an array of the appropriate type, and invocation will proceed on the
 shortened argument list.
 In this way, jumbo argument lists which would spread into more
 than 254 slots can still be processed uniformly.
 

 Unlike the `invoke(Object...) generic` invocation mode, which can
 "recycle" an array argument, passing it directly to the target method,
 this invocation mode always creates a new array parameter, even
 if the original array passed to `invokeWithArguments` would have
 been acceptable as a direct argument to the target method.
 Even if the number `M` of actual arguments is the arity `N`,
 and the last argument is dynamically a suitable array of type `A[]`,
 it will still be boxed into a new one-element array, since the call
 site statically types the argument as `Object`, not an array type.
 This is not a special rule for this method, but rather a regular effect
 of the `asVarargsCollector rules for variable-arity invocation`.
 

 Because of the action of the `asType` step, the following argument
 conversions are applied as necessary:
 
 
- reference casting
 
- unboxing
 
- widening primitive conversions
 
- variable arity conversion
 

 

 The result returned by the call is boxed if it is a primitive,
 or forced to null if the return type is void.
 

 Unlike the signature polymorphic methods `invokeExact` and `invoke`,
 `invokeWithArguments` can be accessed normally via the Core Reflection API and JNI.
 It can therefore be used as a bridge between native or reflective code and method handles.
 This call is approximately equivalent to the following code:
 {@snippet lang="java" :
 // for jumbo argument lists, adapt varargs explicitly:
 int N = (arguments == null? 0: arguments.length);
 int M = this.type.parameterCount();
 int MAX_SAFE = 127;  // 127 longs require 254 slots, which is OK
 if (N > MAX_SAFE && N > M && this.isVarargsCollector()) {
   Class<?> arrayType = this.type().lastParameterType();
   Class<?> elemType = arrayType.getComponentType();
   if (elemType != null) {
     Object args2 = Array.newInstance(elemType, M);
     MethodHandle arraySetter = MethodHandles.arrayElementSetter(arrayType);
     for (int i = 0; i < M; i++) {
       arraySetter.invoke(args2, i, arguments[M-1 + i]);
     }
     arguments = Arrays.copyOf(arguments, M);
     arguments[M-1] = args2;
     return this.asFixedArity().invokeWithArguments(arguments);
   }
 } // done with explicit varargs processing

 // Handle fixed arity and non-jumbo variable arity invocation.
 MethodHandle invoker = MethodHandles.spreadInvoker(this.type(), 0);
 Object result = invoker.invokeExact(this, arguments);
 }

**参数**

- **arguments** — the arguments to pass to the target

**返回**

- the result returned by the target

**异常**

- **ClassCastException** — if an argument cannot be converted by reference casting
- **WrongMethodTypeException** — if the target's type cannot be adjusted to take the given number of `Object` arguments
- **Throwable** — anything thrown by the target method invocation

**参见**

- MethodHandles#spreadInvoker
