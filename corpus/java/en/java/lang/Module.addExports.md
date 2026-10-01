---
id: "java-en-function-module-addexports"
language: "java"
lang: "en"
category: "function"
name: "Module.addExports"
signature: "public Module addExports(String pn, Module other)"
title: "Module.addExports"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Module.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Module.addExports

```java
public Module addExports(String pn, Module other)
```

If the caller's module is this module then update this module to export
 the given package to the given module.

 

 Exporting a package with this method does not allow the given module to
 `set(Object, Object) reflectively set` or `unreflectSetter(Field) obtain a method
 handle with write access` to a public final field declared in a public class
 in the package.

 

 This method has no effect if the package is already exported (or
 open) to the given module. 

 Virtual Machine Specification , if an attempt to resolve a
 symbolic reference fails because of a linkage error, then subsequent
 attempts to resolve the reference always fail with the same error that
 was thrown as a result of the initial resolution attempt.

**参数**

- **pn** — The package name
- **other** — The module

**返回**

- this module

**异常**

- **IllegalArgumentException** — If `pn` is `null`, or this is a named module and the package `pn` is not a package in this module
- **IllegalCallerException** — If this is a named module and the caller's module is not this module

**参见**

- #isExported(String,Module)
