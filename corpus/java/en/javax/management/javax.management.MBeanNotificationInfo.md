---
id: "java-en-function-javax-management-mbeannotificationinfo"
language: "java"
lang: "en"
category: "function"
name: "javax.management.MBeanNotificationInfo"
title: "MBeanNotificationInfo"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanNotificationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanNotificationInfo

The `MBeanNotificationInfo` class is used to describe the
 characteristics of the different notification instances
 emitted by an MBean, for a given Java class of notification.
 If an MBean emits notifications that can be instances of different Java classes,
 then the metadata for that MBean should provide an `MBeanNotificationInfo`
 object for each of these notification Java classes.

 

Instances of this class are immutable.  Subclasses may be
 mutable but this is not recommended.

 

This class extends `javax.management.MBeanFeatureInfo`
 and thus provides `name` and `description` fields.
 The `name` field should be the fully qualified Java class name of
 the notification objects described by this class.

 

The `getNotifTypes` method returns an array of
 strings containing the notification types that the MBean may
 emit. The notification type is a dot-notation string which
 describes what the emitted notification is about, not the Java
 class of the notification.  A single generic notification class can
 be used to send notifications of several types.  All of these types
 are returned in the string array result of the
 `getNotifTypes` method.

> *Since 1.5*
