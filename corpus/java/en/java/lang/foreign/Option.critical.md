---
id: "java-en-function-option-critical"
language: "java"
lang: "en"
category: "function"
name: "Option.critical"
signature: "static Option critical(boolean allowHeapAccess)"
title: "Option.critical"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Linker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Option.critical

```java
static Option critical(boolean allowHeapAccess)
```

{@return a linker option used to mark a foreign function as critical}
 

 A critical function is a function that has an extremely short running time in
 all cases (similar to calling an empty function), and does not call back into
 Java (e.g. using an upcall stub).
 

 Using this linker option is a hint that some implementations may use to apply
 optimizations that are only valid for critical functions.
 

 Using this linker option when linking non-critical functions is likely to have
 adverse effects, such as loss of performance or JVM crashes.
 

 Critical functions can optionally allow access to the Java heap. This allows
 clients to pass heap memory segments as addresses, where normally only off-heap
 memory segments would be allowed. The memory region inside the Java heap is
 exposed through a temporary native address that is valid for the duration of
 the function call. Use of this mechanism is therefore only recommended when a
 function needs to do short-lived access to Java heap memory, and copying the
 relevant data to an off-heap memory segment would be prohibitive in terms of
 performance.

**参数**

- **allowHeapAccess** — whether the linked function should allow access to the Java heap.
