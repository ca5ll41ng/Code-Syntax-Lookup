---
id: "python-en-function-email-headerregistry-headerregistry-base_class-baseheader"
language: "python"
lang: "en"
category: "function"
name: "HeaderRegistry(base_class=BaseHeader, \\"
directive: "class"
module: "email.headerregistry"
source_url: "https://docs.python.org/3/library/email.headerregistry.html#email.headerregistry.HeaderRegistry(base_class=BaseHeader, \\"
license: "PSF"
updated: "2026-10-01"
---

# HeaderRegistry(base_class=BaseHeader, \

This is the factory used by `~email.policy.EmailPolicy` by default.
`HeaderRegistry` builds the class used to create a header instance
dynamically, using *base_class* and a specialized class retrieved from a
registry that it holds.  When a given header name does not appear in the
registry, the class specified by *default_class* is used as the specialized
class.  When *use_default_map* is `True` (the default), the standard
mapping of header names to classes is copied in to the registry during
initialization.  *base_class* is always the last class in the generated
class's `~type.__bases__` list.

The default mappings are:

  :subject:                   UniqueUnstructuredHeader
  :date:                      UniqueDateHeader
  :resent-date:               DateHeader
  :orig-date:                 UniqueDateHeader
  :sender:                    UniqueSingleAddressHeader
  :resent-sender:             SingleAddressHeader
  :to:                        UniqueAddressHeader
  :resent-to:                 AddressHeader
  :cc:                        UniqueAddressHeader
  :resent-cc:                 AddressHeader
  :bcc:                       UniqueAddressHeader
  :resent-bcc:                AddressHeader
  :from:                      UniqueAddressHeader
  :resent-from:               AddressHeader
  :reply-to:                  UniqueAddressHeader
  :mime-version:              MIMEVersionHeader
  :content-type:              ContentTypeHeader
  :content-disposition:       ContentDispositionHeader
  :content-transfer-encoding: ContentTransferEncodingHeader
  :message-id:                MessageIDHeader

`HeaderRegistry` has the following methods:

method:: map_to_type(self, name, cls)

method:: __getitem__(name)

method:: __call__(name, value)
