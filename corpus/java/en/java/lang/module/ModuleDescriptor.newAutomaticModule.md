---
id: "java-en-function-moduledescriptor-newautomaticmodule"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.newAutomaticModule"
signature: "public static Builder newAutomaticModule(String name)"
title: "ModuleDescriptor.newAutomaticModule"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.newAutomaticModule

```java
public static Builder newAutomaticModule(String name)
```

Instantiates a builder to build a module descriptor for an automatic
 module. This method is equivalent to invoking `newModule(String,Set)
 newModule` with the `AUTOMATIC AUTOMATIC`
 modifier.

 

 The builder for an automatic module cannot be used to declare module
 or service dependences. It also cannot be used to declare any exported
 or open packages.

**参数**

- **name** — The module name

**返回**

- A new builder that builds an automatic module

**异常**

- **IllegalArgumentException** — If the module name is `null` or is not a legal module name

**参见**

- ModuleFinder#of(Path[])
