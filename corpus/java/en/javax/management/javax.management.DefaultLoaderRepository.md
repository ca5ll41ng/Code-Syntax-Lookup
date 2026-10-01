---
id: "java-en-function-javax-management-defaultloaderrepository"
language: "java"
lang: "en"
category: "function"
name: "javax.management.DefaultLoaderRepository"
title: "DefaultLoaderRepository"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/DefaultLoaderRepository.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultLoaderRepository

Keeps the list of Class Loaders registered in the MBean Server.
 It provides the necessary methods to load classes using the registered
 Class Loaders.

 

This deprecated class is maintained for compatibility.  In
 previous versions of the JMX API, there was one
 DefaultLoaderRepository shared by all MBean servers.
 As of version 1.2 of the JMX API, that functionality is
 approximated by using `findMBeanServer` to
 find all known MBean servers, and consulting the `ClassLoaderRepository` of each one.  It is strongly recommended
 that code referencing DefaultLoaderRepository be
 rewritten.

> *Since 1.5*

> **⚠ Deprecated** — Use `getClassLoaderRepository` instead.
