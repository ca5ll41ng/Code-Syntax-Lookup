---
id: "java-en-function-java-lang-management-garbagecollectormxbean"
language: "java"
lang: "en"
category: "function"
name: "java.lang.management.GarbageCollectorMXBean"
title: "GarbageCollectorMXBean"
directive: "type"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/GarbageCollectorMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GarbageCollectorMXBean

The management interface for the garbage collection of
 the Java virtual machine.  Garbage collection is the process
 that the Java virtual machine uses to find and reclaim unreachable
 objects to free up memory space.  A garbage collector is one type of
 `MemoryManagerMXBean memory manager`.

 

 A Java virtual machine may have one or more instances of
 the implementation class of this interface.
 An instance implementing this interface is
 an MXBean
 that can be obtained by calling
 the `getGarbageCollectorMXBeans` method or
 from the `getPlatformMBeanServer
 platform MBeanServer` method.

 

The `ObjectName` for uniquely identifying the MXBean for
 a garbage collector within an MBeanServer is:
 
   `GARBAGE_COLLECTOR_MXBEAN_DOMAIN_TYPE
    java.lang:type=GarbageCollector``,name=`collector's name
 

 It can be obtained by calling the
 `getObjectName` method.

 A platform usually includes additional platform-dependent information
 specific to a garbage collection algorithm for monitoring.

**参见**

- ManagementFactory#getPlatformMXBeans(Class)
- MemoryMXBean
- JMX Specification.
- Ways to Access MXBeans

> *Since 1.5*
