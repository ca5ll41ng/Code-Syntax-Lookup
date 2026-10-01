---
id: "java-en-function-symbollookup-librarylookup"
language: "java"
lang: "en"
category: "function"
name: "SymbolLookup.libraryLookup"
signature: "static SymbolLookup libraryLookup(String name, Arena arena)"
title: "SymbolLookup.libraryLookup"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SymbolLookup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SymbolLookup.libraryLookup

```java
static SymbolLookup libraryLookup(String name, Arena arena)
```

Loads a library with the given name (if not already loaded) and creates a symbol
 lookup for symbols in that library. The lifetime of the returned library lookup
 is controlled by the provided arena. For instance, if the provided arena is a
 confined arena, the library associated with the returned lookup will be unloaded
 when the provided confined arena is `close() closed`.

           in a POSIX-compliant OS, the library name is resolved according to the
           specification of the `dlopen` function for that OS. In Windows,
           the library name is resolved according to the specification of the
           `LoadLibrary` function.

**参数**

- **name** — the name of the library in which symbols should be looked up
- **arena** — the arena associated with symbols obtained from the returned lookup

**返回**

- a new symbol lookup suitable to find symbols in a library with the given name

**异常**

- **IllegalStateException** — if `arena.scope().isAlive() == false`
- **WrongThreadException** — if `arena` is a confined arena, and this method is called from a thread `T`, other than the arena's owner thread
- **IllegalArgumentException** — if `name` does not identify a valid library
- **IllegalCallerException** — if the caller is in a module that does not have native access enabled
