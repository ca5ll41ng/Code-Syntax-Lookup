---
id: "java-en-function-javax-management-loading-classloaderrepository"
language: "java"
lang: "en"
category: "function"
name: "javax.management.loading.ClassLoaderRepository"
title: "ClassLoaderRepository"
directive: "type"
module: "java.management/javax.management.loading"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/loading/ClassLoaderRepository.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoaderRepository

Instances of this interface are used to keep the list of ClassLoaders
 registered in an MBean Server.
 They provide the necessary methods to load classes using the registered
 ClassLoaders.

 

The first ClassLoader in a ClassLoaderRepository is
 always the MBean Server's own ClassLoader.

 

When an MBean is registered in an MBean Server, if it is of a
 subclass of `java.lang.ClassLoader` and if it does not
 implement the interface `PrivateClassLoader`, it is added to
 the end of the MBean Server's ClassLoaderRepository.
 If it is subsequently unregistered from the MBean Server, it is
 removed from the ClassLoaderRepository.

 

The order of MBeans in the ClassLoaderRepository is
 significant.  For any two MBeans X and Y in the
 ClassLoaderRepository, X must appear before
 Y if the registration of X was completed before
 the registration of Y started.  If X and
 Y were registered concurrently, their order is
 indeterminate.  The registration of an MBean corresponds to the
 call to `registerMBean` or one of the `MBeanServer`.createMBean methods.

**参见**

- javax.management.MBeanServerFactory

> *Since 1.5*
