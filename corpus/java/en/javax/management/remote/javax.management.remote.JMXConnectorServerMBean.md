---
id: "java-en-function-javax-management-remote-jmxconnectorservermbean"
language: "java"
lang: "en"
category: "function"
name: "javax.management.remote.JMXConnectorServerMBean"
title: "JMXConnectorServerMBean"
directive: "type"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServerMBean

MBean interface for connector servers.  A JMX API connector server
 is attached to an MBean server, and establishes connections to that
 MBean server for remote clients.

 

A newly-created connector server is inactive, and does
 not yet listen for connections.  Only when its `start start`
 method has been called does it start listening for connections.

> *Since 1.5*
