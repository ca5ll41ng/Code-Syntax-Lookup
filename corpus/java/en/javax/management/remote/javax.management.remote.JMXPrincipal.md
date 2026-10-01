---
id: "java-en-function-javax-management-remote-jmxprincipal"
language: "java"
lang: "en"
category: "function"
name: "javax.management.remote.JMXPrincipal"
title: "JMXPrincipal"
directive: "type"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXPrincipal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXPrincipal

The identity of a remote client of the JMX Remote API.

 

Principals such as this JMXPrincipal
 may be associated with a particular Subject
 to augment that Subject with an additional
 identity.  Refer to the `javax.security.auth.Subject`
 class for more information on how to achieve this.
 Authorization decisions can then be based upon
 the Principals associated with a Subject.

**参见**

- java.security.Principal
- javax.security.auth.Subject

> *Since 1.5*
