---
id: "java-en-function-java-lang-foreign-addresslayout"
language: "java"
lang: "en"
category: "function"
name: "java.lang.foreign.AddressLayout"
title: "AddressLayout"
directive: "type"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/AddressLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AddressLayout

A value layout used to model the address of some region of memory. The carrier
 associated with an address layout is `MemorySegment.class`. The size and
 alignment of an address layout are platform-dependent (e.g. on a 64-bit platform,
 the size and alignment of an address layout are set to 8 bytes).
 

 An address layout may optionally feature a `targetLayout() target layout`.
 An address layout with target layout `T` can be used to model the address of a
 region of memory whose layout is `T`. For instance, an address layout with
 target layout `JAVA_INT` can be used to model the address of a
 region of memory that is 4 bytes long. Specifying a target layout can be useful in
 the following situations:
 
     
- When accessing a memory segment that has been obtained by reading an address from
     another memory segment, e.g. using `getAtIndex`;
     
- When creating a downcall method handle, using `downcallHandle`;
     
- When creating an upcall stub, using `upcallStub`.
 

 Implementations of this interface are immutable, thread-safe and
 value-based.

**参见**

- #ADDRESS
- #ADDRESS_UNALIGNED

> *Since 22*
