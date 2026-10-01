---
id: "java-en-function-java-rmi-registry-locateregistry"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.registry.LocateRegistry"
title: "LocateRegistry"
directive: "type"
module: "java.rmi/java.rmi.registry"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/registry/LocateRegistry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocateRegistry

LocateRegistry is used to obtain a reference to a bootstrap
 remote object registry on a particular host (including the local host), or
 to create a remote object registry that accepts calls on a specific port.

 

 Note that a getRegistry call does not actually make a
 connection to the remote host.  It simply creates a local reference to
 the remote registry and will succeed even if no registry is running on
 the remote host.  Therefore, a subsequent method invocation to a remote
 registry returned as a result of this method may fail.

**参见**

- java.rmi.registry.Registry

> *Since 1.1*
