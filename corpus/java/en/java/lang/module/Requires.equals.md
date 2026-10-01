---
id: "java-en-function-requires-equals"
language: "java"
lang: "en"
category: "function"
name: "Requires.equals"
signature: "public boolean equals(Object ob)"
title: "Requires.equals"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Requires.equals

```java
public boolean equals(Object ob)
```

Tests this module dependence for equality with the given object.

 

 If the given object is not a `Requires` then this method
 returns `false`. Two module dependence objects are equal if
 the module names are equal, set of modifiers are equal, and the
 compiled version of both modules is equal or not recorded for
 both modules. 

 

 This method satisfies the general contract of the `equals(Object) Object.equals` method.

**参数**

- **ob** — the object to which this object is to be compared

**返回**

- `true` if, and only if, the given object is a module dependence that is equal to this module dependence
