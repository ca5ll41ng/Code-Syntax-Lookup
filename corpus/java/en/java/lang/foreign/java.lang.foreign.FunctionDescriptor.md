---
id: "java-en-function-java-lang-foreign-functiondescriptor"
language: "java"
lang: "en"
category: "function"
name: "java.lang.foreign.FunctionDescriptor"
title: "FunctionDescriptor"
directive: "type"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/FunctionDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FunctionDescriptor

A function descriptor models the signature of a foreign function. A function
 descriptor is made up of zero or more argument layouts, and zero or one return layout.
 A function descriptor is used to create
 `downcallHandle(MemorySegment, FunctionDescriptor, Linker.Option...) downcall method handles`
 and
 `upcallStub(MethodHandle, FunctionDescriptor, Arena, Linker.Option...) upcall stubs`.

 Implementing classes are immutable, thread-safe and
 value-based.

**参见**

- MemoryLayout

> *Since 22*
