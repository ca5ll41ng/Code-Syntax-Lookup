---
id: "java-en-function-configuration-findmodule"
language: "java"
lang: "en"
category: "function"
name: "Configuration.findModule"
signature: "public Optional<ResolvedModule> findModule(String name)"
title: "Configuration.findModule"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/Configuration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Configuration.findModule

```java
public Optional<ResolvedModule> findModule(String name)
```

Finds a resolved module in this configuration, or if not in this
 configuration, the `parents() parent` configurations.
 Finding a module in parent configurations is equivalent to invoking
 `findModule` on each parent, in search order, until the module
 is found or all parents have been searched. In a tree of
 configurations then this is equivalent to a depth-first search.

**参数**

- **name** — The module name of the resolved module to find

**返回**

- The resolved module with the given name or an empty `Optional` if there isn't a module with this name in this configuration or any parent configurations
