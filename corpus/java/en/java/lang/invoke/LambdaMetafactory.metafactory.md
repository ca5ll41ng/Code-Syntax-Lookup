---
id: "java-en-function-lambdametafactory-metafactory"
language: "java"
lang: "en"
category: "function"
name: "LambdaMetafactory.metafactory"
signature: "public static CallSite metafactory(MethodHandles.Lookup caller, String interfaceMethodName, MethodType factoryType, MethodType interfaceMethodType, MethodHandle implementation, MethodType dynamicMethodType) throws LambdaConversionException"
title: "LambdaMetafactory.metafactory"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/LambdaMetafactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LambdaMetafactory.metafactory

```java
public static CallSite metafactory(MethodHandles.Lookup caller, String interfaceMethodName, MethodType factoryType, MethodType interfaceMethodType, MethodHandle implementation, MethodType dynamicMethodType) throws LambdaConversionException
```

Facilitates the creation of simple "function objects" that implement one
 or more interfaces by delegation to a provided `MethodHandle`,
 after appropriate type adaptation and partial evaluation of arguments.
 Typically used as a bootstrap method for `invokedynamic`
 call sites, to support the lambda expression and method
 reference expression features of the Java Programming Language.

 

This is the standard, streamlined metafactory; additional flexibility
 is provided by `altMetafactory`.
 A general description of the behavior of this method is provided
 `LambdaMetafactory above`.

 

When the target of the `CallSite` returned from this method is
 invoked, the resulting function objects are instances of a class which
 implements the interface named by the return type of `factoryType`,
 declares a method with the name given by `interfaceMethodName` and the
 signature given by `interfaceMethodType`.  It may also override additional
 methods from `Object`.

**参数**

- **caller** — Represents a lookup context with the accessibility privileges of the caller.  Specifically, the lookup context must have `hasFullPrivilegeAccess() full privilege access`. When used with `invokedynamic`, this is stacked automatically by the VM.
- **interfaceMethodName** — The name of the method to implement.  When used with `invokedynamic`, this is provided by the `NameAndType` of the `InvokeDynamic` structure and is stacked automatically by the VM.
- **factoryType** — The expected signature of the `CallSite`.  The parameter types represent the types of capture variables; the return type is the interface to implement.   When used with `invokedynamic`, this is provided by the `NameAndType` of the `InvokeDynamic` structure and is stacked automatically by the VM.
- **interfaceMethodType** — Signature and return type of method to be implemented by the function object.
- **implementation** — A direct method handle describing the implementation method which should be called (with suitable adaptation of argument types and return types, and with captured arguments prepended to the invocation arguments) at invocation time.
- **dynamicMethodType** — The signature and return type that should be enforced dynamically at invocation time. In simple use cases this is the same as `interfaceMethodType`.

**返回**

- a CallSite whose target can be used to perform capture, generating instances of the interface named by `factoryType`

**异常**

- **LambdaConversionException** — If `caller` does not have full privilege access, or if `interfaceMethodName` is not a valid JVM method name, or if the return type of `factoryType` is not an interface, or if `implementation` is not a direct method handle referencing a method or constructor, or if the linkage invariants are violated, as defined `LambdaMetafactory above`.
- **NullPointerException** — If any argument is `null`.
