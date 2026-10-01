---
id: "java-en-function-module-getlayer"
language: "java"
lang: "en"
category: "function"
name: "Module.getLayer"
signature: "public ModuleLayer getLayer()"
title: "Module.getLayer"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Module.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Module.getLayer

```java
public ModuleLayer getLayer()
```

Returns the module layer that contains this module or `null` if
 this module is not in a module layer.

 A module layer contains named modules and therefore this method always
 returns `null` when invoked on an unnamed module.

 

 Dynamic modules are
 named modules that are generated at runtime. A dynamic module may or may
 not be in a module layer.

**返回**

- The module layer that contains this module

**参见**

- java.lang.reflect.Proxy
