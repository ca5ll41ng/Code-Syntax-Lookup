---
id: "java-en-function-java-lang-invoke-stringconcatfactory"
language: "java"
lang: "en"
category: "function"
name: "java.lang.invoke.StringConcatFactory"
title: "StringConcatFactory"
directive: "type"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/StringConcatFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringConcatFactory

Methods to facilitate the creation of String concatenation methods, that
 can be used to efficiently concatenate a known number of arguments of known
 types, possibly after type adaptation and partial evaluation of arguments.
 These methods are typically used as bootstrap methods for `invokedynamic` call sites, to support the string concatenation
 feature of the Java Programming Language.

 

Indirect access to the behavior specified by the provided `MethodHandle` proceeds in order through two phases:

 
     
- Linkage occurs when the methods in this class are invoked.
 They take as arguments a method type describing the concatenated arguments
 count and types, and optionally the String recipe, plus the
 constants that participate in the String concatenation. The details on
 accepted recipe shapes are described further below. Linkage may involve
 dynamically loading a new class that implements the expected concatenation
 behavior. The `CallSite` holds the `MethodHandle` pointing to the
 exact concatenation method. The concatenation methods may be shared among
 different `CallSite`s, e.g. if linkage methods produce them as pure
 functions.

 
- Invocation occurs when a generated concatenation method is
 invoked with the exact dynamic arguments. This may occur many times for a
 single concatenation method. The method referenced by the behavior `MethodHandle` is invoked with the static arguments and any additional dynamic
 arguments provided on invocation, as if by `invoke`.
 

 

 This class provides two forms of linkage methods: a simple version
 (`makeConcat(java.lang.invoke.MethodHandles.Lookup, String,
 MethodType)`) using only the dynamic arguments, and an advanced version
 (`makeConcatWithConstants(java.lang.invoke.MethodHandles.Lookup,
 String, MethodType, String, Object...)` using the advanced forms of capturing
 the constant arguments. The advanced strategy can produce marginally better
 invocation bytecode, at the expense of exploding the number of shapes of
 string concatenation methods present at runtime, because those shapes would
 include constant static arguments as well.

 

There is a JVM limit (classfile structural constraint): no method
 can call with more than 255 slots. This limits the number of static and
 dynamic arguments one can pass to bootstrap method. Since there are potential
 concatenation strategies that use `MethodHandle` combinators, we need
 to reserve a few empty slots on the parameter lists to capture the
 temporal results. This is why bootstrap methods in this factory do not accept
 more than 200 argument slots. Users requiring more than 200 argument slots in
 concatenation are expected to split the large concatenation in smaller
 expressions.

> *Since 9*
