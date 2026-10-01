---
id: "java-en-function-builder-packages"
language: "java"
lang: "en"
category: "function"
name: "Builder.packages"
signature: "public Builder packages(Set<String> pns)"
title: "Builder.packages"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.packages

```java
public Builder packages(Set<String> pns)
```

Adds packages to the module. All packages in the set of package names
 that are not in the module are added to module.

**参数**

- **pns** — The (possibly empty) set of package names

**返回**

- This builder

**异常**

- **IllegalArgumentException** — If any of the package names is `null` or is not a legal package name
