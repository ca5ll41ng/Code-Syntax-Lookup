---
id: "java-en-function-java-lang-foreign-segmentallocator"
language: "java"
lang: "en"
category: "function"
name: "java.lang.foreign.SegmentAllocator"
title: "SegmentAllocator"
directive: "type"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SegmentAllocator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SegmentAllocator

An object that may be used to allocate `MemorySegment memory segments`.
 Clients implementing this interface must implement the `allocate`
 method. A segment allocator defines several methods which can be useful to create
 segments from several kinds of Java values such as primitives and arrays.
 

 `SegmentAllocator` is a `FunctionalInterface functional interface`.
 Clients can easily obtain a new segment allocator by using either a lambda expression
 or a method reference:

 {@snippet lang=java :
 SegmentAllocator autoAllocator = (byteSize, byteAlignment) -> Arena.ofAuto().allocate(byteSize, byteAlignment);
 }
 

 This interface defines factories for commonly used allocators:
 
     
- `slicingAllocator` obtains an efficient slicing
         allocator, where memory is allocated by repeatedly slicing the provided
         memory segment;
     
- `prefixAllocator` obtains an allocator which wraps a
         segment and recycles its content upon each new allocation request.
 

 

 Passing a segment allocator to an API can be especially useful in circumstances where
 a client wants to communicate where the results of a certain operation
 (performed by the API) should be stored, as a memory segment. For instance,
 `downcallHandle(FunctionDescriptor, Linker.Option...) downcall method handles`
 can accept an additional `SegmentAllocator` parameter if the underlying
 foreign function is known to return a struct by-value. Effectively, the allocator
 parameter tells the linker where to store the return value of the foreign function.

          not thread-safe. Furthermore, memory segments allocated by a segment
          allocator can be associated with different lifetimes, and can even be backed
          by overlapping regions of memory. For these reasons, clients should
          generally only interact with a segment allocator they own.
 

 Clients should consider using an `Arena arena` instead, which, provides
 strong thread-safety, lifetime and non-overlapping guarantees.

> *Since 22*
