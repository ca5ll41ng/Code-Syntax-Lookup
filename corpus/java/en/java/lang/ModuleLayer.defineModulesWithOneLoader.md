---
id: "java-en-function-modulelayer-definemoduleswithoneloader"
language: "java"
lang: "en"
category: "function"
name: "ModuleLayer.defineModulesWithOneLoader"
signature: "public ModuleLayer defineModulesWithOneLoader(Configuration cf, ClassLoader parentLoader)"
title: "ModuleLayer.defineModulesWithOneLoader"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ModuleLayer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleLayer.defineModulesWithOneLoader

```java
public ModuleLayer defineModulesWithOneLoader(Configuration cf, ClassLoader parentLoader)
```

Creates a new module layer, with this layer as its parent, by defining the
 modules in the given `Configuration` to the Java virtual machine.
 This method creates one class loader and defines all modules to that
 class loader. The `getParent() parent` of each class
 loader is the given parent class loader. This method works exactly as
 specified by the static `defineModulesWithOneLoader(Configuration,List,ClassLoader)
 defineModulesWithOneLoader` method when invoked with this layer as the
 parent. In other words, if this layer is `thisLayer` then this
 method is equivalent to invoking:
 
```
 `ModuleLayer.defineModulesWithOneLoader(cf, List.of(thisLayer), parentLoader).layer();
 `
```

**参数**

- **cf** — The configuration for the layer
- **parentLoader** — The parent class loader for the class loader created by this method; may be `null` for the bootstrap class loader

**返回**

- The newly created layer

**异常**

- **IllegalArgumentException** — If the given configuration has more than one parent or the parent of the configuration is not the configuration for this layer
- **LayerInstantiationException** — If the layer cannot be created for any of the reasons specified by the static `defineModulesWithOneLoader` method

**参见**

- #findLoader
