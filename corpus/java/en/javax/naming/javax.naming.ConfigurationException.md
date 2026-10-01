---
id: "java-en-function-javax-naming-configurationexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ConfigurationException"
title: "ConfigurationException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ConfigurationException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConfigurationException

This exception is thrown when there is a configuration problem.
 This can arise when installation of a provider was
 not done correctly, or if there are configuration problems with the
 server, or if configuration information required to access
 the provider or service is malformed or missing.
 For example, a request to use SSL as the security protocol when
 the service provider software was not configured with the SSL
 component would cause such an exception. Another example is
 if the provider requires that a URL be specified as one of the
 environment properties but the client failed to provide it.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

> *Since 1.3*
