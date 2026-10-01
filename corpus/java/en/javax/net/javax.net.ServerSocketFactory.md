---
id: "java-en-function-javax-net-serversocketfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ServerSocketFactory"
title: "ServerSocketFactory"
directive: "type"
module: "java.base/javax.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ServerSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocketFactory

This class creates server sockets.  It may be subclassed by other
 factories, which create particular types of server sockets.  This
 provides a general framework for the addition of public socket-level
 functionality.  It is the server side analogue of a socket factory,
 and similarly provides a way to capture a variety of policies related
 to the sockets being constructed.

 

 Like socket factories, server Socket factory instances have
 methods used to create sockets. There is also an environment
 specific default server socket factory; frameworks will often use
 their own customized factory.

**参见**

- SocketFactory

> *Since 1.4*
