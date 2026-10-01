---
id: "java-en-function-javax-management-mbeanserverpermission"
language: "java"
lang: "en"
category: "function"
name: "javax.management.MBeanServerPermission"
title: "MBeanServerPermission"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerPermission

A Permission to perform actions related to MBeanServers.
    The name of the permission specifies the operation requested
    or granted by the permission.  For a granted permission, it can be
    * to allow all of the MBeanServer operations specified below.
    Otherwise, for a granted or requested permission, it must be one of the
    following:
    
    createMBeanServer
    Create a new MBeanServer object using the method
    `createMBeanServer` or
    `createMBeanServer`.
    findMBeanServer
    Find an MBeanServer with a given name, or all MBeanServers in this
    JVM, using the method `findMBeanServer`.
    newMBeanServer
    Create a new MBeanServer object without keeping a reference to it,
    using the method `newMBeanServer` or
    `newMBeanServer`.
    releaseMBeanServer
    Remove the MBeanServerFactory's reference to an MBeanServer,
    using the method `releaseMBeanServer`.
    
    The name of the permission can also denote a list of one or more
    comma-separated operations.  Spaces are allowed at the beginning and
    end of the name and before and after commas.
    

    MBeanServerPermission("createMBeanServer") implies
    MBeanServerPermission("newMBeanServer").

 This permission cannot be used for controlling access to resources
 as the Security Manager is no longer supported.
 Consequently this class is deprecated for removal in a future release.

> *Since 1.5*

> **⚠ Deprecated** — This class was only useful in conjunction with the Security Manager, which is no longer supported. There is no replacement for this class.
