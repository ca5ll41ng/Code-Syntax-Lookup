---
id: "java-en-function-javax-management-remote-jmxconnectorserver"
language: "java"
lang: "en"
category: "function"
name: "javax.management.remote.JMXConnectorServer"
title: "JMXConnectorServer"
directive: "type"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServer

Superclass of every connector server.  A connector server is
 attached to an MBean server.  It listens for client connection
 requests and creates a connection for each one.

 

A connector server is associated with an MBean server either by
 registering it in that MBean server, or by passing the MBean server
 to its constructor.

 

A connector server is inactive when created.  It only starts
 listening for client connections when the `start() start`
 method is called.  A connector server stops listening for client
 connections when the `stop() stop` method is called or when
 the connector server is unregistered from its MBean server.

 

Stopping a connector server does not unregister it from its
 MBean server.  A connector server once stopped cannot be
 restarted.

 

Each time a client connection is made or broken, a notification
 of class `JMXConnectionNotification` is emitted.

> *Since 1.5*
