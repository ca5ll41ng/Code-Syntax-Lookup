---
id: "java-en-function-javax-management-modelmbean-modelmbeanconstructorinfo"
language: "java"
lang: "en"
category: "function"
name: "javax.management.modelmbean.ModelMBeanConstructorInfo"
title: "ModelMBeanConstructorInfo"
directive: "type"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanConstructorInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanConstructorInfo

The ModelMBeanConstructorInfo object describes a constructor of the ModelMBean.
 It is a subclass of MBeanConstructorInfo with the addition of an associated Descriptor
 and an implementation of the DescriptorAccess interface.

 
 The fields in the descriptor are defined, but not limited to, the following.
 Note that when the Type in this table is Number, a String that is the decimal
 representation of a Long can also be used.

 
 ModelMBeanConstructorInfo Fields
 
 NameTypeMeaning
 
 
 nameString
     Constructor name.
 descriptorTypeString
     Must be "operation".
 roleString
     Must be "constructor".
 displayNameString
     Human readable name of constructor.
 visibilityNumber
     1-4 where 1: always visible 4: rarely visible.
 presentationStringString
     XML formatted string to describe how to present operation
 
 

 

The `persistPolicy` and `currencyTimeLimit` fields
 are meaningless for constructors, but are not considered invalid.

 

The default descriptor will have the `name`, `descriptorType`, `displayName` and `role` fields.

 

The **serialVersionUID** of this class is 3862947819818064362L.

> *Since 1.5*
