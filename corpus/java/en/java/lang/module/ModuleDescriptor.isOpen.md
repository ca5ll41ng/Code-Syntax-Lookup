---
id: "java-en-function-moduledescriptor-isopen"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.isOpen"
signature: "public boolean isOpen()"
title: "ModuleDescriptor.isOpen"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.isOpen

```java
public boolean isOpen()
```

Returns `true` if this is an open module. 

 

 This method is equivalent to testing if the set of `modifiers()
 modifiers` contains the `OPEN OPEN` modifier.

**返回**

- `true` if this is an open module
