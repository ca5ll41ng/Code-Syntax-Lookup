---
id: "java-en-function-javax-security-auth-kerberos-keytab"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.kerberos.KeyTab"
title: "KeyTab"
directive: "type"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KeyTab.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyTab

This class encapsulates a keytab file.
 

 A Kerberos JAAS login module that obtains long term secret keys from a
 keytab file should use this class. The login module will store
 an instance of this class in the private credential set of a
 `javax.security.auth.Subject Subject` during the commit phase of the
 authentication process.
 

 If a `KeyTab` object is obtained from `getUnboundInstance`
 or `getUnboundInstance`, it is unbound and thus can be
 used by any service principal. Otherwise, if it's obtained from
 `getInstance` or
 `getInstance`, it is bound to the
 specific service principal and can only be used by it.
 

 Please note the constructors `getInstance` and
 `getInstance` were created when there was no support
 for unbound keytabs. These methods should not be used anymore. An object
 created with either of these methods are considered to be bound to an
 unknown principal, which means, its `isBound` returns true and
 `getPrincipal` returns null.
 

 The keytab file format is described at
 
 http://www.ioplex.com/utilities/keytab.txt.

> *Since 1.7*
