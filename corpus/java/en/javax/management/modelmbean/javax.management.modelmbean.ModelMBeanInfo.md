---
id: "java-en-function-javax-management-modelmbean-modelmbeaninfo"
language: "java"
lang: "en"
category: "function"
name: "javax.management.modelmbean.ModelMBeanInfo"
title: "ModelMBeanInfo"
directive: "type"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfo

This interface is implemented by the ModelMBeanInfo for every ModelMBean. An implementation of this interface
 must be shipped with every JMX Agent.
 

 Java resources wishing to be manageable instantiate the ModelMBean using the MBeanServer's
 createMBean method.  The resource then sets the ModelMBeanInfo and Descriptors for the ModelMBean
 instance. The attributes, operations, and notifications exposed via the ModelMBeanInfo for the
 ModelMBean comprise the management interface and are accessible
 from MBeans, connectors/adaptors like other MBeans. Through the Descriptors, values and methods in
 the managed application can be defined and mapped to attributes and operations of the ModelMBean.
 This mapping can be defined during development in a file or dynamically and
 programmatically at runtime.
 

 Every ModelMBean which is instantiated in the MBeanServer becomes manageable:
 its attributes, operations, and notifications
 become remotely accessible through the connectors/adaptors connected to that MBeanServer.
 A Java object cannot be registered in the MBeanServer unless it is a JMX compliant MBean.
 By instantiating a ModelMBean, resources are guaranteed that the MBean is valid.

 MBeanException and RuntimeOperationsException must be thrown on every public method.  This allows
  for wrapping exceptions from distributed communications (RMI, EJB, etc.)

> *Since 1.5*
