---
id: "java-en-function-java-rmi-registry-registry"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.registry.Registry"
title: "Registry"
directive: "type"
module: "java.rmi/java.rmi.registry"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/registry/Registry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Registry

Registry is a remote interface to a simple remote
 object registry that provides methods for storing and retrieving
 remote object references bound with arbitrary string names.  The
 bind, unbind, and rebind
 methods are used to alter the name bindings in the registry, and
 the lookup and list methods are used to
 query the current name bindings.

 

In its typical usage, a Registry enables RMI client
 bootstrapping: it provides a simple means for a client to obtain an
 initial reference to a remote object.  Therefore, a registry's
 remote object implementation is typically exported with a
 well-known address, such as with a well-known `REGISTRY_ID ObjID` and TCP port number
 (default is `REGISTRY_PORT 1099`).

 

The `LocateRegistry` class provides a programmatic API for
 constructing a bootstrap reference to a Registry at a
 remote address (see the static getRegistry methods)
 and for creating and exporting a Registry in the
 current VM on a particular local address (see the static
 createRegistry methods).

 

A Registry implementation may choose to restrict
 access to some or all of its methods (for example, methods that
 mutate the registry's bindings may be restricted to calls
 originating from the local host).  If a Registry
 method chooses to deny access for a given invocation, its
 implementation may throw `java.rmi.AccessException`, which
 (because it extends `java.rmi.RemoteException`) will be
 wrapped in a `java.rmi.ServerException` when caught by a
 remote client.

 

The names used for bindings in a Registry are pure
 strings, not parsed.  A service which stores its remote reference
 in a Registry may wish to use a package name as a
 prefix in the name binding to reduce the likelihood of name
 collisions in the registry.

**参见**

- LocateRegistry

> *Since 1.1*
