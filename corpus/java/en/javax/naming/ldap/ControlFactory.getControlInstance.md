---
id: "java-en-function-controlfactory-getcontrolinstance"
language: "java"
lang: "en"
category: "function"
name: "ControlFactory.getControlInstance"
signature: "public abstract Control getControlInstance(Control ctl) throws NamingException"
title: "ControlFactory.getControlInstance"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/ControlFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ControlFactory.getControlInstance

```java
public abstract Control getControlInstance(Control ctl) throws NamingException
```

Creates a control using this control factory.

 The factory is used by the service provider to return controls
 that it reads from the LDAP protocol as specialized control classes.
 Without this mechanism, the provider would be returning
 controls that only contained data in BER encoded format.

 Typically, `ctl` is a "basic" control containing
 BER encoded data. The factory is used to create a specialized
 control implementation, usually by decoding the BER encoded data,
 that provides methods to access that data in a type-safe and friendly
 manner.
 

 For example, a factory might use the BER encoded data in
 basic control and return an instance of a VirtualListReplyControl.

 If this factory cannot create a control using the argument supplied,
 it should return null.
 A factory should only throw an exception if it is sure that
 it is the only intended factory and that no other control factories
 should be tried. This might happen, for example, if the BER data
 in the control does not match what is expected of a control with
 the given OID. Since this method throws `NamingException`,
 any other internally generated exception that should be propagated
 must be wrapped inside a `NamingException`.

**参数**

- **ctl** — A non-null control.

**返回**

- A possibly null Control.

**异常**

- **NamingException** — If `ctl` contains invalid data that prevents it from being used to create a control. A factory should only throw an exception if it knows how to produce the control (identified by the OID) but is unable to because of, for example invalid BER data.
