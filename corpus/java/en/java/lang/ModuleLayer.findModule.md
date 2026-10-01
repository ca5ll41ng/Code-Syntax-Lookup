---
id: "java-en-function-modulelayer-findmodule"
language: "java"
lang: "en"
category: "function"
name: "ModuleLayer.findModule"
signature: "public Optional<Module> findModule(String name)"
title: "ModuleLayer.findModule"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ModuleLayer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleLayer.findModule

```java
public Optional<Module> findModule(String name)
```

Returns the module with the given name in this layer, or if not in this
 layer, the `parents() parent` layers. Finding a module in
 parent layers is equivalent to invoking `findModule` on each
 parent, in search order, until the module is found or all parents have
 been searched. In a tree of layers  then this is equivalent to
 a depth-first search.

**参数**

- **name** — The name of the module to find

**返回**

- The module with the given name or an empty `Optional` if there isn't a module with this name in this layer or any parent layer
