---
id: "java-en-function-modulelayer-findloader"
language: "java"
lang: "en"
category: "function"
name: "ModuleLayer.findLoader"
signature: "public ClassLoader findLoader(String name)"
title: "ModuleLayer.findLoader"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ModuleLayer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleLayer.findLoader

```java
public ClassLoader findLoader(String name)
```

Returns the `ClassLoader` for the module with the given name. If
 a module of the given name is not in this layer then the `parents()
 parent` layers are searched in the manner specified by `findModule(String) findModule`.

 because `null` must be used to represent the bootstrap class loader.

**参数**

- **name** — The name of the module to find

**返回**

- The ClassLoader that the module is defined to

**异常**

- **IllegalArgumentException** — if a module of the given name is not defined in this layer or any parent of this layer
