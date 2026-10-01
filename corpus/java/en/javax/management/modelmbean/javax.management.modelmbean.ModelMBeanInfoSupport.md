---
id: "java-en-function-javax-management-modelmbean-modelmbeaninfosupport"
language: "java"
lang: "en"
category: "function"
name: "javax.management.modelmbean.ModelMBeanInfoSupport"
title: "ModelMBeanInfoSupport"
directive: "type"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfoSupport

This class represents the meta data for ModelMBeans.  Descriptors have been
 added on the meta data objects.
 

 Java resources wishing to be manageable instantiate the ModelMBean using the
 MBeanServer's createMBean method.  The resource then sets the ModelMBeanInfo
 and Descriptors for the ModelMBean instance. The attributes and operations
 exposed via the ModelMBeanInfo for the ModelMBean are accessible
 from MBeans, connectors/adaptors like other MBeans. Through the Descriptors,
 values and methods in the managed application can be defined and mapped to
 attributes and operations of the ModelMBean.
 This mapping can be defined during development in a file or dynamically and
 programmatically at runtime.
 

 Every ModelMBean which is instantiated in the MBeanServer becomes manageable:
 its attributes and operations
 become remotely accessible through the connectors/adaptors connected to that
 MBeanServer.
 A Java object cannot be registered in the MBeanServer unless it is a JMX
 compliant MBean.
 By instantiating a ModelMBean, resources are guaranteed that the MBean is
 valid.

 MBeanException and RuntimeOperationsException must be thrown on every public
 method.  This allows for wrapping exceptions from distributed
 communications (RMI, EJB, etc.)

 

The **serialVersionUID** of this class is
 -1935722590756516193L.

> *Since 1.5*
