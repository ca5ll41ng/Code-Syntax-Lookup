---
id: "java-en-function-builder-provides"
language: "java"
lang: "en"
category: "function"
name: "Builder.provides"
signature: "public Builder provides(Provides p)"
title: "Builder.provides"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.provides

```java
public Builder provides(Provides p)
```

Provides a service with one or more implementations. The package for
 each `providers() provider` (or provider factory) is
 added to the module if not already added.

**参数**

- **p** — The provides

**返回**

- This builder

**异常**

- **IllegalStateException** — If the providers for the service type have already been declared
