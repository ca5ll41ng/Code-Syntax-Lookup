---
id: "java-en-function-java-lang-management-runtimemxbean"
language: "java"
lang: "en"
category: "function"
name: "java.lang.management.RuntimeMXBean"
title: "RuntimeMXBean"
directive: "type"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/RuntimeMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeMXBean

The management interface for the runtime system of
 the Java virtual machine.

 

 A Java virtual machine has a single instance of the implementation
 class of this interface.  This instance implementing this interface is
 an MXBean
 that can be obtained by calling
 the `getRuntimeMXBean` method or
 from the `getPlatformMBeanServer
 platform MBeanServer` method.

 

The `ObjectName` for uniquely identifying the MXBean for
 the runtime system within an MBeanServer is:
 
    `RUNTIME_MXBEAN_NAME
           java.lang:type=Runtime`
 

 It can be obtained by calling the
 `getObjectName` method.

 

 This interface defines several convenient methods for accessing
 system properties about the Java virtual machine.

**参见**

- ManagementFactory#getPlatformMXBeans(Class)
- JMX Specification.
- Ways to Access MXBeans

> *Since 1.5*
