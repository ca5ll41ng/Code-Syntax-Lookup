---
id: "java-en-function-builder-requires"
language: "java"
lang: "en"
category: "function"
name: "Builder.requires"
signature: "public Builder requires(Requires req)"
title: "Builder.requires"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.requires

```java
public Builder requires(Requires req)
```

Adds a dependence on a module.

**参数**

- **req** — The dependence

**返回**

- This builder

**异常**

- **IllegalArgumentException** — If the dependence is on the module that this builder was initialized to build
- **IllegalStateException** — If the dependence on the module has already been declared or this builder is for an automatic module
