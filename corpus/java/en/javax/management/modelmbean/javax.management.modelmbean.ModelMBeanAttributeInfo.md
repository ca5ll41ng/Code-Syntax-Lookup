---
id: "java-en-function-javax-management-modelmbean-modelmbeanattributeinfo"
language: "java"
lang: "en"
category: "function"
name: "javax.management.modelmbean.ModelMBeanAttributeInfo"
title: "ModelMBeanAttributeInfo"
directive: "type"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanAttributeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanAttributeInfo

The ModelMBeanAttributeInfo object describes an attribute of the ModelMBean.
 It is a subclass of MBeanAttributeInfo with the addition of an associated Descriptor
 and an implementation of the DescriptorAccess interface.

 
 The fields in the descriptor are defined, but not limited to, the following.
 Note that when the Type in this table is Number, a String that is the decimal
 representation of a Long can also be used.

 
 ModelMBeanAttributeInfo Fields
 
 NameTypeMeaning
 
 
 nameString
     Attribute name.
 descriptorTypeString
     Must be "attribute".
 valueObject
     Current (cached) value for attribute.
 defaultObject
     Default value for attribute.
 displayNameString
     Name of attribute to be used in displays.
 getMethodString
     Name of operation descriptor for get method.
 setMethodString
     Name of operation descriptor for set method.
 protocolMapDescriptor
     See the section "Protocol Map Support" in the JMX specification
         document.  Mappings must be appropriate for the attribute and entries
         can be updated or augmented at runtime.
 persistPolicyString
     One of: OnUpdate|OnTimer|NoMoreOftenThan|OnUnregister|Always|Never.
         See the section "MBean Descriptor Fields" in the JMX specification
         document.
 persistPeriodNumber
     Frequency of persist cycle in seconds. Used when persistPolicy is
         "OnTimer" or "NoMoreOftenThan".
 currencyTimeLimitNumber
     How long value is valid: &lt;0 never,
         =0 always, &gt;0 seconds.
 lastUpdatedTimeStampNumber
     When value was set.
 visibilityNumber
     1-4 where 1: always visible, 4: rarely visible.
 presentationStringString
     XML formatted string to allow presentation of data.
 
 

 

The default descriptor contains the name, descriptorType and displayName
 fields.  The default value of the name and displayName fields is the name of
 the attribute.

 

**Note:** because of inconsistencies in previous versions of
 this specification, it is recommended not to use negative or zero
 values for currencyTimeLimit.  To indicate that a
 cached value is never valid, omit the
 currencyTimeLimit field.  To indicate that it is
 always valid, use a very large number for this field.

 

The **serialVersionUID** of this class is 6181543027787327345L.

> *Since 1.5*
