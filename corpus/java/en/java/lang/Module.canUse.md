---
id: "java-en-function-module-canuse"
language: "java"
lang: "en"
category: "function"
name: "Module.canUse"
signature: "public boolean canUse(Class<?> service)"
title: "Module.canUse"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Module.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Module.canUse

```java
public boolean canUse(Class<?> service)
```

Indicates if this module has a service dependence on the given service
 type. This method always returns `true` when invoked on an unnamed
 module or an automatic module.

**参数**

- **service** — The service type

**返回**

- `true` if this module uses service type `st`

**参见**

- #addUses(Class)
