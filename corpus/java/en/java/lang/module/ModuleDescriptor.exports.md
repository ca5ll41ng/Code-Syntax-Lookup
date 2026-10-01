---
id: "java-en-function-moduledescriptor-exports"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.exports"
signature: "public Set<Exports> exports()"
title: "ModuleDescriptor.exports"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.exports

```java
public Set<Exports> exports()
```

Returns the set of `Exports` objects representing the exported
 packages. 

 

 If this module is an automatic module then the set of exports
 is empty.

**返回**

- A possibly-empty unmodifiable set of exported packages
