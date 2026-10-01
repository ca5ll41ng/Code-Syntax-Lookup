---
id: "java-en-function-addresslayout-withtargetlayout"
language: "java"
lang: "en"
category: "function"
name: "AddressLayout.withTargetLayout"
signature: "AddressLayout withTargetLayout(MemoryLayout layout)"
title: "AddressLayout.withTargetLayout"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/AddressLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AddressLayout.withTargetLayout

```java
AddressLayout withTargetLayout(MemoryLayout layout)
```

Returns an address layout with the same carrier, alignment constraint, name and
 order as this address layout, but associated with the specified target layout.
 The returned address layout allows raw addresses to be accessed as
 `MemorySegment memory segments` whose size is set to the size of the
 specified layout. Moreover, if the accessed raw address is not compatible with
 the alignment constraint in the provided layout, `IllegalArgumentException`
 will be thrown.
 This method can also be used to create an address layout which, when used, creates
 native memory segments with maximal size (e.g. `MAX_VALUE`). This
 can be done by using a target sequence layout with unspecified size, as follows:
 {@snippet lang = java:
 AddressLayout addressLayout   = ...
 AddressLayout unboundedLayout = addressLayout.withTargetLayout(
         MemoryLayout.sequenceLayout(Long.MAX_VALUE, ValueLayout.JAVA_BYTE));
}

**参数**

- **layout** — the target layout

**返回**

- an address layout with same characteristics as this layout, but with the provided target layout

**异常**

- **IllegalCallerException** — if the caller is in a module that does not have native access enabled

**参见**

- #targetLayout()
