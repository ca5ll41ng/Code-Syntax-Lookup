---
id: "java-en-function-javax-net-ssl-x509keymanager"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.X509KeyManager"
title: "X509KeyManager"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/X509KeyManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509KeyManager

Instances of this interface manage which X509 certificate-based
 key pairs are used to authenticate the local side of a secure
 socket.
 

 During secure socket negotiations, implementations
 call methods in this interface to:
 
 
-  determine the set of aliases that are available for negotiations
      based on the criteria presented,
 
-  select the  best alias based on
      the criteria presented, and
 
-  obtain the corresponding key material for given aliases.
 

 

 Note: the X509ExtendedKeyManager should be used in favor of this
 class.

> *Since 1.4*
