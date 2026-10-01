---
id: "java-en-function-moduledescriptor-requires"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.requires"
signature: "public Set<Requires> requires()"
title: "ModuleDescriptor.requires"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.requires

```java
public Set<Requires> requires()
```

Returns the set of `Requires` objects representing the module
 dependences. 

 

 The set includes a dependency on "`java.base`" when this
 module is not named "`java.base`". If this module is an automatic
 module then it does not have a dependency on any module other than
 "`java.base`".

**返回**

- A possibly-empty unmodifiable set of `Requires` objects
