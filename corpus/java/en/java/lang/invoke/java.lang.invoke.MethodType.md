---
id: "java-en-function-java-lang-invoke-methodtype"
language: "java"
lang: "en"
category: "function"
name: "java.lang.invoke.MethodType"
title: "MethodType"
directive: "type"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType

A method type represents the arguments and return type accepted and
 returned by a method handle, or the arguments and return type passed
 and expected  by a method handle caller.  Method types must be properly
 matched between a method handle and all its callers,
 and the JVM's operations enforce this matching at, specifically
 during calls to `invokeExact MethodHandle.invokeExact`
 and `invoke MethodHandle.invoke`, and during execution
 of `invokedynamic` instructions.
 

 The structure is a return type accompanied by any number of parameter types.
 The types (primitive, `void`, and reference) are represented by `Class` objects.
 (For ease of exposition, we treat `void` as if it were a type.
 In fact, it denotes the absence of a return type.)
 

 All instances of `MethodType` are immutable.
 Two instances are completely interchangeable if they compare equal.
 Equality depends on pairwise correspondence of the return and parameter types and on nothing else.
 

 This type can be created only by factory methods.
 All factory methods may cache values, though caching is not guaranteed.
 Some factory methods are static, while others are virtual methods which
 modify precursor method types, e.g., by changing a selected parameter.
 

 Factory methods which operate on groups of parameter types
 are systematically presented in two versions, so that both Java arrays and
 Java lists can be used to work with groups of parameter types.
 The query methods `parameterArray` and `parameterList`
 also provide a choice between arrays and lists.
 

 `MethodType` objects are sometimes derived from bytecode instructions
 such as `invokedynamic`, specifically from the type descriptor strings associated
 with the instructions in a class file's constant pool.
 

 Like classes and strings, method types can also be represented directly
 in a class file's constant pool as constants.
 A method type may be loaded by an `ldc` instruction which refers
 to a suitable `CONSTANT_MethodType` constant pool entry.
 The entry refers to a `CONSTANT_Utf8` spelling for the descriptor string.
 (For full details on method type constants, see sections {@jvms
 4.4.8} and {@jvms 5.4.3.5} of the Java Virtual Machine
 Specification.)
 

 When the JVM materializes a `MethodType` from a descriptor string,
 all classes named in the descriptor must be accessible, and will be loaded.
 (But the classes need not be initialized, as is the case with a `CONSTANT_Class`.)
 This loading may occur at any time before the `MethodType` object is first derived.
 

 **Nominal Descriptors**
 

 A `MethodType` can be described in `MethodTypeDesc nominal form`
 if and only if all of the parameter types and return type can be described
 with a `describeConstable() nominal descriptor` represented by
 `ClassDesc`.  If a method type can be described nominally, then:
 
 
- The method type has a `MethodTypeDesc nominal descriptor`
     returned by `describeConstable() MethodType::describeConstable`.
 
- The descriptor string returned by
     `descriptorString() MethodType::descriptorString` or
     `toMethodDescriptorString() MethodType::toMethodDescriptorString`
     for the method type is a method descriptor (JVMS {@jvms 4.3.3}).
 

 

 If any of the parameter types or return type cannot be described
 nominally, i.e. `describeConstable() Class::describeConstable`
 returns an empty optional for that type,
 then the method type cannot be described nominally:
 
 
- The method type has no `MethodTypeDesc nominal descriptor` and
     `describeConstable() MethodType::describeConstable` returns
     an empty optional.
 
- The descriptor string returned by
     `descriptorString() MethodType::descriptorString` or
     `toMethodDescriptorString() MethodType::toMethodDescriptorString`
     for the method type is not a type descriptor.

> *Since 1.7*
