---
id: "java-en-function-builder-uses"
language: "java"
lang: "en"
category: "function"
name: "Builder.uses"
signature: "public Builder uses(String service)"
title: "Builder.uses"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.uses

```java
public Builder uses(String service)
```

Adds a service dependence.

**参数**

- **service** — The service type

**返回**

- This builder

**异常**

- **IllegalArgumentException** — If the service type is `null` or not a qualified name of a class in a named package
- **IllegalStateException** — If a dependency on the service type has already been declared or this is a builder for an automatic module
