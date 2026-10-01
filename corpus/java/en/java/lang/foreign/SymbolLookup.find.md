---
id: "java-en-function-symbollookup-find"
language: "java"
lang: "en"
category: "function"
name: "SymbolLookup.find"
signature: "Optional<MemorySegment> find(String name)"
title: "SymbolLookup.find"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SymbolLookup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SymbolLookup.find

```java
Optional<MemorySegment> find(String name)
```

Returns the address of the symbol with the given name.

**参数**

- **name** — the symbol name

**返回**

- a zero-length memory segment whose address indicates the address of the symbol, if found

**参见**

- #findOrThrow(String)
