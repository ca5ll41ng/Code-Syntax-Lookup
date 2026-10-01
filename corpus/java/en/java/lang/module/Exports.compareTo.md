---
id: "java-en-function-exports-compareto"
language: "java"
lang: "en"
category: "function"
name: "Exports.compareTo"
signature: "public int compareTo(Exports that)"
title: "Exports.compareTo"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Exports.compareTo

```java
public int compareTo(Exports that)
```

Compares this module export to another.

 

 Two `Exports` objects are compared by comparing the package
 names lexicographically. Where the packages names are equal then the
 sets of modifiers are compared in the same way that module modifiers
 are compared (see `compareTo
 ModuleDescriptor.compareTo`). Where the package names are equal and
 the set of modifiers are equal then the set of target modules are
 compared. This is done by sorting the names of the target modules
 in ascending order, and according to their natural ordering, and then
 comparing the corresponding elements lexicographically. Where the
 sets differ in size, and the larger set contains all elements of the
 smaller set, then the larger set is considered to succeed the smaller
 set.

**参数**

- **that** — The module export to compare

**返回**

- A negative integer, zero, or a positive integer if this module export is less than, equal to, or greater than the given export dependence
