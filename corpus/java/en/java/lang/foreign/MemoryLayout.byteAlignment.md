---
id: "java-en-function-memorylayout-bytealignment"
language: "java"
lang: "en"
category: "function"
name: "MemoryLayout.byteAlignment"
signature: "long byteAlignment()"
title: "MemoryLayout.byteAlignment"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryLayout.byteAlignment

```java
long byteAlignment()
```

{@return the alignment constraint associated with this layout, expressed in bytes}
 

 Layout alignment defines a power of two `A` which is the byte-wise alignment
 of the layout, where `A` is the number of bytes that must be aligned for any
 pointer that correctly points to this layout. Thus:

 
 
- `A=1` means unaligned (in the usual sense), which is common in packets.
 
- `A=8` means word aligned (on LP64), `A=4` int aligned,
 `A=2` short aligned, etc.
 
- `A=64` is the most strict alignment required by the x86/SV ABI
 (for AVX-512 data).
 

 If no explicit alignment constraint was set on this layout (
 see `withByteAlignment`), then this method returns the
 natural alignment constraint (in bytes) associated
 with this layout.
