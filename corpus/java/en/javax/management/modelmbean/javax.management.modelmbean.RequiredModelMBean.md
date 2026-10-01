---
id: "java-en-function-javax-management-modelmbean-requiredmodelmbean"
language: "java"
lang: "en"
category: "function"
name: "javax.management.modelmbean.RequiredModelMBean"
title: "RequiredModelMBean"
directive: "type"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean

This class is the implementation of a ModelMBean. An appropriate
 implementation of a ModelMBean must be shipped with every JMX Agent
 and the class must be named RequiredModelMBean.
 

 Java resources wishing to be manageable instantiate the
 RequiredModelMBean using the MBeanServer's createMBean method.
 The resource then sets the MBeanInfo and Descriptors for the
 RequiredModelMBean instance. The attributes and operations exposed
 via the ModelMBeanInfo for the ModelMBean are accessible
 from MBeans, connectors/adaptors like other MBeans. Through the
 Descriptors, values and methods in the managed application can be
 defined and mapped to attributes and operations of the ModelMBean.
 This mapping can be defined dynamically and programmatically at runtime.
 

 Every RequiredModelMBean which is instantiated in the MBeanServer
 becomes manageable:

 its attributes and operations become remotely accessible through the
 connectors/adaptors connected to that MBeanServer.
 

 A Java object cannot be registered in the MBeanServer unless it is a
 JMX compliant MBean. By instantiating a RequiredModelMBean, resources
 are guaranteed that the MBean is valid.

 MBeanException and RuntimeOperationsException must be thrown on every
 public method.  This allows for wrapping exceptions from distributed
 communications (RMI, EJB, etc.)

> *Since 1.5*
