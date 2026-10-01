---
id: "java-en-function-javax-naming-ldap-control"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ldap.Control"
title: "Control"
directive: "type"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/Control.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Control

This interface represents an LDAPv3 control as defined in
 RFC 2251.

 The LDAPv3 protocol uses controls to send and receive additional data
 to affect the behavior of predefined operations.
 Controls can be sent along with any LDAP operation to the server.
 These are referred to as request controls. For example, a
 "sort" control can be sent with an LDAP search operation to
 request that the results be returned in a particular order.
 Solicited and unsolicited controls can also be returned with
 responses from the server. Such controls are referred to as
 response controls. For example, an LDAP server might
 define a special control to return change notifications.

 This interface is used to represent both request and response controls.

**参见**

- ControlFactory

> *Since 1.3*
