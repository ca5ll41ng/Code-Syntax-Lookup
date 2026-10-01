---
id: "java-en-function-symbollookup-findorthrow"
language: "java"
lang: "en"
category: "function"
name: "SymbolLookup.findOrThrow"
signature: "default MemorySegment findOrThrow(String name)"
title: "SymbolLookup.findOrThrow"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SymbolLookup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SymbolLookup.findOrThrow

```java
default MemorySegment findOrThrow(String name)
```

Returns the address of the symbol with the given name or throws an exception.

 This is equivalent to the following code, but is more efficient:
 to:
 {@snippet lang= java :
    String name = ...
    MemorySegment address = lookup.find(name)
        .orElseThrow(() -> new NoSuchElementException("Symbol not found: " + name));
 }

**参数**

- **name** — the symbol name

**返回**

- a zero-length memory segment whose address indicates the address of the symbol

**异常**

- **NoSuchElementException** — if no symbol address can be found for the given name

**参见**

- #find(String)

> *Since 23*
