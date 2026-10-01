---
id: "java-en-function-javax-security-auth-kerberos-kerberosticket"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.kerberos.KerberosTicket"
title: "KerberosTicket"
directive: "type"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket

This class encapsulates a Kerberos ticket and associated
 information as viewed from the client's point of view. It captures all
 information that the Key Distribution Center (KDC) sends to the client
 in the reply message KDC-REP defined in the Kerberos Protocol
 Specification (RFC 4120).
 

 All Kerberos JAAS login modules that authenticate a user to a KDC should
 use this class. Where available, the login module might even read this
 information from a ticket cache in the operating system instead of
 directly communicating with the KDC. During the commit phase of the JAAS
 authentication process, the JAAS login module should instantiate this
 class and store the instance in the private credential set of a
 `javax.security.auth.Subject Subject`.
 

 Note that this class is applicable to both ticket granting tickets and
 other regular service tickets. A ticket granting ticket is just a
 special case of a more generalized service ticket.

 all tickets after logout.

**参见**

- javax.security.auth.Subject
- javax.security.auth.login.LoginContext
- org.ietf.jgss.GSSCredential
- org.ietf.jgss.GSSManager

> *Since 1.4*
