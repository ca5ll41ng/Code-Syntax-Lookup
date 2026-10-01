---
id: "java-en-function-module-isexported"
language: "java"
lang: "en"
category: "function"
name: "Module.isExported"
signature: "public boolean isExported(String pn, Module other)"
title: "Module.isExported"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Module.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Module.isExported

```java
public boolean isExported(String pn, Module other)
```

Returns `true` if this module exports the given package to at
 least the given module.

 

 This method returns `true` if invoked to test if a package in
 this module is exported to itself. It always returns `true` when
 invoked on an unnamed module. A package that is `isOpen open` to
 the given module is considered exported to that module at run-time and
 so this method returns `true` if the package is open to the given
 module. 

 

 This method does not check if the given module reads this module.

**参数**

- **pn** — The package name
- **other** — The other module

**返回**

- `true` if this module exports the package to at least the given module

**参见**

- ModuleDescriptor#exports()
- #addExports(String,Module)
