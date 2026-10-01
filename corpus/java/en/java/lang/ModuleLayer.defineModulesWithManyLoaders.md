---
id: "java-en-function-modulelayer-definemoduleswithmanyloaders"
language: "java"
lang: "en"
category: "function"
name: "ModuleLayer.defineModulesWithManyLoaders"
signature: "public ModuleLayer defineModulesWithManyLoaders(Configuration cf, ClassLoader parentLoader)"
title: "ModuleLayer.defineModulesWithManyLoaders"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ModuleLayer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleLayer.defineModulesWithManyLoaders

```java
public ModuleLayer defineModulesWithManyLoaders(Configuration cf, ClassLoader parentLoader)
```

Creates a new module layer, with this layer as its parent, by defining the
 modules in the given `Configuration` to the Java virtual machine.
 Each module is defined to its own `ClassLoader` created by this
 method. The `getParent() parent` of each class loader
 is the given parent class loader. This method works exactly as specified
 by the static `defineModulesWithManyLoaders(Configuration,List,ClassLoader)
 defineModulesWithManyLoaders` method when invoked with this layer as the
 parent. In other words, if this layer is `thisLayer` then this
 method is equivalent to invoking:
 
```
 `ModuleLayer.defineModulesWithManyLoaders(cf, List.of(thisLayer), parentLoader).layer();
 `
```

**参数**

- **cf** — The configuration for the layer
- **parentLoader** — The parent class loader for each of the class loaders created by this method; may be `null` for the bootstrap class loader

**返回**

- The newly created layer

**异常**

- **IllegalArgumentException** — If the given configuration has more than one parent or the parent of the configuration is not the configuration for this layer
- **LayerInstantiationException** — If the layer cannot be created for any of the reasons specified by the static `defineModulesWithManyLoaders` method

**参见**

- #findLoader
