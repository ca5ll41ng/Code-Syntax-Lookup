---
id: "java-en-function-builder-exports"
language: "java"
lang: "en"
category: "function"
name: "Builder.exports"
signature: "public Builder exports(Exports e)"
title: "Builder.exports"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.exports

```java
public Builder exports(Exports e)
```

Adds an exported package.

**参数**

- **e** — The export

**返回**

- This builder

**异常**

- **IllegalStateException** — If the `source() package` is already declared as exported or this builder is for an automatic module
