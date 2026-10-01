---
id: "java-en-function-modulelayer-definemodules"
language: "java"
lang: "en"
category: "function"
name: "ModuleLayer.defineModules"
signature: "public ModuleLayer defineModules(Configuration cf, Function<String, ClassLoader> clf)"
title: "ModuleLayer.defineModules"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ModuleLayer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleLayer.defineModules

```java
public ModuleLayer defineModules(Configuration cf, Function<String, ClassLoader> clf)
```

Creates a new module layer, with this layer as its parent, by defining the
 modules in the given `Configuration` to the Java virtual machine.
 Each module is mapped, by name, to its class loader by means of the
 given function. This method works exactly as specified by the static
 `defineModules(Configuration,List,Function) defineModules`
 method when invoked with this layer as the parent. In other words, if
 this layer is `thisLayer` then this method is equivalent to
 invoking:
 
```
 `ModuleLayer.defineModules(cf, List.of(thisLayer), clf).layer();
 `
```

**参数**

- **cf** — The configuration for the layer
- **clf** — The function to map a module name to a class loader

**返回**

- The newly created layer

**异常**

- **IllegalArgumentException** — If the given configuration has more than one parent or the parent of the configuration is not the configuration for this layer
- **LayerInstantiationException** — If the layer cannot be created for any of the reasons specified by the static `defineModules` method
