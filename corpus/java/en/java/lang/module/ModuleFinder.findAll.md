---
id: "java-en-function-modulefinder-findall"
language: "java"
lang: "en"
category: "function"
name: "ModuleFinder.findAll"
signature: "Set<ModuleReference> findAll()"
title: "ModuleFinder.findAll"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleFinder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleFinder.findAll

```java
Set<ModuleReference> findAll()
```

Returns the set of all module references that this finder can locate.

 

 A `ModuleFinder` provides a consistent view of the modules
 that it locates. If `findAll() findAll` is invoked several times
 then it will return the same (equals) result each time. For each `ModuleReference` element in the returned set then it is guaranteed that
 `find find` will locate the `ModuleReference` if invoked
 to find that module. 

 module path to find modules that provide a specific service.

**返回**

- The set of all module references that this finder locates

**异常**

- **FindException** — If an error occurs finding all modules
