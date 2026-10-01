---
id: "java-en-function-javax-net-ssl-sslsession"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.SSLSession"
title: "SSLSession"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession

In SSL, sessions are used to describe an ongoing relationship between
 two entities.  Each SSL connection involves one session at a time, but
 that session may be used on many connections between those entities,
 simultaneously or sequentially.  The session used on a connection may
 also be replaced by a different session.  Sessions are created, or
 rejoined, as part of the SSL handshaking protocol. Sessions may be
 invalidated due to policies affecting security or resource usage,
 or by an application explicitly calling `invalidate`.
 Session management policies are typically used to tune performance.

 

 In addition to the standard session attributes, SSL sessions expose
 these read-only attributes:  

      
-  Peer Identity.  Sessions are between a particular
      client and a particular server.  The identity of the peer may
      have been established as part of session setup.  Peers are
      generally identified by X.509 certificate chains.

      
-  Cipher Suite Name.  Cipher suites describe the
      kind of cryptographic protection that's used by connections
      in a particular session.

      
-  Peer Host.  All connections in a session are
      between the same two hosts.  The address of the host on the other
      side of the connection is available.

      

 

 Sessions may be explicitly invalidated.  Invalidation may also
 be done implicitly, when faced with certain kinds of errors.

> *Since 1.4*
