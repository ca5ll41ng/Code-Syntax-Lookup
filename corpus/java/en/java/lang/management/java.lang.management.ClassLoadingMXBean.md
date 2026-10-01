---
id: "java-en-function-java-lang-management-classloadingmxbean"
language: "java"
lang: "en"
category: "function"
name: "java.lang.management.ClassLoadingMXBean"
title: "ClassLoadingMXBean"
directive: "type"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ClassLoadingMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoadingMXBean

The management interface for the class loading system of
 the Java virtual machine.

 

 A Java virtual machine has a single instance of the implementation
 class of this interface.  This instance implementing this interface is
 an MXBean
 that can be obtained by calling
 the `getClassLoadingMXBean` method or
 from the `getPlatformMBeanServer
 platform MBeanServer`.

 

The `ObjectName` for uniquely identifying the MXBean for
 the class loading system within an `MBeanServer` is:
 
 `CLASS_LOADING_MXBEAN_NAME
        java.lang:type=ClassLoading`
 

 It can be obtained by calling the
 `getObjectName` method.

**参见**

- ManagementFactory#getPlatformMXBeans(Class)
- JMX Specification.
- Ways to Access MXBeans

> *Since 1.5*
