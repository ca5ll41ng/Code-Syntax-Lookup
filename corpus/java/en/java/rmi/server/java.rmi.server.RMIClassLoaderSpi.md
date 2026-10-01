---
id: "java-en-function-java-rmi-server-rmiclassloaderspi"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.server.RMIClassLoaderSpi"
title: "RMIClassLoaderSpi"
directive: "type"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIClassLoaderSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIClassLoaderSpi

RMIClassLoaderSpi is the service provider interface for
 RMIClassLoader.

 In particular, an RMIClassLoaderSpi instance provides an
 implementation of the following static methods of
 RMIClassLoader:

 

 
- `loadClass`
 
- `loadClass`
 
- `loadClass`
 
- `loadProxyClass`
 
- `getClassLoader`
 
- `getClassAnnotation`

 

 When one of those methods is invoked, its behavior is to delegate
 to a corresponding method on an instance of this class.
 The details of how each method delegates to the provider instance is
 described in the documentation for each particular method.
 See the documentation for `RMIClassLoader` for a description
 of how a provider instance is chosen.

**参见**

- RMIClassLoader

> *Since 1.4*
