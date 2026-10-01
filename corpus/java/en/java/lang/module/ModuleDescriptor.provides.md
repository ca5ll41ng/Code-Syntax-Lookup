---
id: "java-en-function-moduledescriptor-provides"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.provides"
signature: "public Set<Provides> provides()"
title: "ModuleDescriptor.provides"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.provides

```java
public Set<Provides> provides()
```

Returns the set of `Provides` objects representing the
 services that the module provides.

**返回**

- The possibly-empty unmodifiable set of the services that this module provides
