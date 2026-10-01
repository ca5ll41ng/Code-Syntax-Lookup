---
id: "java-en-function-java-lang-management-operatingsystemmxbean"
language: "java"
lang: "en"
category: "function"
name: "java.lang.management.OperatingSystemMXBean"
title: "OperatingSystemMXBean"
directive: "type"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/OperatingSystemMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OperatingSystemMXBean

The management interface for the operating system on which
 the Java virtual machine is running.

 

 A Java virtual machine has a single instance of the implementation
 class of this interface.  This instance implementing this interface is
 an MXBean
 that can be obtained by calling
 the `getOperatingSystemMXBean` method or
 from the `getPlatformMBeanServer
 platform MBeanServer` method.

 

The `ObjectName` for uniquely identifying the MXBean for
 the operating system within an MBeanServer is:
 
    `OPERATING_SYSTEM_MXBEAN_NAME
      java.lang:type=OperatingSystem`
 

 It can be obtained by calling the
 `getObjectName` method.

 

 This interface defines several convenient methods for accessing
 system properties about the operating system on which the Java
 virtual machine is running.

**参见**

- ManagementFactory#getPlatformMXBeans(Class)
- JMX Specification.
- Ways to Access MXBeans

> *Since 1.5*
