---
id: "java-en-function-linker-defaultlookup"
language: "java"
lang: "en"
category: "function"
name: "Linker.defaultLookup"
signature: "SymbolLookup defaultLookup()"
title: "Linker.defaultLookup"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Linker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Linker.defaultLookup

```java
SymbolLookup defaultLookup()
```

Returns a symbol lookup for symbols in a set of commonly used libraries.
 

 Each `Linker` is responsible for choosing libraries that are widely
 recognized as useful on the OS and processor combination supported by the
 `Linker`. Accordingly, the precise set of symbols exposed by the symbol
 lookup is unspecified; it varies from one `Linker` to another.

           exposes a set of symbols that is stable over time. Clients of
           `defaultLookup` are likely to fail if a symbol that was
           previously exposed by the symbol lookup is no longer exposed.
           

If an implementer provides `Linker` implementations for
           multiple OS and processor combinations, then it is strongly
           recommended that the result of `defaultLookup` exposes, as much
           as possible, a consistent set of symbols across all the OS and processor
           combinations.

**返回**

- a symbol lookup for symbols in a set of commonly used libraries
