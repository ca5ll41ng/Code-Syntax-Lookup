---
id: "java-en-function-moduledescriptor-opens"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.opens"
signature: "public Set<Opens> opens()"
title: "ModuleDescriptor.opens"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.opens

```java
public Set<Opens> opens()
```

Returns the set of `Opens` objects representing the open
 packages. 

 

 If this module is an open module or an automatic module then the
 set of open packages is empty.

**返回**

- A possibly-empty unmodifiable set of open packages
