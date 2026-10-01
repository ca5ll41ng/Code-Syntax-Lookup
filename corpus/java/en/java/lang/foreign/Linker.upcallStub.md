---
id: "java-en-function-linker-upcallstub"
language: "java"
lang: "en"
category: "function"
name: "Linker.upcallStub"
signature: "MemorySegment upcallStub(MethodHandle target, FunctionDescriptor function, Arena arena, Linker.Option... options)"
title: "Linker.upcallStub"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Linker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Linker.upcallStub

```java
MemorySegment upcallStub(MethodHandle target, FunctionDescriptor function, Arena arena, Linker.Option... options)
```

Creates an upcall stub which can be passed to other foreign functions as a
 function pointer, associated with the given arena. Calling such a function
 pointer from foreign code will result in the execution of the provided method
 handle.
 

 The returned memory segment's address points to the newly allocated upcall stub,
 and is associated with the provided arena. As such, the lifetime of the returned
 upcall stub segment is controlled by the provided arena. For instance, if the
 provided arena is a confined arena, the returned upcall stub segment will be
 deallocated when the provided confined arena is `close() closed`.
 

 An upcall stub argument whose corresponding layout is an
 `AddressLayout address layout` is a native segment associated with the
 global scope. Under normal conditions, the size of this segment argument is
 `0`. However, if the address layout has a
 `targetLayout() target layout` `T`, then the size
 of the segment argument is set to `T.byteSize()`.
 

 The target method handle should not throw any exceptions. If the target method
 handle does throw an exception, the JVM will terminate abruptly. To avoid this,
 clients should wrap the code in the target method handle in a try/catch block to
 catch any unexpected exceptions. This can be done using the
 `catchException`
 method handle combinator, and handle exceptions as desired in the corresponding
 catch block.

**参数**

- **target** — the target method handle
- **function** — the upcall stub function descriptor
- **arena** — the arena associated with the returned upcall stub segment
- **options** — the linker options associated with this linkage request

**返回**

- a zero-length segment whose address is the address of the upcall stub

**异常**

- **IllegalArgumentException** — if the provided function descriptor is not supported by this linker
- **IllegalArgumentException** — if the type of `target` is incompatible with the type `toMethodType() derived` from `function`
- **IllegalArgumentException** — if it is determined that the target method handle can throw an exception
- **IllegalStateException** — if `arena.scope().isAlive() == false`
- **WrongThreadException** — if `arena` is a confined arena, and this method is called from a thread `T`, other than the arena's owner thread
- **IllegalCallerException** — if the caller is in a module that does not have native access enabled
