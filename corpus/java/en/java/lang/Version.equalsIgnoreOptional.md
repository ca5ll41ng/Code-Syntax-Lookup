---
id: "java-en-function-version-equalsignoreoptional"
language: "java"
lang: "en"
category: "function"
name: "Version.equalsIgnoreOptional"
signature: "public boolean equalsIgnoreOptional(Object obj)"
title: "Version.equalsIgnoreOptional"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Version.equalsIgnoreOptional

```java
public boolean equalsIgnoreOptional(Object obj)
```

Determines whether this `Version` is equal to another
 disregarding optional build information.

 

 Two `Version`s are equal if and only if they represent the
 same version string disregarding the optional build information.

**参数**

- **obj** — The object to which this `Version` is to be compared

**返回**

- `true` if, and only if, the given object is a `Version` that is identical to this `Version` ignoring the optional build information
