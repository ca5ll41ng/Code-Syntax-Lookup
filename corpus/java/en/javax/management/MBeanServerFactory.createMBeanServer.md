---
id: "java-en-function-mbeanserverfactory-creatembeanserver"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerFactory.createMBeanServer"
signature: "public static MBeanServer createMBeanServer()"
title: "MBeanServerFactory.createMBeanServer"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerFactory.createMBeanServer

```java
public static MBeanServer createMBeanServer()
```

Return a new object implementing the MBeanServer interface
 with a standard default domain name.  The default domain name
 is used as the domain part in the ObjectName of MBeans when the
 domain is specified by the user is null.

 

The standard default domain name is
 DefaultDomain.

 

The MBeanServer reference is internally kept. This will
 allow findMBeanServer to return a reference to
 this MBeanServer object.

 

This method is equivalent to createMBeanServer(null).

**返回**

- the newly created MBeanServer.

**异常**

- **JMRuntimeException** — if the property javax.management.builder.initial exists but the class it names cannot be instantiated through a public no-argument constructor; or if the instantiated builder returns null from its `newMBeanServerDelegate newMBeanServerDelegate` or `newMBeanServer newMBeanServer` methods.
- **ClassCastException** — if the property javax.management.builder.initial exists and can be instantiated but is not assignment compatible with `MBeanServerBuilder`.
