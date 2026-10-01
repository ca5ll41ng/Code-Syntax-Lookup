---
id: "python-en-function-email-headerregistry-parameterizedmimeheader"
language: "python"
lang: "en"
category: "function"
name: "ParameterizedMIMEHeader"
directive: "class"
module: "email.headerregistry"
source_url: "https://docs.python.org/3/library/email.headerregistry.html#email.headerregistry.ParameterizedMIMEHeader"
license: "PSF"
updated: "2026-10-01"
---

# ParameterizedMIMEHeader

MIME headers all start with the prefix 'Content-'.  Each specific header has
a certain value, described under the class for that header.  Some can
also take a list of supplemental parameters, which have a common format.
This class serves as a base for all the MIME headers that take parameters.

attribute:: params
