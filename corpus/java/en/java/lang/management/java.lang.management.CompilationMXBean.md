---
id: "java-en-function-java-lang-management-compilationmxbean"
language: "java"
lang: "en"
category: "function"
name: "java.lang.management.CompilationMXBean"
title: "CompilationMXBean"
directive: "type"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/CompilationMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompilationMXBean

The management interface for the compilation system of
 the Java virtual machine.

 

 A Java virtual machine has a single instance of the implementation
 class of this interface.  This instance implementing this interface is
 an MXBean
 that can be obtained by calling
 the `getCompilationMXBean` method or
 from the `getPlatformMBeanServer
 platform MBeanServer` method.

 

The `ObjectName` for uniquely identifying the MXBean for
 the compilation system within an MBeanServer is:
 
  `COMPILATION_MXBEAN_NAME
         java.lang:type=Compilation`
 

 It can be obtained by calling the
 `getObjectName` method.

**参见**

- ManagementFactory#getPlatformMXBeans(Class)
- JMX Specification.
- Ways to Access MXBeans

> *Since 1.5*
