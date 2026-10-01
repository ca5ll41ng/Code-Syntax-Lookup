---
id: "java-en-function-java-lang-classfile-signature-classtypesig"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.Signature.ClassTypeSig"
title: "ClassTypeSig"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassTypeSig

Models the signature of a possibly-parameterized class or interface type.
 

 These are examples of class type signatures:
 
 
- `Lcom/example/Outer;` for `Outer`
 
Has class name `com/example/Outer` and no outer type or type
     argument.
 
- `Lcom/example/Outer$Nested;` for `Outer.Nested`
 
Has class name `com/example/Outer$Nested` representing a nested
     class, no outer type, and a single type argument of type variable
     `A`.
 
- `Lcom/example/GenericOuter.Inner;` for `GenericOuter.Inner`
 
Has class name `Inner`, a simple class name, outer type
     `Lcom/example/GenericOuter;` for `GenericOuter`,
     and no type argument.
 

 

 If the `outerType() outer type` exists, the `className() class name` is the simple name of the nested type.
 Otherwise, it is a `#internalname binary name in
 internal form` (separated by `/`).
 

 If a nested type does not have any enclosing parameterization, it may
 be represented without an outer type and as an internal binary name,
 in which nesting is represented by `$` instead of `.`.

**参见**

- Type
- ParameterizedType

> *Since 24*
