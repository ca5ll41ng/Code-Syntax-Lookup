---
id: "java-en-function-javax-management-remote-jmxauthenticator"
language: "java"
lang: "en"
category: "function"
name: "javax.management.remote.JMXAuthenticator"
title: "JMXAuthenticator"
directive: "type"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXAuthenticator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXAuthenticator

Interface to define how remote credentials are converted into a
 JAAS Subject.  This interface is used by the RMI Connector Server,
 and can be used by other connector servers.

 

The user-defined authenticator instance is passed to the
 connector server in the environment map as the value of the
 attribute `AUTHENTICATOR`.  For connector
 servers that use only this authentication system, if this attribute
 is not present or its value is null then no user
 authentication will be performed and full access to the methods
 exported by the MBeanServerConnection object will be
 allowed.

 

If authentication is successful then an authenticated
 `Subject subject` filled in with its associated
 `Principal principals` is returned. Authorization checks
 will be then performed based on the given set of principals.

> *Since 1.5*
