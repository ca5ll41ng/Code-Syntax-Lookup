---
id: "python-en-function-email-policy-policy"
language: "python"
lang: "en"
category: "function"
name: "Policy"
signature: "Policy(**kw)"
directive: "class"
module: "email.policy"
source_url: "https://docs.python.org/3/library/email.policy.html#email.policy.Policy"
license: "PSF"
updated: "2026-10-01"
---

# Policy

This is the `abstract base class` for all policy classes.  It provides
default implementations for a couple of trivial methods, as well as the
implementation of the immutability property, the `clone` method, and
the constructor semantics.

The constructor of a policy class can be passed various keyword arguments.
The arguments that may be specified are any non-method properties on this
class, plus any additional non-method properties on the concrete class.  A
value specified in the constructor will override the default value for the
corresponding attribute.

This class defines the following properties, and thus values for the
following may be passed in the constructor of any policy class:

attribute:: max_line_length

attribute:: linesep

attribute:: cte_type

attribute:: raise_on_defect

attribute:: mangle_from_

attribute:: message_factory

attribute:: verify_generated_headers

The following `Policy` method is intended to be called by code using
the email library to create policy instances with custom settings:

method:: clone(**kw)

The remaining `Policy` methods are called by the email package code,
and are not intended to be called by an application using the email package.
A custom policy must implement all of these methods.

method:: handle_defect(obj, defect)

method:: register_defect(obj, defect)

method:: header_max_count(name)

method:: header_source_parse(sourcelines)

method:: header_store_parse(name, value)

method:: header_fetch_parse(name, value)

method:: fold(name, value)

method:: fold_binary(name, value)
