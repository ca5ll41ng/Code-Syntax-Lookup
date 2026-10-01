---
id: "java-en-function-javax-management-remote-jmxconnectionnotification"
language: "java"
lang: "en"
category: "function"
name: "javax.management.remote.JMXConnectionNotification"
title: "JMXConnectionNotification"
directive: "type"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectionNotification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectionNotification

Notification emitted when a client connection is opened or
 closed or when notifications are lost.  These notifications are
 sent by connector servers (instances of `JMXConnectorServer`)
 and by connector clients (instances of `JMXConnector`).  For
 certain connectors, a session can consist of a sequence of
 connections.  Connection-opened and connection-closed notifications
 will be sent for each one.

 

The notification type is one of the following:

 
 JMXConnectionNotification Types

 
 
 Type
 Meaning
 
 

 
 
 jmx.remote.connection.opened
 A new client connection has been opened.
 

 
 jmx.remote.connection.closed
 A client connection has been closed.
 

 
 jmx.remote.connection.failed
 A client connection has failed unexpectedly.
 

 
 jmx.remote.connection.notifs.lost
 A client connection has potentially lost notifications.  This
 notification only appears on the client side.
 
 
 

 

The timeStamp of the notification is a time value
 (consistent with `currentTimeMillis`) indicating
 when the notification was constructed.

> *Since 1.5*
