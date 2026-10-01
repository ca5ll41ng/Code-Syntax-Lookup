---
id: "java-en-function-javax-management-notification"
language: "java"
lang: "en"
category: "function"
name: "javax.management.Notification"
title: "Notification"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Notification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Notification

The Notification class represents a notification emitted by an
 MBean.  It contains a reference to the source MBean: if the
 notification has been forwarded through the MBean server, and the
 original source of the notification was a reference to the emitting
 MBean object, then the MBean server replaces it by the MBean's
 ObjectName.  If the listener has registered directly with the
 MBean, this is either the object name or a direct reference to the
 MBean.

 

It is strongly recommended that notification senders use the
 object name rather than a reference to the MBean object as the
 source.

 

The **serialVersionUID** of this class is -7516092053498031989L.

> *Since 1.5*
