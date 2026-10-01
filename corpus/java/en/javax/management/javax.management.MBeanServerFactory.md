---
id: "java-en-function-javax-management-mbeanserverfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.management.MBeanServerFactory"
title: "MBeanServerFactory"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerFactory

Provides MBean server references.  There are no instances of
 this class.

 

Since JMX 1.2 this class makes it possible to replace the default
 MBeanServer implementation. This is done using the
 `javax.management.MBeanServerBuilder` class.
 The class of the initial MBeanServerBuilder to be
 instantiated can be specified through the
 **javax.management.builder.initial** system property.
 The specified class must be a public subclass of
 `javax.management.MBeanServerBuilder`, and must have a public
 empty constructor.
 

By default, if no value for that property is specified, an instance of
 `javax.management.MBeanServerBuilder javax.management.MBeanServerBuilder`
 is created. Otherwise, the MBeanServerFactory attempts to load the
 specified class using
 `getContextClassLoader()
   Thread.currentThread`, or if that is null,
 `forName`. Then
 it creates an initial instance of that Class using
 `newInstance`. If any checked exception
 is raised during this process (e.g.
 `java.lang.ClassNotFoundException`,
 `java.lang.InstantiationException`) the MBeanServerFactory
 will propagate this exception from within a RuntimeException.

 

The **javax.management.builder.initial** system property is
 consulted every time a new MBeanServer needs to be created, and the
 class pointed to by that property is loaded. If that class is different
 from that of the current MBeanServerBuilder, then a new MBeanServerBuilder
 is created. Otherwise, the MBeanServerFactory may create a new
 MBeanServerBuilder or reuse the current one.

 

If the class pointed to by the property cannot be
 loaded, or does not correspond to a valid subclass of MBeanServerBuilder
 then an exception is propagated, and no MBeanServer can be created until
 the **javax.management.builder.initial** system property is reset to
 valid value.

 

The MBeanServerBuilder makes it possible to wrap the MBeanServers
 returned by the default MBeanServerBuilder implementation, for the purpose
 of e.g. adding an additional security layer.

> *Since 1.5*
