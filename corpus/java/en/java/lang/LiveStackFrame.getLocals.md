---
id: "java-en-function-livestackframe-getlocals"
language: "java"
lang: "en"
category: "function"
name: "LiveStackFrame.getLocals"
signature: "public Object[] getLocals()"
title: "LiveStackFrame.getLocals"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/LiveStackFrame.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LiveStackFrame.getLocals

```java
public Object[] getLocals()
```

Gets the local variable array of this stack frame.

 

A single local variable can hold a value of type boolean, byte, char,
 short, int, float, reference or returnAddress.  A pair of local variables
 can hold a value of type long or double (JVMS section 2.6.1).  Primitive
 locals are represented in the returned array as `PrimitiveSlot`s,
 with longs and doubles occupying a pair of consecutive
 `PrimitiveSlot`s.

 

The current VM implementation does not provide specific type
 information for primitive locals.  This method simply returns the raw
 contents of the VM's primitive locals on a best-effort basis, without
 indicating a specific type.

 

The returned array may contain null entries for local variables that
 are not live.

 

 The specific subclass of `PrimitiveSlot` will reflect the
 underlying architecture, and will be either `PrimitiveSlot32` or
 `PrimitiveSlot64`.

 

How a long or double value is stored in the pair of
 `PrimitiveSlot`s can vary based on the underlying architecture and
 VM implementation.  On 32-bit architectures, long/double values are split
 between the two `PrimitiveSlot32`s.
 On 64-bit architectures, the entire value may be stored in one of the
 `PrimitiveSlot64`s, with the other `PrimitiveSlot64` being
 unused.

 

The contents of the unused, high-order portion of a
 `PrimitiveSlot64` (when storing a primitive other than a long or
 double) is unspecified.  In particular, the unused bits are not
 necessarily zeroed out.

**返回**

- the local variable array of this stack frame.
