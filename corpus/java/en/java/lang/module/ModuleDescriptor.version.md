---
id: "java-en-function-moduledescriptor-version"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.version"
signature: "public Optional<Version> version()"
title: "ModuleDescriptor.version"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.version

```java
public Optional<Version> version()
```

Returns the module version.

**返回**

- This module's version, or an empty `Optional` if the module does not have a version or the version is `parse(String) unparseable`
