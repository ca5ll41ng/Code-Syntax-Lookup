---
id: "java-en-function-resolvedmodule-equals"
language: "java"
lang: "en"
category: "function"
name: "ResolvedModule.equals"
signature: "public boolean equals(Object ob)"
title: "ResolvedModule.equals"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ResolvedModule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResolvedModule.equals

```java
public boolean equals(Object ob)
```

Tests this resolved module for equality with the given object.

 

 If the given object is not a `ResolvedModule` then this
 method returns `false`. Two `ResolvedModule` objects are
 equal if they are in the same configuration and have equal references
 to the module content. 

 

 This method satisfies the general contract of the `equals(Object) Object.equals` method.

**参数**

- **ob** — the object to which this object is to be compared

**返回**

- `true` if, and only if, the given object is a module reference that is equal to this module reference
