---
id: "java-en-function-javax-management-monitor-gaugemonitor"
language: "java"
lang: "en"
category: "function"
name: "javax.management.monitor.GaugeMonitor"
title: "GaugeMonitor"
directive: "type"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/GaugeMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GaugeMonitor

Defines a monitor MBean designed to observe the values of a gauge attribute.

 

 A gauge monitor observes an attribute that is continuously
 variable with time. A gauge monitor sends notifications as
 follows:

 

 
-  if the attribute value is increasing and becomes equal to or
 greater than the high threshold value, a `THRESHOLD_HIGH_VALUE_EXCEEDED threshold high
 notification` is sent. The notify high flag must be set to
 true.

 
Subsequent crossings of the high threshold value do not cause
 further notifications unless the attribute value becomes equal to
 or less than the low threshold value.

 
-  if the attribute value is decreasing and becomes equal to or
 less than the low threshold value, a `THRESHOLD_LOW_VALUE_EXCEEDED threshold low
 notification` is sent. The notify low flag must be set to
 true.

 
Subsequent crossings of the low threshold value do not cause
 further notifications unless the attribute value becomes equal to
 or greater than the high threshold value.

 

 This provides a hysteresis mechanism to avoid repeated triggering
 of notifications when the attribute value makes small oscillations
 around the high or low threshold value.

 

 If the gauge difference mode is used, the value of the derived
 gauge is calculated as the difference between the observed gauge
 values for two successive observations.

 
The derived gauge value (V[t]) is calculated using the following method:
 
 
- V[t] = gauge[t] - gauge[t-GP]
 

 This implementation of the gauge monitor requires the observed
 attribute to be of the type integer or floating-point
 (Byte, Integer, Short,
 Long, Float, Double).

> *Since 1.5*
