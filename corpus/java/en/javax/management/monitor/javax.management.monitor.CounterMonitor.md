---
id: "java-en-function-javax-management-monitor-countermonitor"
language: "java"
lang: "en"
category: "function"
name: "javax.management.monitor.CounterMonitor"
title: "CounterMonitor"
directive: "type"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/CounterMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CounterMonitor

Defines a monitor MBean designed to observe the values of a counter
 attribute.

 

 A counter monitor sends a `THRESHOLD_VALUE_EXCEEDED threshold
 notification` when the value of the counter reaches or exceeds a
 threshold known as the comparison level.  The notify flag must be
 set to true.

 

 In addition, an offset mechanism enables particular counting
 intervals to be detected.  If the offset value is not zero,
 whenever the threshold is triggered by the counter value reaching a
 comparison level, that comparison level is incremented by the
 offset value.  This is regarded as taking place instantaneously,
 that is, before the count is incremented.  Thus, for each level,
 the threshold triggers an event notification every time the count
 increases by an interval equal to the offset value.

 

 If the counter can wrap around its maximum value, the modulus
 needs to be specified.  The modulus is the value at which the
 counter is reset to zero.

 

 If the counter difference mode is used, the value of the
 derived gauge is calculated as the difference between the observed
 counter values for two successive observations.  If this difference
 is negative, the value of the derived gauge is incremented by the
 value of the modulus.  The derived gauge value (V[t]) is calculated
 using the following method:

 
 
- if (counter[t] - counter[t-GP]) is positive then
 V[t] = counter[t] - counter[t-GP]
 
- if (counter[t] - counter[t-GP]) is negative then
 V[t] = counter[t] - counter[t-GP] + MODULUS
 

 This implementation of the counter monitor requires the observed
 attribute to be of the type integer (Byte,
 Integer, Short, Long).

> *Since 1.5*
