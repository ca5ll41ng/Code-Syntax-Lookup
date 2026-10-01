---
id: "java-en-function-javax-management-openmbean-openmbeanoperationinfo"
language: "java"
lang: "en"
category: "function"
name: "javax.management.openmbean.OpenMBeanOperationInfo"
title: "OpenMBeanOperationInfo"
directive: "type"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanOperationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanOperationInfo

Describes an operation of an Open MBean.

 

This interface declares the same methods as the class `javax.management.MBeanOperationInfo`.  A class implementing this
 interface (typically `OpenMBeanOperationInfoSupport`) should
 extend `javax.management.MBeanOperationInfo`.

 

The `getSignature` method should return at runtime an
 array of instances of a subclass of `MBeanParameterInfo`
 which implements the `OpenMBeanParameterInfo` interface
 (typically `OpenMBeanParameterInfoSupport`).

> *Since 1.5*
