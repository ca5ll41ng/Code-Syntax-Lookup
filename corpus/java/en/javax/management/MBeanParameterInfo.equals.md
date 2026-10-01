---
id: "java-en-function-mbeanparameterinfo-equals"
language: "java"
lang: "en"
category: "function"
name: "MBeanParameterInfo.equals"
signature: "public boolean equals(Object o)"
title: "MBeanParameterInfo.equals"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanParameterInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanParameterInfo.equals

```java
public boolean equals(Object o)
```

Compare this MBeanParameterInfo to another.

**参数**

- **o** — the object to compare to.

**返回**

- true if and only if `o` is an MBeanParameterInfo such that its `getName`, `getType`, `getDescriptor`, and `getDescription` values are equal (not necessarily identical) to those of this MBeanParameterInfo.
