---
id: "java-en-function-modulefinder-find"
language: "java"
lang: "en"
category: "function"
name: "ModuleFinder.find"
signature: "Optional<ModuleReference> find(String name)"
title: "ModuleFinder.find"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleFinder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleFinder.find

```java
Optional<ModuleReference> find(String name)
```

Finds a reference to a module of a given name.

 

 A `ModuleFinder` provides a consistent view of the
 modules that it locates. If `find` is invoked several times to
 locate the same module (by name) then it will return the same result
 each time. If a module is located then it is guaranteed to be a member
 of the set of modules returned by the `findAll() findAll`
 method.

**参数**

- **name** — The name of the module to find

**返回**

- A reference to a module with the given name or an empty `Optional` if not found

**异常**

- **FindException** — If an error occurs finding the module
