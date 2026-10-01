---
id: "java-en-function-mbeanserverfactory-newmbeanserver"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerFactory.newMBeanServer"
signature: "public static MBeanServer newMBeanServer()"
title: "MBeanServerFactory.newMBeanServer"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerFactory.newMBeanServer

```java
public static MBeanServer newMBeanServer()
```

Return a new object implementing the MBeanServer interface
 with a standard default domain name, without keeping an
 internal reference to this new object.  The default domain name
 is used as the domain part in the ObjectName of MBeans when the
 domain is specified by the user is null.

 

The standard default domain name is
 DefaultDomain.

 

No reference is kept. findMBeanServer will not
 be able to return a reference to this MBeanServer object, but
 the garbage collector will be able to remove the MBeanServer
 object when it is no longer referenced.

 

This method is equivalent to newMBeanServer(null).

**返回**

- the newly created MBeanServer.

**异常**

- **JMRuntimeException** — if the property javax.management.builder.initial exists but the class it names cannot be instantiated through a public no-argument constructor; or if the instantiated builder returns null from its `newMBeanServerDelegate newMBeanServerDelegate` or `newMBeanServer newMBeanServer` methods.
- **ClassCastException** — if the property javax.management.builder.initial exists and can be instantiated but is not assignment compatible with `MBeanServerBuilder`.
