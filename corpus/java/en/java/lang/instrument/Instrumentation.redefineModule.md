---
id: "java-en-function-instrumentation-redefinemodule"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.redefineModule"
signature: "void redefineModule(Module module, Set<Module> extraReads, Map<String, Set<Module>> extraExports, Map<String, Set<Module>> extraOpens, Set<Class<?>> extraUses, Map<Class<?>, List<Class<?>>> extraProvides)"
title: "Instrumentation.redefineModule"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.redefineModule

```java
void redefineModule(Module module, Set<Module> extraReads, Map<String, Set<Module>> extraExports, Map<String, Set<Module>> extraOpens, Set<Class<?>> extraUses, Map<Class<?>, List<Class<?>>> extraProvides)
```

Redefine a module to expand the set of modules that it reads, the set of
 packages that it exports or opens, or the services that it uses or
 provides. This method facilitates the instrumentation of code in named
 modules where that instrumentation requires changes to the set of modules
 that are read, the packages that are exported or open, or the services
 that are used or provided.

 

 This method cannot reduce the set of modules that a module reads, nor
 reduce the set of packages that it exports or opens, nor reduce the set
 of services that it uses or provides. This method is a no-op when invoked
 to redefine an unnamed module. 

 

 When expanding the services that a module uses or provides then the
 onus is on the agent to ensure that the service type will be accessible at
 each instrumentation site where the service type is used. This method
 does not check if the service type is a member of the module or in a
 package exported to the module by another module that it reads. 

 

 The `extraExports` parameter is the map of additional packages
 to export. The `extraOpens` parameter is the map of additional
 packages to open. In both cases, the map key is the fully-qualified name
 of the package as defined in section 6.5.3 of
 The Java Language Specification , for example, `"java.lang"`. The map value is the non-empty set of modules that the
 package should be exported or opened to. 

 

 The `extraProvides` parameter is the additional service providers
 for the module to provide. The map key is the service type. The map value
 is the non-empty list of implementation types, each of which is a member
 of the module and an implementation of the service. 

 

 This method is safe for concurrent use and so allows multiple agents
 to instrument and update the same module at around the same time.

**参数**

- **module** — the module to redefine
- **extraReads** — the possibly-empty set of additional modules to read
- **extraExports** — the possibly-empty map of additional packages to export
- **extraOpens** — the possibly-empty map of additional packages to open
- **extraUses** — the possibly-empty set of additional services to use
- **extraProvides** — the possibly-empty map of additional services to provide

**异常**

- **IllegalArgumentException** — If `extraExports` or `extraOpens` contains a key that is not a package in the module; if `extraExports` or `extraOpens` maps a key to an empty set; if a value in the `extraProvides` map contains a service provider type that is not a member of the module or an implementation of the service; or `extraProvides` maps a key to an empty list
- **UnmodifiableModuleException** — if the module cannot be modified
- **NullPointerException** — if any of the arguments are `null` or any of the Sets or Maps contains a `null` key or value

**参见**

- #isModifiableModule(Module)

> *Since 9*
