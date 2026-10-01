---
id: "java-en-function-opens-equals"
language: "java"
lang: "en"
category: "function"
name: "Opens.equals"
signature: "public boolean equals(Object ob)"
title: "Opens.equals"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Opens.equals

```java
public boolean equals(Object ob)
```

Tests this module `Opens` for equality with the given object.

 

 If the given object is not an `Opens` then this method
 returns `false`. Two `Opens` objects are equal if their
 set of modifiers is equal, the package names are equal and the set
 of target module names is equal. 

 

 This method satisfies the general contract of the `equals(Object) Object.equals` method.

**参数**

- **ob** — the object to which this object is to be compared

**返回**

- `true` if, and only if, the given object is a module dependence that is equal to this module dependence
