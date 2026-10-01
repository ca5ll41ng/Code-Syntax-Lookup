---
id: "java-en-function-provides-compareto"
language: "java"
lang: "en"
category: "function"
name: "Provides.compareTo"
signature: "public int compareTo(Provides that)"
title: "Provides.compareTo"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provides.compareTo

```java
public int compareTo(Provides that)
```

Compares this `Provides` to another.

 

 Two `Provides` objects are compared by comparing the
 `#binary-name binary name`
 of the service type lexicographically. Where the
 class names are equal then the list of the provider class names are
 compared by comparing the corresponding elements of both lists
 lexicographically and in sequence. Where the lists differ in size,
 `N` is the size of the shorter list, and the first `N`
 corresponding elements are equal, then the longer list is considered
 to succeed the shorter list.

**参数**

- **that** — The `Provides` to compare

**返回**

- A negative integer, zero, or a positive integer if this `Provides` is less than, equal to, or greater than the given `Provides`
