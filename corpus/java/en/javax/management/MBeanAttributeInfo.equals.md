---
id: "java-en-function-mbeanattributeinfo-equals"
language: "java"
lang: "en"
category: "function"
name: "MBeanAttributeInfo.equals"
signature: "public boolean equals(Object o)"
title: "MBeanAttributeInfo.equals"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanAttributeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanAttributeInfo.equals

```java
public boolean equals(Object o)
```

Compare this MBeanAttributeInfo to another.

**参数**

- **o** — the object to compare to.

**返回**

- true if and only if `o` is an MBeanAttributeInfo such that its `getName`, `getType`, `getDescription`, `isReadable`, `isWritable`, and `isIs` values are equal (not necessarily identical) to those of this MBeanAttributeInfo.
