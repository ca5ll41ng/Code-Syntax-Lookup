---
id: "java-en-function-moduledescriptor-isautomatic"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.isAutomatic"
signature: "public boolean isAutomatic()"
title: "ModuleDescriptor.isAutomatic"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.isAutomatic

```java
public boolean isAutomatic()
```

Returns `true` if this is an automatic module. 

 

 This method is equivalent to testing if the set of `modifiers()
 modifiers` contains the `AUTOMATIC AUTOMATIC` modifier.

**返回**

- `true` if this is an automatic module
