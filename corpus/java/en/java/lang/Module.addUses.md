---
id: "java-en-function-module-adduses"
language: "java"
lang: "en"
category: "function"
name: "Module.addUses"
signature: "public Module addUses(Class<?> service)"
title: "Module.addUses"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Module.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Module.addUses

```java
public Module addUses(Class<?> service)
```

If the caller's module is this module then update this module to add a
 service dependence on the given service type. This method is intended
 for use by frameworks that invoke `java.util.ServiceLoader
 ServiceLoader` on behalf of other modules or where the framework is
 passed a reference to the service type by other code. This method is
 a no-op when invoked on an unnamed module or an automatic module.

 

 This method does not cause `resolveAndBind
 resolveAndBind` to be re-run.

**参数**

- **service** — The service type

**返回**

- this module

**异常**

- **IllegalCallerException** — If this is a named module and the caller's module is not this module

**参见**

- #canUse(Class)
- ModuleDescriptor#uses()
