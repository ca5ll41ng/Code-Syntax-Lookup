---
id: "java-en-function-mbeaninfo-getdescriptor"
language: "java"
lang: "en"
category: "function"
name: "MBeanInfo.getDescriptor"
signature: "public Descriptor getDescriptor()"
title: "MBeanInfo.getDescriptor"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanInfo.getDescriptor

```java
public Descriptor getDescriptor()
```

Get the descriptor of this MBeanInfo.  Changing the returned value
 will have no affect on the original descriptor.

**返回**

- a descriptor that is either immutable or a copy of the original.

> *Since 1.6*
