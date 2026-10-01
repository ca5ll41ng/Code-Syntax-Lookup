---
id: "java-en-function-javax-management-modelmbean-descriptorsupport"
language: "java"
lang: "en"
category: "function"
name: "javax.management.modelmbean.DescriptorSupport"
title: "DescriptorSupport"
directive: "type"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/DescriptorSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DescriptorSupport

This class represents the metadata set for a ModelMBean element.  A
 descriptor is part of the ModelMBeanInfo,
 ModelMBeanNotificationInfo, ModelMBeanAttributeInfo,
 ModelMBeanConstructorInfo, and ModelMBeanParameterInfo.
 

 A descriptor consists of a collection of fields.  Each field is in
 fieldname=fieldvalue format.  Field names are not case sensitive,
 case will be preserved on field values.
 

 All field names and values are not predefined. New fields can be
 defined and added by any program.  Some fields have been predefined
 for consistency of implementation and support by the
 ModelMBeanInfo, ModelMBeanAttributeInfo, ModelMBeanConstructorInfo,
 ModelMBeanNotificationInfo, ModelMBeanOperationInfo and ModelMBean
 classes.

 

The **serialVersionUID** of this class is -6292969195866300415L.

> *Since 1.5*
