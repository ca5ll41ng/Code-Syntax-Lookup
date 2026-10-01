---
id: "java-en-function-javax-management-loading-privateclassloader"
language: "java"
lang: "en"
category: "function"
name: "javax.management.loading.PrivateClassLoader"
title: "PrivateClassLoader"
directive: "type"
module: "java.management/javax.management.loading"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/loading/PrivateClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivateClassLoader

Marker interface indicating that a ClassLoader should not be added
 to the `ClassLoaderRepository`.  When a ClassLoader is
 registered as an MBean in the MBean server, it is added to the
 MBean server's ClassLoaderRepository unless it implements this
 interface.

> *Since 1.5*
