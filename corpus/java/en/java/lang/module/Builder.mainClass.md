---
id: "java-en-function-builder-mainclass"
language: "java"
lang: "en"
category: "function"
name: "Builder.mainClass"
signature: "public Builder mainClass(String mc)"
title: "Builder.mainClass"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.mainClass

```java
public Builder mainClass(String mc)
```

Sets the module main class. The package for the main class is added
 to the module if not already added. In other words, this method is
 equivalent to first invoking this builder's `packages(Set)
 packages` method to add the package name of the main class.

**参数**

- **mc** — The module main class

**返回**

- This builder

**异常**

- **IllegalArgumentException** — If `mainClass` is `null` or not a qualified name of a class in a named package
