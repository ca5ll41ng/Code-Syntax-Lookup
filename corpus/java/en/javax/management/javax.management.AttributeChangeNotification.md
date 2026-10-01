---
id: "java-en-function-javax-management-attributechangenotification"
language: "java"
lang: "en"
category: "function"
name: "javax.management.AttributeChangeNotification"
title: "AttributeChangeNotification"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/AttributeChangeNotification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeChangeNotification

Provides definitions of the attribute change notifications sent by MBeans.
 

 It's up to the MBean owning the attribute of interest to create and send
 attribute change notifications when the attribute change occurs.
 So the NotificationBroadcaster interface has to be implemented
 by any MBean for which an attribute change is of interest.
 

 Example:
 If an MBean called myMbean needs to notify registered listeners
 when its attribute:
 
      String myString
 
 is modified, myMbean creates and emits the following notification:
 
 new AttributeChangeNotification(myMbean, sequenceNumber, timeStamp, msg,
                                 "myString", "String", oldValue, newValue);

> *Since 1.5*
