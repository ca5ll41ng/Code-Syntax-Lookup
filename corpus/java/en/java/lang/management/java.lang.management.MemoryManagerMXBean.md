---
id: "java-en-function-java-lang-management-memorymanagermxbean"
language: "java"
lang: "en"
category: "function"
name: "java.lang.management.MemoryManagerMXBean"
title: "MemoryManagerMXBean"
directive: "type"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryManagerMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryManagerMXBean

The management interface for a memory manager.
 A memory manager manages one or more memory pools of the
 Java virtual machine.

 

 A Java virtual machine has one or more memory managers.
 An instance implementing this interface is
 an MXBean
 that can be obtained by calling
 the `getMemoryManagerMXBeans` method or
 from the `getPlatformMBeanServer
 platform MBeanServer` method.

 

The `ObjectName` for uniquely identifying the MXBean for
 a memory manager within an MBeanServer is:
 
   `MEMORY_MANAGER_MXBEAN_DOMAIN_TYPE
    java.lang:type=MemoryManager``,name=`manager's name
 

 It can be obtained by calling the
 `getObjectName` method.

**参见**

- ManagementFactory#getPlatformMXBeans(Class)
- MemoryMXBean
- JMX Specification.
- Ways to Access MXBeans

> *Since 1.5*
