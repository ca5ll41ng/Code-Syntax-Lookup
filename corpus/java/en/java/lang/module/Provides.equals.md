---
id: "java-en-function-provides-equals"
language: "java"
lang: "en"
category: "function"
name: "Provides.equals"
signature: "public boolean equals(Object ob)"
title: "Provides.equals"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provides.equals

```java
public boolean equals(Object ob)
```

Tests this `Provides` for equality with the given object.

 

 If the given object is not a `Provides` then this method
 returns `false`. Two `Provides` objects are equal if the
 service type is equal and the list of providers is equal. 

 

 This method satisfies the general contract of the `equals(Object) Object.equals` method.

**参数**

- **ob** — the object to which this object is to be compared

**返回**

- `true` if, and only if, the given object is a `Provides` that is equal to this `Provides`
