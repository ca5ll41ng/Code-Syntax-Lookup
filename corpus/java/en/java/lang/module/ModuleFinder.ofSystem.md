---
id: "java-en-function-modulefinder-ofsystem"
language: "java"
lang: "en"
category: "function"
name: "ModuleFinder.ofSystem"
signature: "static ModuleFinder ofSystem()"
title: "ModuleFinder.ofSystem"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleFinder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleFinder.ofSystem

```java
static ModuleFinder ofSystem()
```

Returns a module finder that locates the system modules. The
 system modules are the modules in the Java run-time image.
 The module finder will always find `java.base`.

**返回**

- A `ModuleFinder` that locates the system modules
