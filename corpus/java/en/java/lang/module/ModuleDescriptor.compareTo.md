---
id: "java-en-function-moduledescriptor-compareto"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.compareTo"
signature: "public int compareTo(ModuleDescriptor that)"
title: "ModuleDescriptor.compareTo"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.compareTo

```java
public int compareTo(ModuleDescriptor that)
```

Compares this module descriptor to another.

 

 Two `ModuleDescriptor` objects are compared by comparing their
 module names lexicographically. Where the module names are equal then the
 module versions are compared. When comparing the module versions then a
 module descriptor with a version is considered to succeed a module
 descriptor that does not have a version. If both versions are `parse(String) unparseable` then the `rawVersion()
 raw version strings` are compared lexicographically. Where the module names
 are equal and the versions are equal (or not present in both), then the
 set of modifiers are compared. Sets of modifiers are compared by comparing
 a binary value computed for each set. If a modifier is present
 in the set then the bit at the position of its ordinal is `1`
 in the binary value, otherwise `0`. If the two set of modifiers
 are also equal then the other components of the module descriptors are
 compared in a manner that is consistent with `equals`.

**参数**

- **that** — The module descriptor to compare

**返回**

- A negative integer, zero, or a positive integer if this module descriptor is less than, equal to, or greater than the given module descriptor
