---
id: "java-en-function-builder-opens"
language: "java"
lang: "en"
category: "function"
name: "Builder.opens"
signature: "public Builder opens(Opens obj)"
title: "Builder.opens"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.opens

```java
public Builder opens(Opens obj)
```

Adds an open package.

**参数**

- **obj** — The `Opens` object

**返回**

- This builder

**异常**

- **IllegalStateException** — If the package is already declared as open, or this is a builder for an open module or automatic module
