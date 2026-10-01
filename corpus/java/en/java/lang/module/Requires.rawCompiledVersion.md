---
id: "java-en-function-requires-rawcompiledversion"
language: "java"
lang: "en"
category: "function"
name: "Requires.rawCompiledVersion"
signature: "public Optional<String> rawCompiledVersion()"
title: "Requires.rawCompiledVersion"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Requires.rawCompiledVersion

```java
public Optional<String> rawCompiledVersion()
```

Returns the string with the possibly-unparseable version of the module
 if recorded at compile-time.

**返回**

- The string containing the version of the module if recorded at compile-time, or an empty `Optional` if no version was recorded

**参见**

- #compiledVersion()
