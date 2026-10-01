---
id: "java-en-function-javax-management-mbeanserver"
language: "java"
lang: "en"
category: "function"
name: "javax.management.MBeanServer"
title: "MBeanServer"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServer

This is the interface for MBean manipulation on the agent
 side. It contains the methods necessary for the creation,
 registration, and deletion of MBeans as well as the access methods
 for registered MBeans.  This is the core component of the JMX
 infrastructure.

 

User code does not usually implement this interface.  Instead,
 an object that implements this interface is obtained with one of
 the methods in the `javax.management.MBeanServerFactory` class.

 

Every MBean which is added to the MBean server becomes
 manageable: its attributes and operations become remotely
 accessible through the connectors/adaptors connected to that MBean
 server.  A Java object cannot be registered in the MBean server
 unless it is a JMX compliant MBean.

 When an MBean is registered or unregistered in the
 MBean server a `javax.management.MBeanServerNotification
 MBeanServerNotification` Notification is emitted. To register an
 object as listener to MBeanServerNotifications you should call the
 MBean server method `addNotificationListener
 addNotificationListener` with ObjectName the
 ObjectName of the `javax.management.MBeanServerDelegate MBeanServerDelegate`.  This
 ObjectName is: 

 JMImplementation:type=MBeanServerDelegate.

 

Methods of `MBeanServer` and its subclasses may throw
 `SecurityException` if the implementation doesn't authorize
 access to the underlying resource.

> *Since 1.5*
