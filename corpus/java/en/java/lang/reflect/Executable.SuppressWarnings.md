---
id: "java-en-function-executable-suppresswarnings"
language: "java"
lang: "en"
category: "function"
name: "Executable.SuppressWarnings"
signature: "@SuppressWarnings(\"doclint:reference\") // cross-module links public abstract Class<?>[] getParameterTypes()"
title: "Executable.SuppressWarnings"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Executable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executable.SuppressWarnings

```java
@SuppressWarnings("doclint:reference") // cross-module links public abstract Class<?>[] getParameterTypes()
```

Returns an array of `Class` objects that represent the formal
 parameter types, in declaration order, of the executable
 represented by this object.  Returns an array of length
 0 if the underlying executable takes no parameters.
 Note that the constructors of some inner classes
 may have an `MANDATED
 implicitly declared` parameter in addition to explicitly
 declared ones.
 Also note that compact constructors of a record class may have
 `MANDATED
 implicitly declared` parameters.

**返回**

- the parameter types for the executable this object represents
