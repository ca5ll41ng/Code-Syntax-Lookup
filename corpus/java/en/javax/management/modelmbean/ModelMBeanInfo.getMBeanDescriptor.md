---
id: "java-en-function-modelmbeaninfo-getmbeandescriptor"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanInfo.getMBeanDescriptor"
signature: "public Descriptor getMBeanDescriptor() throws MBeanException, RuntimeOperationsException"
title: "ModelMBeanInfo.getMBeanDescriptor"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfo.getMBeanDescriptor

```java
public Descriptor getMBeanDescriptor() throws MBeanException, RuntimeOperationsException
```

Returns the ModelMBean's descriptor which contains MBean wide
 policies.  This descriptor contains metadata about the MBean and default
 policies for persistence and caching.

 
 The fields in the descriptor are defined, but not limited to, the
 following.  Note that when the Type in this table is Number, a String
 that is the decimal representation of a Long can also be used.

 
 ModelMBean Fields
 
 NameTypeMeaning
 
 
 nameString
     MBean name.
 descriptorTypeString
     Must be "mbean".
 displayNameString
     Name of MBean to be used in displays.
 persistPolicyString
     One of: OnUpdate|OnTimer|NoMoreOftenThan|OnUnregister|Always|Never.
         See the section "MBean Descriptor Fields" in the JMX specification
         document.
 persistLocationString
     The fully qualified directory name where the MBean should be
         persisted (if appropriate).
 persistFileString
     File name into which the MBean should be persisted.
 persistPeriodNumber
     Frequency of persist cycle in seconds, for OnTime and
         NoMoreOftenThan PersistPolicy
 currencyTimeLimitNumber
     How long cached value is valid: &lt;0 never, =0 always,
         &gt;0 seconds.
 logString
     t: log all notifications, f: log no notifications.
 logfileString
     Fully qualified filename to log events to.
 visibilityNumber
     1-4 where 1: always visible 4: rarely visible.
 exportString
     Name to be used to export/expose this MBean so that it is
         findable by other JMX Agents.
 presentationStringString
     XML formatted string to allow presentation of data to be
         associated with the MBean.
 
 

 

 The default descriptor is: name=className,descriptorType="mbean", displayName=className,
  persistPolicy="never",log="F",visibility="1"
 If the descriptor does not contain all these fields, they will be added with these default values.

 

**Note:** because of inconsistencies in previous versions of
 this specification, it is recommended not to use negative or zero
 values for currencyTimeLimit.  To indicate that a
 cached value is never valid, omit the
 currencyTimeLimit field.  To indicate that it is
 always valid, use a very large number for this field.

**返回**

- the MBean descriptor.

**异常**

- **MBeanException** — Wraps a distributed communication Exception.
- **RuntimeOperationsException** — a `RuntimeException` occurred while getting the descriptor.

**参见**

- #setMBeanDescriptor
