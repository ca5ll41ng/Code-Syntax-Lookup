---
id: "java-en-function-javax-net-socketfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.net.SocketFactory"
title: "SocketFactory"
directive: "type"
module: "java.base/javax.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/SocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketFactory

This class creates sockets.  It may be subclassed by other factories,
 which create particular subclasses of sockets and thus provide a general
 framework for the addition of public socket-level functionality.

 

 Socket factories are a simple way to capture a variety of policies
 related to the sockets being constructed, producing such sockets in
 a way which does not require special configuration of the code which
 asks for the sockets:  

      
-  Due to polymorphism of both factories and sockets, different
      kinds of sockets can be used by the same application code just
      by passing it different kinds of factories.

      
-  Factories can themselves be customized with parameters used
      in socket construction.  So for example, factories could be
      customized to return sockets with different networking timeouts
      or security parameters already configured.

      
-  The sockets returned to the application can be subclasses
      of java.net.Socket, so that they can directly expose new APIs
      for features such as compression, security, record marking,
      statistics collection, or firewall tunneling.

      

 

 Factory classes are specified by environment-specific configuration
 mechanisms.  For example, the getDefault method could return
 a factory that was appropriate for a particular application, and a
 framework could use a factory customized to its own purposes.

**参见**

- ServerSocketFactory

> *Since 1.4*
