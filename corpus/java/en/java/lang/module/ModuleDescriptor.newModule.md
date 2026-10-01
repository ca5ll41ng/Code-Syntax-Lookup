---
id: "java-en-function-moduledescriptor-newmodule"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.newModule"
signature: "public static Builder newModule(String name, Set<Modifier> ms)"
title: "ModuleDescriptor.newModule"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.newModule

```java
public static Builder newModule(String name, Set<Modifier> ms)
```

Instantiates a builder to build a module descriptor.

**参数**

- **name** — The module name
- **ms** — The set of module modifiers

**返回**

- A new builder

**异常**

- **IllegalArgumentException** — If the module name is `null` or is not a legal module name, or the set of modifiers contains `AUTOMATIC AUTOMATIC` with other modifiers
