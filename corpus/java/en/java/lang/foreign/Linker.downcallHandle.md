---
id: "java-en-function-linker-downcallhandle"
language: "java"
lang: "en"
category: "function"
name: "Linker.downcallHandle"
signature: "MethodHandle downcallHandle(MemorySegment address, FunctionDescriptor function, Option... options)"
title: "Linker.downcallHandle"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Linker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Linker.downcallHandle

```java
MethodHandle downcallHandle(MemorySegment address, FunctionDescriptor function, Option... options)
```

Creates a method handle that is used to call a foreign function with
 the given signature and address.
 

 Calling this method is equivalent to the following code:
 {@snippet lang=java :
 linker.downcallHandle(function, options).bindTo(address);
 }

**参数**

- **address** — the native memory segment whose `address() base address` is the address of the target foreign function
- **function** — the function descriptor of the target foreign function
- **options** — the linker options associated with this linkage request

**返回**

- a downcall method handle

**异常**

- **IllegalArgumentException** — if the provided function descriptor is not supported by this linker
- **IllegalArgumentException** — if `!address.isNative()`, or if `address.equals(MemorySegment.NULL)`
- **IllegalArgumentException** — if an invalid combination of linker options is given
- **IllegalCallerException** — if the caller is in a module that does not have native access enabled

**参见**

- SymbolLookup
