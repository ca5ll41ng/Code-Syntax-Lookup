---
id: "java-en-function-javax-management-mbeaninfo"
language: "java"
lang: "en"
category: "function"
name: "javax.management.MBeanInfo"
title: "MBeanInfo"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanInfo

Describes the management interface exposed by an MBean; that is,
 the set of attributes and operations which are available for
 management operations.  Instances of this class are immutable.
 Subclasses may be mutable but this is not recommended.

 Usually the `MBeanInfo` for any given MBean does
 not change over the lifetime of that MBean.  Dynamic MBeans can change their
 `MBeanInfo` and in that case it is recommended that they emit a `Notification` with a `getType() type` of `"jmx.mbean.info.changed"` and a `getUserData()
 userData` that is the new `MBeanInfo`.  This is not required, but
 provides a conventional way for clients of the MBean to discover the change.
 See also the immutableInfo and
 infoTimeout fields in the `MBeanInfo` `Descriptor`.

 

The contents of the `MBeanInfo` for a Dynamic MBean
 are determined by its `getMBeanInfo
 getMBeanInfo` method.  This includes Open MBeans and Model
 MBeans, which are kinds of Dynamic MBeans.

 

The contents of the `MBeanInfo` for a Standard MBean
 are determined by the MBean server as follows:

 

 
- `getClassName` returns the Java class name of the MBean
 object;

 
- `getConstructors` returns the list of all public
 constructors in that object;

 
- `getAttributes` returns the list of all attributes
 whose existence is deduced from the presence in the MBean interface
 of a getName, isName, or
 setName method that conforms to the conventions
 for Standard MBeans;

 
- `getOperations` returns the list of all methods in
 the MBean interface that do not represent attributes;

 
- `getNotifications` returns an empty array if the MBean
 does not implement the `NotificationBroadcaster` interface,
 otherwise the result of calling `getNotificationInfo` on it;

 
- `getDescriptor` returns a descriptor containing the contents
 of any descriptor annotations in the MBean interface (see
 `64;DescriptorKey`).

 

 

The description returned by `getDescription` and the
 descriptions of the contained attributes and operations are not specified.

 

The remaining details of the `MBeanInfo` for a
 Standard MBean are not specified.  This includes the description of
 any contained constructors, and notifications; the names
 of parameters to constructors and operations; and the descriptions of
 constructor parameters.

> *Since 1.5*
