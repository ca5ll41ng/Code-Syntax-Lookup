---
id: "java-en-function-lambdametafactory-altmetafactory"
language: "java"
lang: "en"
category: "function"
name: "LambdaMetafactory.altMetafactory"
signature: "public static CallSite altMetafactory(MethodHandles.Lookup caller, String interfaceMethodName, MethodType factoryType, Object... args) throws LambdaConversionException"
title: "LambdaMetafactory.altMetafactory"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/LambdaMetafactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LambdaMetafactory.altMetafactory

```java
public static CallSite altMetafactory(MethodHandles.Lookup caller, String interfaceMethodName, MethodType factoryType, Object... args) throws LambdaConversionException
```

Facilitates the creation of simple "function objects" that implement one
 or more interfaces by delegation to a provided `MethodHandle`,
 after appropriate type adaptation and partial evaluation of arguments.
 Typically used as a bootstrap method for `invokedynamic`
 call sites, to support the lambda expression and method
 reference expression features of the Java Programming Language.

 

This is the general, more flexible metafactory; a streamlined version
 is provided by `metafactory(java.lang.invoke.MethodHandles.Lookup,
 String, MethodType, MethodType, MethodHandle, MethodType)`.
 A general description of the behavior of this method is provided
 `LambdaMetafactory above`.

 

The argument list for this method includes three fixed parameters,
 corresponding to the parameters automatically stacked by the VM for the
 bootstrap method in an `invokedynamic` invocation, and an `Object[]`
 parameter that contains additional parameters.  The declared argument
 list for this method is:

 
```
`CallSite altMetafactory(MethodHandles.Lookup caller,
                          String interfaceMethodName,
                          MethodType factoryType,
                          Object... args)
 `
```

 

but it behaves as if the argument list is as follows:

 
```
`CallSite altMetafactory(MethodHandles.Lookup caller,
                          String interfaceMethodName,
                          MethodType factoryType,
                          MethodType interfaceMethodType,
                          MethodHandle implementation,
                          MethodType dynamicMethodType,
                          int flags,
                          int altInterfaceCount,        // IF flags has MARKERS set
                          Class... altInterfaces,       // IF flags has MARKERS set
                          int altMethodCount,           // IF flags has BRIDGES set
                          MethodType... altMethods      // IF flags has BRIDGES set
                          )
 `
```

 

Arguments that appear in the argument list for
 `metafactory`
 have the same specification as in that method.  The additional arguments
 are interpreted as follows:
 
     
- `flags` indicates additional options; this is a bitwise
     OR of desired flags.  Defined flags are `FLAG_BRIDGES`,
     `FLAG_MARKERS`, and `FLAG_SERIALIZABLE`.
     
- `altInterfaceCount` is the number of additional interfaces
     the function object should implement, and is present if and only if the
     `FLAG_MARKERS` flag is set.
     
- `altInterfaces` is a variable-length list of additional
     interfaces to implement, whose length equals `altInterfaceCount`,
     and is present if and only if the `FLAG_MARKERS` flag is set.
     
- `altMethodCount` is the number of additional method signatures
     the function object should implement, and is present if and only if
     the `FLAG_BRIDGES` flag is set.
     
- `altMethods` is a variable-length list of additional
     methods signatures to implement, whose length equals `altMethodCount`,
     and is present if and only if the `FLAG_BRIDGES` flag is set.
 

 

Each class named by `altInterfaces` is subject to the same
 restrictions as `Rd`, the return type of `factoryType`,
 as described `LambdaMetafactory above`.  Each `MethodType`
 named by `altMethods` is subject to the same restrictions as
 `interfaceMethodType`, as described `LambdaMetafactory above`.

 

When FLAG_SERIALIZABLE is set in `flags`, the function objects
 will implement `Serializable`, and will have a `writeReplace`
 method that returns an appropriate `SerializedLambda`.  The
 `caller` class must have an appropriate `$deserializeLambda$`
 method, as described in `SerializedLambda`.

 

When the target of the `CallSite` returned from this method is
 invoked, the resulting function objects are instances of a class with
 the following properties:
 
     
- The class implements the interface named by the return type
     of `factoryType` and any interfaces named by `altInterfaces`
     
- The class declares methods with the name given by `interfaceMethodName`,
     and the signature given by `interfaceMethodType` and additional signatures
     given by `altMethods`
     
- The class may override methods from `Object`, and may
     implement methods related to serialization.

**参数**

- **caller** — Represents a lookup context with the accessibility privileges of the caller.  Specifically, the lookup context must have `hasFullPrivilegeAccess() full privilege access`. When used with `invokedynamic`, this is stacked automatically by the VM.
- **interfaceMethodName** — The name of the method to implement.  When used with `invokedynamic`, this is provided by the `NameAndType` of the `InvokeDynamic` structure and is stacked automatically by the VM.
- **factoryType** — The expected signature of the `CallSite`.  The parameter types represent the types of capture variables; the return type is the interface to implement.   When used with `invokedynamic`, this is provided by the `NameAndType` of the `InvokeDynamic` structure and is stacked automatically by the VM.
- **args** — An array of `Object` containing the required arguments `interfaceMethodType`, `implementation`, `dynamicMethodType`, `flags`, and any optional arguments, as described above

**返回**

- a CallSite whose target can be used to perform capture, generating instances of the interface named by `factoryType`

**异常**

- **LambdaConversionException** — If `caller` does not have full privilege access, or if `interfaceMethodName` is not a valid JVM method name, or if the return type of `factoryType` is not an interface, or if any of `altInterfaces` is not an interface, or if `implementation` is not a direct method handle referencing a method or constructor, or if the linkage invariants are violated, as defined `LambdaMetafactory above`.
- **NullPointerException** — If any argument, or any component of `args`, is `null`.
- **IllegalArgumentException** — If the number or types of the components of `args` do not follow the above rules, or if `altInterfaceCount` or `altMethodCount` are negative integers.
