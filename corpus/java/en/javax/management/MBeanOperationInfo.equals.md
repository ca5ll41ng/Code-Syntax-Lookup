---
id: "java-en-function-mbeanoperationinfo-equals"
language: "java"
lang: "en"
category: "function"
name: "MBeanOperationInfo.equals"
signature: "public boolean equals(Object o)"
title: "MBeanOperationInfo.equals"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanOperationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanOperationInfo.equals

```java
public boolean equals(Object o)
```

Compare this MBeanOperationInfo to another.

**参数**

- **o** — the object to compare to.

**返回**

- true if and only if `o` is an MBeanOperationInfo such that its `getName`, `getReturnType`, `getDescription`, `getImpact`, `getDescriptor` and `getSignature` values are equal (not necessarily identical) to those of this MBeanConstructorInfo.  Two signature arrays are equal if their elements are pairwise equal.
