---
id: "java-en-function-requires-compareto"
language: "java"
lang: "en"
category: "function"
name: "Requires.compareTo"
signature: "public int compareTo(Requires that)"
title: "Requires.compareTo"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Requires.compareTo

```java
public int compareTo(Requires that)
```

Compares this module dependence to another.

 

 Two `Requires` objects are compared by comparing their
 module names lexicographically. Where the module names are equal
 then the sets of modifiers are compared in the same way that
 module modifiers are compared (see `compareTo
 ModuleDescriptor.compareTo`). Where the module names are equal and
 the set of modifiers are equal then the version of the modules
 recorded at compile-time are compared. When comparing the versions
 recorded at compile-time then a dependence that has a recorded
 version is considered to succeed a dependence that does not have a
 recorded version. If both recorded versions are `parse(String) unparseable` then the `rawCompiledVersion() raw version strings` are compared
 lexicographically.

**参数**

- **that** — The module dependence to compare

**返回**

- A negative integer, zero, or a positive integer if this module dependence is less than, equal to, or greater than the given module dependence
