---
id: "java-en-function-javax-management-remote-notificationresult"
language: "java"
lang: "en"
category: "function"
name: "javax.management.remote.NotificationResult"
title: "NotificationResult"
directive: "type"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/NotificationResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationResult

Result of a query for buffered notifications.  Notifications in
 a notification buffer have positive, monotonically increasing
 sequence numbers.  The result of a notification query contains the
 following elements:

 

 
- The sequence number of the earliest notification still in
 the buffer.

 
- The sequence number of the next notification available for
 querying.  This will be the starting sequence number for the next
 notification query.

 
- An array of (Notification,listenerID) pairs corresponding to
 the returned notifications and the listeners they correspond to.

 

 

It is possible for the nextSequenceNumber to be less
 than the earliestSequenceNumber.  This signifies that
 notifications between the two might have been lost.

> *Since 1.5*
