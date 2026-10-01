---
id: "java-en-function-moduledescriptor-equals"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.equals"
signature: "public boolean equals(Object ob)"
title: "ModuleDescriptor.equals"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.equals

```java
public boolean equals(Object ob)
```

Tests this module descriptor for equality with the given object.

 

 If the given object is not a `ModuleDescriptor` then this
 method returns `false`. Two module descriptors are equal if each
 of their corresponding components is equal. 

 

 This method satisfies the general contract of the `equals(Object) Object.equals` method.

**参数**

- **ob** — the object to which this object is to be compared

**返回**

- `true` if, and only if, the given object is a module descriptor that is equal to this module descriptor
