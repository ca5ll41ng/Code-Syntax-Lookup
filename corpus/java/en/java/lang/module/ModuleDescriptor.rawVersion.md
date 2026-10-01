---
id: "java-en-function-moduledescriptor-rawversion"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.rawVersion"
signature: "public Optional<String> rawVersion()"
title: "ModuleDescriptor.rawVersion"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.rawVersion

```java
public Optional<String> rawVersion()
```

Returns the string with the possibly-unparseable version of the
 module.

**返回**

- The string containing the version of the module or an empty `Optional` if the module does not have a version

**参见**

- #version()
