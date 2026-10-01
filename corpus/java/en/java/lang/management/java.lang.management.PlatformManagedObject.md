---
id: "java-en-function-java-lang-management-platformmanagedobject"
language: "java"
lang: "en"
category: "function"
name: "java.lang.management.PlatformManagedObject"
title: "PlatformManagedObject"
directive: "type"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/PlatformManagedObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PlatformManagedObject

A platform managed object is a `javax.management.MXBean JMX MXBean`
 for monitoring and managing a component in the Java platform.
 Each platform managed object has a unique
 object name
 for the `getPlatformMBeanServer
 platform MBeanServer` access.
 All platform MXBeans will implement this interface.

 

 Note:
 The platform MXBean interfaces (i.e. all subinterfaces
 of `PlatformManagedObject`) are implemented
 by the Java platform only.  New methods may be added in these interfaces
 in future Java SE releases.
 In addition, this `PlatformManagedObject` interface is only
 intended for the management interfaces for the platform to extend but
 not for applications.

**参见**

- ManagementFactory

> *Since 1.7*
