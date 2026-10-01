---
id: "java-en-function-javax-management-modelmbean-modelmbeannotificationinfo"
language: "java"
lang: "en"
category: "function"
name: "javax.management.modelmbean.ModelMBeanNotificationInfo"
title: "ModelMBeanNotificationInfo"
directive: "type"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanNotificationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanNotificationInfo

The ModelMBeanNotificationInfo object describes a notification emitted
 by a ModelMBean.
 It is a subclass of MBeanNotificationInfo with the addition of an
 associated Descriptor and an implementation of the Descriptor interface.

 
 The fields in the descriptor are defined, but not limited to, the following.
 Note that when the Type in this table is Number, a String that is the decimal
 representation of a Long can also be used.

 
 ModelMBeanNotificationInfo Fields
 
 NameTypeMeaning
 
 
 nameString
     Notification name.
 descriptorTypeString
     Must be "notification".
 severityNumber
     0-6 where 0: unknown; 1: non-recoverable;
         2: critical, failure; 3: major, severe;
         4: minor, marginal, error; 5: warning;
         6: normal, cleared, informative
 messageIDString
     Unique key for message text (to allow translation, analysis).
 messageTextString
     Text of notification.
 logString
     T - log message, F - do not log message.
 logfileString
     fully qualified file name appropriate for operating system.
 visibilityNumber
     1-4 where 1: always visible 4: rarely visible.
 presentationStringString
     XML formatted string to allow presentation of data.
 
 

 

The default descriptor contains the name, descriptorType,
 displayName and severity(=6) fields.  The default value of the name
 and displayName fields is the name of the Notification class (as
 specified by the name parameter of the
 ModelMBeanNotificationInfo constructor).

 

The **serialVersionUID** of this class is -7445681389570207141L.

> *Since 1.5*
