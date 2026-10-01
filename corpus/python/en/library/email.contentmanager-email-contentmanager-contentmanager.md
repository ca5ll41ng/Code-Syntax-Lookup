---
id: "python-en-function-email-contentmanager-contentmanager"
language: "python"
lang: "en"
category: "function"
name: "ContentManager"
signature: "ContentManager()"
directive: "class"
module: "email.contentmanager"
source_url: "https://docs.python.org/3/library/email.contentmanager.html#email.contentmanager.ContentManager"
license: "PSF"
updated: "2026-10-01"
---

# ContentManager

Base class for content managers.  Provides the standard registry mechanisms
to register converters between MIME content and other representations, as
well as the `get_content` and `set_content` dispatch methods.

method:: get_content(msg, *args, **kw)

method:: set_content(msg, obj, *args, **kw)

method:: add_get_handler(key, handler)

method:: add_set_handler(typekey, handler)
