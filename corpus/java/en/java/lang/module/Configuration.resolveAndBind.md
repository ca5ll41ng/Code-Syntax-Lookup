---
id: "java-en-function-configuration-resolveandbind"
language: "java"
lang: "en"
category: "function"
name: "Configuration.resolveAndBind"
signature: "public Configuration resolveAndBind(ModuleFinder before, ModuleFinder after, Collection<String> roots)"
title: "Configuration.resolveAndBind"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/Configuration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Configuration.resolveAndBind

```java
public Configuration resolveAndBind(ModuleFinder before, ModuleFinder after, Collection<String> roots)
```

Resolves a collection of root modules, with service binding, and with
 this configuration as its parent, to create a new configuration.
 This method works exactly as specified by the static `resolveAndBind(ModuleFinder,List,ModuleFinder,Collection)
 resolveAndBind` method when invoked with this configuration
 as the parent. In other words, if this configuration is `cf` then
 this method is equivalent to invoking:
 
```
 `Configuration.resolveAndBind(before, List.of(cf), after, roots);
 `
```

**参数**

- **before** — The before module finder to find modules
- **after** — The after module finder to locate modules when not located by the `before` module finder or in parent configurations
- **roots** — The possibly-empty collection of module names of the modules to resolve

**返回**

- The configuration that is the result of resolving, with service binding, the given root modules

**异常**

- **FindException** — If resolution fails for any of the observability-related reasons specified by the static `resolve` method
- **ResolutionException** — If resolution fails any of the consistency checks specified by the static `resolve` method
