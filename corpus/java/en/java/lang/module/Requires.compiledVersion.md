---
id: "java-en-function-requires-compiledversion"
language: "java"
lang: "en"
category: "function"
name: "Requires.compiledVersion"
signature: "public Optional<Version> compiledVersion()"
title: "Requires.compiledVersion"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Requires.compiledVersion

```java
public Optional<Version> compiledVersion()
```

Returns the version of the module if recorded at compile-time.

**返回**

- The version of the module if recorded at compile-time, or an empty `Optional` if no version was recorded or the version string recorded is `parse(String) unparseable`
