---
id: "java-en-function-mbeanconstructorinfo-equals"
language: "java"
lang: "en"
category: "function"
name: "MBeanConstructorInfo.equals"
signature: "public boolean equals(Object o)"
title: "MBeanConstructorInfo.equals"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanConstructorInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanConstructorInfo.equals

```java
public boolean equals(Object o)
```

Compare this MBeanConstructorInfo to another.

**参数**

- **o** — the object to compare to.

**返回**

- true if and only if `o` is an MBeanConstructorInfo such that its `getName`, `getDescription`, `getSignature`, and `getDescriptor` values are equal (not necessarily identical) to those of this MBeanConstructorInfo.  Two signature arrays are equal if their elements are pairwise equal.
