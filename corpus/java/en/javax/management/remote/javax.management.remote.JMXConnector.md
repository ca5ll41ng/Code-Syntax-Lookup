---
id: "java-en-function-javax-management-remote-jmxconnector"
language: "java"
lang: "en"
category: "function"
name: "javax.management.remote.JMXConnector"
title: "JMXConnector"
directive: "type"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnector

The client end of a JMX API connector.  An object of this type can
 be used to establish a connection to a connector server.

 

A newly-created object of this type is unconnected.  Its `connect connect` method must be called before it can be used.
 However, objects created by `connect(JMXServiceURL, Map)
 JMXConnectorFactory.connect` are already connected.

> *Since 1.5*
