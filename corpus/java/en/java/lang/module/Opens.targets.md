---
id: "java-en-function-opens-targets"
language: "java"
lang: "en"
category: "function"
name: "Opens.targets"
signature: "public Set<String> targets()"
title: "Opens.targets"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Opens.targets

```java
public Set<String> targets()
```

For a qualified `Opens`, returns the non-empty and immutable set
 of the module names to which the package is open. For an
 unqualified `Opens`, returns an empty set.

**返回**

- The set of target module names or for an unqualified `Opens`, an empty set
