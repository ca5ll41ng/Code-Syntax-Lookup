---
id: "java-en-function-exports-equals"
language: "java"
lang: "en"
category: "function"
name: "Exports.equals"
signature: "public boolean equals(Object ob)"
title: "Exports.equals"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Exports.equals

```java
public boolean equals(Object ob)
```

Tests this module export for equality with the given object.

 

 If the given object is not an `Exports` then this method
 returns `false`. Two module exports objects are equal if their
 set of modifiers is equal, the package names are equal and the set
 of target module names is equal. 

 

 This method satisfies the general contract of the `equals(Object) Object.equals` method.

**参数**

- **ob** — the object to which this object is to be compared

**返回**

- `true` if, and only if, the given object is a module dependence that is equal to this module dependence
