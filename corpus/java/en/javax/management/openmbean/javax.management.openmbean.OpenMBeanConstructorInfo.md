---
id: "java-en-function-javax-management-openmbean-openmbeanconstructorinfo"
language: "java"
lang: "en"
category: "function"
name: "javax.management.openmbean.OpenMBeanConstructorInfo"
title: "OpenMBeanConstructorInfo"
directive: "type"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanConstructorInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanConstructorInfo

Describes a constructor of an Open MBean.

 

This interface declares the same methods as the class `javax.management.MBeanConstructorInfo`.  A class implementing this
 interface (typically `OpenMBeanConstructorInfoSupport`)
 should extend `javax.management.MBeanConstructorInfo`.

 

The `getSignature` method should return at runtime an
 array of instances of a subclass of `MBeanParameterInfo`
 which implements the `OpenMBeanParameterInfo` interface
 (typically `OpenMBeanParameterInfoSupport`).

> *Since 1.5*
