---
id: "java-en-function-module-isopen"
language: "java"
lang: "en"
category: "function"
name: "Module.isOpen"
signature: "public boolean isOpen(String pn, Module other)"
title: "Module.isOpen"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Module.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Module.isOpen

```java
public boolean isOpen(String pn, Module other)
```

Returns `true` if this module has opened a package to at
 least the given module.

 

 This method returns `true` if invoked to test if a package in
 this module is open to itself. It returns `true` when invoked on an
 `isOpen open` module with a package in the module.
 It always returns `true` when invoked on an unnamed module. 

 

 This method does not check if the given module reads this module. 

 `M` do `setAccessible(boolean)
 deep reflection` on all types in the package.
 Further, if `M` reads this module, it can obtain a
 `java.lang.invoke.MethodHandles.Lookup Lookup` object that is allowed to
 `defineClass(byte[]) define classes`
 in package `p`.

**参数**

- **pn** — The package name
- **other** — The other module

**返回**

- `true` if this module has opened the package to at least the given module

**参见**

- ModuleDescriptor#opens()
- #addOpens(String,Module)
- java.lang.reflect.AccessibleObject#setAccessible(boolean)
- java.lang.invoke.MethodHandles#privateLookupIn
