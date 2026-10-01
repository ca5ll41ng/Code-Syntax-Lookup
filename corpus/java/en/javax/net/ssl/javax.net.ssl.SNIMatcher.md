---
id: "java-en-function-javax-net-ssl-snimatcher"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.SNIMatcher"
title: "SNIMatcher"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SNIMatcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SNIMatcher

Instances of this class represent a matcher that performs match
 operations on an `SNIServerName` instance.
 

 Servers can use Server Name Indication (SNI) information to decide if
 specific `SSLSocket` or `SSLEngine` instances should accept
 a connection.  For example, when multiple "virtual" or "name-based"
 servers are hosted on a single underlying network address, the server
 application can use SNI information to determine whether this server is
 the exact server that the client wants to access.  Instances of this
 class can be used by a server to verify the acceptable server names of
 a particular type, such as host names.
 

 `SNIMatcher` objects are immutable.  Subclasses should not provide
 methods that can change the state of an instance once it has been created.

**参见**

- SNIServerName
- SNIHostName
- SSLParameters#getSNIMatchers()
- SSLParameters#setSNIMatchers(Collection)

> *Since 1.8*
