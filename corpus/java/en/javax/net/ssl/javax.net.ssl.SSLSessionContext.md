---
id: "java-en-function-javax-net-ssl-sslsessioncontext"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.SSLSessionContext"
title: "SSLSessionContext"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSessionContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSessionContext

A `SSLSessionContext` represents a set of
 `SSLSession`s associated with a single entity. For example,
 it could be associated with a server or client who participates in many
 sessions concurrently.
 

 Not all environments will contain session contexts.  For example, stateless
 session resumption.
 

 Session contexts may not contain all sessions. For example, stateless
 sessions are not stored in the session context.
 

 There are `SSLSessionContext` parameters that affect how
 sessions are stored:
 
      
- Sessions can be set to expire after a specified
      time limit.
      
- The number of sessions that can be stored in context
      can be limited.
 

 A session can be retrieved based on its session id, and all session id's
 in a `SSLSessionContext` can be listed.

**参见**

- SSLSession

> *Since 1.4*
