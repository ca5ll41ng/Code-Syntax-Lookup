---
id: "java-en-function-mbeaninfo-mbeaninfo"
language: "java"
lang: "en"
category: "function"
name: "MBeanInfo.MBeanInfo"
signature: "public MBeanInfo(String className, String description, MBeanAttributeInfo[] attributes, MBeanConstructorInfo[] constructors, MBeanOperationInfo[] operations, MBeanNotificationInfo[] notifications) throws IllegalArgumentException"
title: "MBeanInfo.MBeanInfo"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanInfo.MBeanInfo

```java
public MBeanInfo(String className, String description, MBeanAttributeInfo[] attributes, MBeanConstructorInfo[] constructors, MBeanOperationInfo[] operations, MBeanNotificationInfo[] notifications) throws IllegalArgumentException
```

Constructs an `MBeanInfo`.

**参数**

- **className** — The name of the Java class of the MBean described by this `MBeanInfo`.  This value may be any syntactically legal Java class name.  It does not have to be a Java class known to the MBean server or to the MBean's ClassLoader.  If it is a Java class known to the MBean's ClassLoader, it is recommended but not required that the class's public methods include those that would appear in a Standard MBean implementing the attributes and operations in this MBeanInfo.
- **description** — A human readable description of the MBean (optional).
- **attributes** — The list of exposed attributes of the MBean. This may be null with the same effect as a zero-length array.
- **constructors** — The list of public constructors of the MBean.  This may be null with the same effect as a zero-length array.
- **operations** — The list of operations of the MBean.  This may be null with the same effect as a zero-length array.
- **notifications** — The list of notifications emitted.  This may be null with the same effect as a zero-length array.
