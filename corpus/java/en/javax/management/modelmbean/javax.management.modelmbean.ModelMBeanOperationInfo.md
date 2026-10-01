---
id: "java-en-function-javax-management-modelmbean-modelmbeanoperationinfo"
language: "java"
lang: "en"
category: "function"
name: "javax.management.modelmbean.ModelMBeanOperationInfo"
title: "ModelMBeanOperationInfo"
directive: "type"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanOperationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanOperationInfo

The ModelMBeanOperationInfo object describes a management operation of
 the ModelMBean.  It is a subclass of MBeanOperationInfo with the addition
 of an associated Descriptor and an implementation of the DescriptorAccess
 interface.

 
 The fields in the descriptor are defined, but not limited to, the following.
 Note that when the Type in this table is Number, a String that is the decimal
 representation of a Long can also be used.

 
 ModelMBeanOperationInfo Fields
 
 NameTypeMeaning
 
 
 nameString
     Operation name.
 descriptorTypeString
     Must be "operation".
 classString
     Class where method is defined (fully qualified).
 roleString
     Must be "operation", "getter", or "setter".
 targetObjectObject
     Object on which to execute this method.
 targetTypeString
     type of object reference for targetObject. Can be:
         ObjectReference | Handle | EJBHandle | IOR | RMIReference.
 valueObject
     Cached value for operation.
 displayNameString
     Human readable display name of the operation.
 currencyTimeLimitNumber
     How long cached value is valid.
 lastUpdatedTimeStampNumber
     When cached value was set.
 visibilityNumber
     1-4 where 1: always visible 4: rarely visible.
 presentationStringString
     XML formatted string to describe how to present operation
 
 

 

The default descriptor will have name, descriptorType, displayName and
 role fields set.  The default value of the name and displayName fields is
 the operation name.

 

**Note:** because of inconsistencies in previous versions of
 this specification, it is recommended not to use negative or zero
 values for currencyTimeLimit.  To indicate that a
 cached value is never valid, omit the
 currencyTimeLimit field.  To indicate that it is
 always valid, use a very large number for this field.

 

The **serialVersionUID** of this class is 6532732096650090465L.

> *Since 1.5*
