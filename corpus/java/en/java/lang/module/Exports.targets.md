---
id: "java-en-function-exports-targets"
language: "java"
lang: "en"
category: "function"
name: "Exports.targets"
signature: "public Set<String> targets()"
title: "Exports.targets"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Exports.targets

```java
public Set<String> targets()
```

For a qualified export, returns the non-empty and immutable set
 of the module names to which the package is exported. For an
 unqualified export, returns an empty set.

**返回**

- The set of target module names or for an unqualified export, an empty set
