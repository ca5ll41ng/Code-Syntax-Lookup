---
id: "java-en-function-javax-naming-ldap-ldapreferralexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ldap.LdapReferralException"
title: "LdapReferralException"
directive: "type"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapReferralException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapReferralException

This abstract class is used to represent an LDAP referral exception.
 It extends the base `ReferralException` by providing a
 `getReferralContext()` method that accepts request controls.
 LdapReferralException is an abstract class. Concrete implementations of it
 determine its synchronization and serialization properties.

 A `Control[]` array passed as a parameter to
 the `getReferralContext()` method is owned by the caller.
 The service provider will not modify the array or keep a reference to it,
 although it may keep references to the individual `Control` objects
 in the array.

> *Since 1.3*
