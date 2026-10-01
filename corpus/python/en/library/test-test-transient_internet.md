---
id: "python-en-function-test-transient_internet"
language: "python"
lang: "en"
category: "function"
name: "transient_internet"
signature: "transient_internet(resource_name, *, timeout=30.0, errnos=())"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.transient_internet"
license: "PSF"
updated: "2026-10-01"
---

# transient_internet

A context manager that raises `~test.support.ResourceDenied` when
various issues with the internet connection manifest themselves as
exceptions.
