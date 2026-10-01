---
id: "java-en-function-javax-management-monitor-monitornotification"
language: "java"
lang: "en"
category: "function"
name: "javax.management.monitor.MonitorNotification"
title: "MonitorNotification"
directive: "type"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/MonitorNotification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MonitorNotification

Provides definitions of the notifications sent by monitor MBeans.
 

 The notification source and a set of parameters concerning the monitor MBean's state
 need to be specified when creating a new object of this class.

 The list of notifications fired by the monitor MBeans is the following:

 
 
- Common to all kind of monitors:
     
     
- The observed object is not registered in the MBean server.
     
- The observed attribute is not contained in the observed object.
     
- The type of the observed attribute is not correct.
     
- Any exception (except the cases described above) occurs when trying to get the value of the observed attribute.
     

 
- Common to the counter and the gauge monitors:
     
     
- The threshold high or threshold low are not of the same type as the gauge (gauge monitors).
     
- The threshold or the offset or the modulus are not of the same type as the counter (counter monitors).
     

 
- Counter monitors only:
     
     
- The observed attribute has reached the threshold value.
     

 
- Gauge monitors only:
     
     
- The observed attribute has exceeded the threshold high value.
     
- The observed attribute has exceeded the threshold low value.
     

 
- String monitors only:
     
     
- The observed attribute has matched the "string to compare" value.
     
- The observed attribute has differed from the "string to compare" value.

> *Since 1.5*
