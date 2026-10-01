---
id: "java-en-function-javax-management-openmbean-openmbeaninfo"
language: "java"
lang: "en"
category: "function"
name: "javax.management.openmbean.OpenMBeanInfo"
title: "OpenMBeanInfo"
directive: "type"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanInfo

Describes an Open MBean: an Open MBean is recognized as such if
 its `getMBeanInfo()
 getMBeanInfo` method returns an instance of a class which
 implements the `OpenMBeanInfo` interface, typically `OpenMBeanInfoSupport`.

 

This interface declares the same methods as the class `javax.management.MBeanInfo`.  A class implementing this interface
 (typically `OpenMBeanInfoSupport`) should extend `javax.management.MBeanInfo`.

 

The `getAttributes`, `getOperations` and
 `getConstructors` methods of the implementing class should
 return at runtime an array of instances of a subclass of `MBeanAttributeInfo`, `MBeanOperationInfo` or `MBeanConstructorInfo` respectively which implement the `OpenMBeanAttributeInfo`, `OpenMBeanOperationInfo` or `OpenMBeanConstructorInfo` interface respectively.

> *Since 1.5*
