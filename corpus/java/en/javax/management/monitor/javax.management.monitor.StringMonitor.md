---
id: "java-en-function-javax-management-monitor-stringmonitor"
language: "java"
lang: "en"
category: "function"
name: "javax.management.monitor.StringMonitor"
title: "StringMonitor"
directive: "type"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/StringMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringMonitor

Defines a monitor MBean designed to observe the values of a string
 attribute.
 

 A string monitor sends notifications as follows:
 
 
-  if the attribute value matches the string to compare value,
      a `STRING_TO_COMPARE_VALUE_MATCHED
      match notification` is sent.
      The notify match flag must be set to true.
      
Subsequent matchings of the string to compare values do not
      cause further notifications unless
      the attribute value differs from the string to compare value.
 
-  if the attribute value differs from the string to compare value,
      a `STRING_TO_COMPARE_VALUE_DIFFERED
      differ notification` is sent.
      The notify differ flag must be set to true.
      
Subsequent differences from the string to compare value do
      not cause further notifications unless
      the attribute value matches the string to compare value.

> *Since 1.5*
