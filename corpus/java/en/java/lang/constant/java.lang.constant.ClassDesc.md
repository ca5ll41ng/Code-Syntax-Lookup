---
id: "java-en-function-java-lang-constant-classdesc"
language: "java"
lang: "en"
category: "function"
name: "java.lang.constant.ClassDesc"
title: "ClassDesc"
directive: "type"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/ClassDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassDesc

A nominal descriptor for a
 `Class` constant.

 

For common system types, including all the primitive types, there are
 predefined `ClassDesc` constants in `ConstantDescs`.
 (The `java.lang.constant` APIs consider `void` to be a primitive type.)
 To create a `ClassDesc` for a class or interface type, use `of` or
 `ofDescriptor`; to create a `ClassDesc` for an array
 type, use `ofDescriptor`, or first obtain a
 `ClassDesc` for the component type and then call the `arrayType`
 or `arrayType` methods.

**参见**

- ConstantDescs

> *Since 12*
