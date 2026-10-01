---
id: "java-en-function-javax-security-auth-subject"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.Subject"
title: "Subject"
directive: "type"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/Subject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subject

A `Subject` represents a grouping of related information
 for a single entity, such as a person.
 Such information includes the Subject's identities as well as
 its security-related attributes
 (passwords and cryptographic keys, for example).

 

 Subjects may potentially have multiple identities.
 Each identity is represented as a `Principal`
 within the `Subject`.  Principals simply bind names to a
 `Subject`.  For example, a `Subject` that happens
 to be a person, Alice, might have two Principals:
 one which binds "Alice Bar", the name on her driver license,
 to the `Subject`, and another which binds,
 "999-99-9999", the number on her student identification card,
 to the `Subject`.  Both Principals refer to the same
 `Subject` even though each has a different name.

 

 A `Subject` may also own security-related attributes,
 which are referred to as credentials.
 Sensitive credentials that require special protection, such as
 private cryptographic keys, are stored within a private credential
 `Set`.  Credentials intended to be shared, such as
 public key certificates or Kerberos server tickets are stored
 within a public credential `Set`.

 

 To retrieve all the Principals associated with a `Subject`,
 invoke the `getPrincipals` method.  To retrieve
 all the public or private credentials belonging to a `Subject`,
 invoke the `getPublicCredentials` method or
 `getPrivateCredentials` method, respectively.
 To modify the returned `Set` of Principals and credentials,
 use the methods defined in the `Set` class.
 For example:
 
```

      Subject subject;
      Principal principal;
      Object credential;

      // add a Principal and credential to the Subject
      subject.getPrincipals().add(principal);
      subject.getPublicCredentials().add(credential);
 
```

 

 This `Subject` class implements `Serializable`.
 While the Principals associated with the `Subject` are serialized,
 the credentials associated with the `Subject` are not.
 Note that the `java.security.Principal` class
 does not implement `Serializable`.  Therefore, all concrete
 `Principal` implementations associated with Subjects
 must implement `Serializable`.

 Deprecated Methods and Replacements

 

 The following methods in this class for user-based authorization
 that are dependent on Security Manager APIs are deprecated for removal:
 
     
- `getSubject`
     
- `doAs`
     
- `doAs`
     
- `doAsPrivileged`
     
- `doAsPrivileged`
 

 Methods `current` and `callAs`
 are replacements for these methods, where `current` is equivalent to
 `getSubject(AccessController.getContext())` (as originally specified)
 and `callAs` is similar to `doAs` except that the
 input type and exceptions thrown are slightly different.

 

 A `doAs` or `callAs` call
 binds a `Subject` object to the period of execution of an action,
 and the subject can be retrieved using the `current` method inside
 the action. This subject can be inherited by child threads if they are
 started and terminate within the execution of its parent thread using
 structured concurrency.

**参见**

- java.security.Principal
- java.security.DomainCombiner

> *Since 1.4*
