---
id: "java-en-function-scope-equals"
language: "java"
lang: "en"
category: "function"
name: "Scope.equals"
signature: "boolean equals(Object that)"
title: "Scope.equals"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scope.equals

```java
boolean equals(Object that)
```

{@return `true`, if the provided object is also a scope, which models
 the same lifetime as that modeled by this scope}. In that case, it is always
 the case that `this.isAlive() == ((Scope)that).isAlive()`.

**参数**

- **that** — the object to be tested
