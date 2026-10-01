---
id: "java-en-function-moduledescriptor-newopenmodule"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.newOpenModule"
signature: "public static Builder newOpenModule(String name)"
title: "ModuleDescriptor.newOpenModule"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.newOpenModule

```java
public static Builder newOpenModule(String name)
```

Instantiates a builder to build a module descriptor for an open module.
 This method is equivalent to invoking `newModule(String,Set)
 newModule` with the `OPEN OPEN` modifier.

 

 The builder for an open module cannot be used to declare any open
 packages.

**参数**

- **name** — The module name

**返回**

- A new builder that builds an open module

**异常**

- **IllegalArgumentException** — If the module name is `null` or is not a legal module name
