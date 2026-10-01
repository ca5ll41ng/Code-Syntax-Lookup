---
id: "java-en-function-java-rmi-naming"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.Naming"
title: "Naming"
directive: "type"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/Naming.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Naming

The Naming class provides methods for storing and obtaining
 references to remote objects in a remote object registry.  Each method of
 the Naming class takes as one of its arguments a name that
 is a java.lang.String in URL format (without the
 scheme component) of the form:

 
```

    //host:port/name
 
```

 

where host is the host (remote or local) where the registry
 is located, port is the port number on which the registry
 accepts calls, and where name is a simple string uninterpreted
 by the registry. Both host and port are optional.
 If host is omitted, the host defaults to the local host. If
 port is omitted, then the port defaults to 1099, the
 "well-known" port that RMI's registry, rmiregistry, uses.

 

Binding a name for a remote object is associating or
 registering a name for a remote object that can be used at a later time to
 look up that remote object.  A remote object can be associated with a name
 using the Naming class's bind or
 rebind methods.

 

Once a remote object is registered (bound) with the RMI registry on the
 local host, callers on a remote (or local) host can lookup the remote
 object by name, obtain its reference, and then invoke remote methods on the
 object.  A registry may be shared by all servers running on a host or an
 individual server process may create and use its own registry if desired
 (see java.rmi.registry.LocateRegistry.createRegistry method
 for details).

**参见**

- java.rmi.registry.Registry
- java.rmi.registry.LocateRegistry
- java.rmi.registry.LocateRegistry#createRegistry(int)

> *Since 1.1*
