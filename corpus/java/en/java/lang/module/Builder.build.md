---
id: "java-en-function-builder-build"
language: "java"
lang: "en"
category: "function"
name: "Builder.build"
signature: "public ModuleDescriptor build()"
title: "Builder.build"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.build

```java
public ModuleDescriptor build()
```

Builds and returns a `ModuleDescriptor` from its components.

 

 The module will require "`java.base`" even if the dependence
 has not been declared (the exception is when building a module named
 "`java.base`" as it cannot require itself). The dependence on
 "`java.base`" will have the `MANDATED MANDATED`
 modifier if the dependence was not declared.

**返回**

- The module descriptor
