---
id: "java-en-function-moduledesc-of"
language: "java"
lang: "en"
category: "function"
name: "ModuleDesc.of"
signature: "static ModuleDesc of(String name)"
title: "ModuleDesc.of"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/ModuleDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDesc.of

```java
static ModuleDesc of(String name)
```

Returns a `ModuleDesc` for a module,
 given the name of the module.

**参数**

- **name** — the module name

**返回**

- a `ModuleDesc` describing the desired module

**异常**

- **NullPointerException** — if the argument is `null`
- **IllegalArgumentException** — if the name string is not in the correct format
