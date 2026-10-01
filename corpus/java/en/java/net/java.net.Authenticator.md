---
id: "java-en-function-java-net-authenticator"
language: "java"
lang: "en"
category: "function"
name: "java.net.Authenticator"
title: "Authenticator"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Authenticator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Authenticator

The class Authenticator represents an object that knows how to obtain
 authentication for a network connection.  Usually, it will do this
 by prompting the user for information.
 

 Applications use this class by overriding `getPasswordAuthentication` in a sub-class. This method will
 typically use the various getXXX() accessor methods to get information
 about the entity requesting authentication. It must then acquire a
 username and password either by interacting with the user or through
 some other non-interactive means. The credentials are then returned
 as a `PasswordAuthentication` return value.
 

 An instance of this concrete sub-class is then registered
 with the system by calling `setDefault`.
 When authentication is required, the system will invoke one of the
 requestPasswordAuthentication() methods which in turn will call the
 getPasswordAuthentication() method of the registered object.
 

 All methods that request authentication have a default implementation
 that fails.

**参见**

- java.net.Authenticator#setDefault(java.net.Authenticator)
- java.net.Authenticator#getPasswordAuthentication()

> *Since 1.2*
