---
id: "java-en-function-javax-naming-ldap-ldapcontext"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ldap.LdapContext"
title: "LdapContext"
directive: "type"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapContext

This interface represents a context in which you can perform
 operations with LDAPv3-style controls and perform LDAPv3-style
 extended operations.

 For applications that do not require such controls or extended
 operations, the more generic `javax.naming.directory.DirContext`
 should be used instead.

 Usage Details About Controls

 This interface provides support for LDAP v3 controls.
 At a high level, this support allows a user
 program to set request controls for LDAP operations that are executed
 in the course of the user program's invocation of
 `Context`/`DirContext`
 methods, and read response controls resulting from LDAP operations.
 At the implementation level, there are some details that developers of
 both the user program and service providers need to understand in order
 to correctly use request and response controls.

 Request Controls
 

 There are two types of request controls:
 
 
- Request controls that affect how a connection is created
 
- Request controls that affect context methods
 

 The former is used whenever a connection needs to be established or
 re-established with an LDAP server. The latter is used when all other
 LDAP operations are sent to the LDAP server.  The reason why a
 distinction between these two types of request controls is necessary
 is because JNDI is a high-level API that does not deal directly with
 connections.  It is the job of service providers to do any necessary
 connection management. Consequently, a single
 connection may be shared by multiple context instances, and a service provider
 is free to use its own algorithms to conserve connection and network
 usage. Thus, when a method is invoked on the context instance, the service
 provider might need to do some connection management in addition to
 performing the corresponding LDAP operations. For connection management,
 it uses the connection request controls, while for the normal
 LDAP operations, it uses the context request controls.

Unless explicitly qualified, the term "request controls" refers to
 context request controls.

 Context Request Controls
 There are two ways in which a context instance gets its request controls:
 
 
- ldapContext.newInstance(**reqCtls**)
 
- ldapContext.setRequestControls(**reqCtls**)
 

 where `ldapContext` is an instance of `LdapContext`.
 Specifying `null` or an empty array for `reqCtls`
 means no request controls.
 `newInstance()` creates a new instance of a context using
 `reqCtls`, while `setRequestControls()`
 updates an existing context instance's request controls to `reqCtls`.
 

 Unlike environment properties, request controls of a context instance
 are not inherited by context instances that are derived from
 it.  Derived context instances have `null` as their context
 request controls.  You must set the request controls of a derived context
 instance explicitly using `setRequestControls()`.
 

 A context instance's request controls are retrieved using
 the method `getRequestControls()`.

 Connection Request Controls
 There are three ways in which connection request controls are set:
 
 
- 
 new InitialLdapContext(env, **connCtls**)
 
- refException.getReferralContext(env, **connCtls**)
 
- ldapContext.reconnect(**connCtls**);
 

 where `refException` is an instance of
 `LdapReferralException`, and `ldapContext` is an
 instance of `LdapContext`.
 Specifying `null` or an empty array for `connCtls`
 means no connection request controls.
 

 Like environment properties, connection request controls of a context
 are inherited by contexts that are derived from it.
 Typically, you initialize the connection request controls using the
 `InitialLdapContext` constructor or
 `LdapReferralContext.getReferralContext()`. These connection
 request controls are inherited by contexts that share the same
 connection--that is, contexts derived from the initial or referral
 contexts.
 

 Use `reconnect()` to change the connection request controls of
 a context.
 Invoking `ldapContext.reconnect()` affects only the
 connection used by `ldapContext` and any new contexts instances that are
 derived form `ldapContext`. Contexts that previously shared the
 connection with `ldapContext` remain unchanged. That is, a context's
 connection request controls must be explicitly changed and is not
 affected by changes to another context's connection request
 controls.
 

 A context instance's connection request controls are retrieved using
 the method `getConnectControls()`.

 Service Provider Requirements

 A service provider supports connection and context request controls
 in the following ways.  Context request controls must be associated on
 a per context instance basis while connection request controls must be
 associated on a per connection instance basis.  The service provider
 must look for the connection request controls in the environment
 property "java.naming.ldap.control.connect" and pass this environment
 property on to context instances that it creates.

 Response Controls

 The method `LdapContext.getResponseControls()` is used to
 retrieve the response controls generated by LDAP operations executed
 as the result of invoking a `Context`/`DirContext`
 operation. The result is all of the responses controls generated
 by the underlying LDAP operations, including any implicit reconnection.
 To get only the reconnection response controls,
 use `reconnect()` followed by `getResponseControls()`.

 Parameters

 A `Control[]` array
 passed as a parameter to any method is owned by the caller.
 The service provider will not modify the array or keep a reference to it,
 although it may keep references to the individual `Control` objects
 in the array.
 A `Control[]` array returned by any method is immutable, and may
 not subsequently be modified by either the caller or the service provider.

**参见**

- InitialLdapContext
- LdapReferralException#getReferralContext(java.util.Hashtable,javax.naming.ldap.Control[])

> *Since 1.3*
