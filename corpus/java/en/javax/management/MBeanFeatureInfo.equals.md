---
id: "java-en-function-mbeanfeatureinfo-equals"
language: "java"
lang: "en"
category: "function"
name: "MBeanFeatureInfo.equals"
signature: "public boolean equals(Object o)"
title: "MBeanFeatureInfo.equals"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanFeatureInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanFeatureInfo.equals

```java
public boolean equals(Object o)
```

Compare this MBeanFeatureInfo to another.

**参数**

- **o** — the object to compare to.

**返回**

- true if and only if o is an MBeanFeatureInfo such that its `getName`, `getDescription`, and `getDescriptor` values are equal (not necessarily identical) to those of this MBeanFeatureInfo.
