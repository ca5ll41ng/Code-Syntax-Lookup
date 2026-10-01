---
id: "java-en-function-java-lang-invoke-methodhandleinfo"
language: "java"
lang: "en"
category: "function"
name: "java.lang.invoke.MethodHandleInfo"
title: "MethodHandleInfo"
directive: "type"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandleInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleInfo

A symbolic reference obtained by cracking a direct method handle
 into its constituent symbolic parts.
 To crack a direct method handle, call `revealDirect Lookup.revealDirect`.
 Direct Method Handles
 A direct method handle represents a method, constructor, or field without
 any intervening argument bindings or other transformations.
 The method, constructor, or field referred to by a direct method handle is called
 its underlying member.
 Direct method handles may be obtained in any of these ways:
 
 
- By executing an `ldc` instruction on a `CONSTANT_MethodHandle` constant.
     (See the Java Virtual Machine Specification, sections {@jvms
     4.4.8} and {@jvms 5.4.3}.)
 
- By calling one of the Lookup Factory Methods,
     such as `findVirtual Lookup.findVirtual`,
     to resolve a symbolic reference into a method handle.
     A symbolic reference consists of a class, name string, and type.
 
- By calling the factory method `unreflect Lookup.unreflect`
     or `unreflectSpecial Lookup.unreflectSpecial`
     to convert a `Method` into a method handle.
 
- By calling the factory method `unreflectConstructor Lookup.unreflectConstructor`
     to convert a `Constructor` into a method handle.
 
- By calling the factory method `unreflectGetter Lookup.unreflectGetter`
     or `unreflectSetter Lookup.unreflectSetter`
     to convert a `Field` into a method handle.
 

 Restrictions on Cracking
 Given a suitable `Lookup` object, it is possible to crack any direct method handle
 to recover a symbolic reference for the underlying method, constructor, or field.
 Cracking must be done via a `Lookup` object equivalent to that which created
 the target method handle, or which has enough access permissions to recreate
 an equivalent method handle.
 

 If the underlying method is caller sensitive,
 the direct method handle will have been "bound" to a particular caller class, the
 `lookupClass() lookup class`
 of the lookup object used to create it.
 Cracking this method handle with a different lookup class will fail
 even if the underlying method is public (like `Class.forName`).
 

 The requirement of lookup object matching provides a "fast fail" behavior
 for programs which may otherwise trust erroneous revelation of a method
 handle with symbolic information (or caller binding) from an unexpected scope.
 Use `reflectAs` to override this limitation.

 Reference kinds
 The Lookup Factory Methods
 correspond to all major use cases for methods, constructors, and fields.
 These use cases may be distinguished using small integers as follows:
 
 reference kinds
 
 reference kinddescriptive namescopememberbehavior
 
 
 
     `1``REF_getField``class`
     `FT f;``(T) this.f;`
 
 
     `2``REF_getStatic``class` or `interface`
     `static`
`FT f;``(T) C.f;`
 
 
     `3``REF_putField``class`
     `FT f;``this.f = x;`
 
 
     `4``REF_putStatic``class`
     `static`
`FT f;``C.f = arg;`
 
 
     `5``REF_invokeVirtual``class`
     `T m(A*);``(T) this.m(arg*);`
 
 
     `6``REF_invokeStatic``class` or `interface`
     `static`
`T m(A*);``(T) C.m(arg*);`
 
 
     `7``REF_invokeSpecial``class` or `interface`
     `T m(A*);``(T) super.m(arg*);`
 
 
     `8``REF_newInvokeSpecial``class`
     `C(A*);``new C(arg*);`
 
 
     `9``REF_invokeInterface``interface`
     `T m(A*);``(T) this.m(arg*);`

> *Since 1.8*
