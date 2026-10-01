---
id: "java-en-function-option-capturecallstate"
language: "java"
lang: "en"
category: "function"
name: "Option.captureCallState"
signature: "static Option captureCallState(String... capturedState)"
title: "Option.captureCallState"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Linker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Option.captureCallState

```java
static Option captureCallState(String... capturedState)
```

{@return a linker option used to initialize portions of the execution
          state immediately before, and save portions of the execution
          state immediately after calling a foreign function associated
          with a downcall method handle, before it can be overwritten by the
          Java runtime, or read through conventional means}
 

 Execution state is initialized from, or saved to a native segment provided by
 the user to the downcall method handle. For this purpose, a downcall method
 handle linked with this option will feature an additional `MemorySegment`
 parameter directly following the target address, and optional `SegmentAllocator`
 parameters. This parameter, the capture state segment, represents the
 native segment from which the capture state is initialized, and into which the
 capture state is saved.
 

 The capture state segment must have size and alignment compatible with the
 layout returned by `captureStateLayout`. This layout is a struct
 layout which has a named field for each captured value.
 

 Captured state can be stored in, or retrieved from the capture state segment by
 constructing var handles from the `captureStateLayout capture state layout`.
 Some functions require this state to be initialized to a particular value before
 invoking the downcall.
 

 The following example demonstrates the use of this linker option:
 {@snippet lang = "java":
 MemorySegment targetAddress = ...
 Linker.Option ccs = Linker.Option.captureCallState("errno");
 MethodHandle handle = Linker.nativeLinker().downcallHandle(targetAddress, FunctionDescriptor.ofVoid(), ccs);

 StructLayout capturedStateLayout = Linker.Option.captureStateLayout();
 VarHandle errnoHandle = capturedStateLayout.varHandle(PathElement.groupElement("errno"));
 try (Arena arena = Arena.ofConfined()) {
     MemorySegment capturedState = arena.allocate(capturedStateLayout);
     errnoHandle.set(capturedState, 0L, 0); // set errno to 0
     handle.invoke(capturedState);
     int errno = (int) errnoHandle.get(capturedState, 0L);
     // use errno
 }
 }

**参数**

- **capturedState** — the names of the values to save

**异常**

- **IllegalArgumentException** — if at least one of the provided `capturedState` names is unsupported on the current platform

**参见**

- #captureStateLayout()
