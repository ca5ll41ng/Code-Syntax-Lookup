---
id: "java-en-function-javax-naming-linkref"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.LinkRef"
title: "LinkRef"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/LinkRef.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkRef

This class represents a Reference whose contents is a name, called the link name,
 that is bound to an atomic name in a context.

 The name is a URL, or a name to be resolved relative to the initial
 context, or if the first character of the name is ".", the name
 is relative to the context in which the link is bound.

 Normal resolution of names in context operations always follow links.
 Resolution of the link name itself may cause resolution to pass through
 other  links. This gives rise to the possibility of a cycle of links whose
 resolution could not terminate normally. As a simple means to avoid such
 non-terminating resolutions, service providers may define limits on the
 number of links that may be involved in any single operation invoked
 by the caller.

 A LinkRef contains a single StringRefAddr, whose type is "LinkAddress",
 and whose contents is the link name. The class name field of the
 Reference is that of this (LinkRef) class.

 LinkRef is bound to a name using the normal Context.bind()/rebind(), and
 DirContext.bind()/rebind(). Context.lookupLink() is used to retrieve the link
 itself if the terminal atomic name is bound to a link.

 Many naming systems support a native notion of link that may be used
 within the naming system itself. JNDI does not specify whether
 there is any relationship between such native links and JNDI links.

 A LinkRef instance is not synchronized against concurrent access by multiple
 threads. Threads that need to access a LinkRef instance concurrently should
 synchronize amongst themselves and provide the necessary locking.

**参见**

- LinkException
- LinkLoopException
- MalformedLinkException
- Context#lookupLink

> *Since 1.3*
