---
id: "java-en-function-symbollookup-or"
language: "java"
lang: "en"
category: "function"
name: "SymbolLookup.or"
signature: "default SymbolLookup or(SymbolLookup other)"
title: "SymbolLookup.or"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SymbolLookup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SymbolLookup.or

```java
default SymbolLookup or(SymbolLookup other)
```

{@return a composed symbol lookup that returns the result of finding the symbol
          with this lookup if found, otherwise returns the result of finding
          the symbol with the other lookup}

          e.g. so that symbols could be retrieved, in order, from multiple
          libraries:
 {@snippet lang = java:
 var lookup = SymbolLookup.libraryLookup("foo", arena)
         .or(SymbolLookup.libraryLookup("bar", arena))
         .or(SymbolLookup.loaderLookup());
}
 The above code creates a symbol lookup that first searches for symbols in
 the "foo" library. If no symbol is found in "foo" then "bar" is searched.
 Finally, if a symbol is neither found in "foo" nor in "bar", the
 `loaderLookup() loader lookup` is used.

**参数**

- **other** — the symbol lookup that should be used to look for symbols not found in this lookup
