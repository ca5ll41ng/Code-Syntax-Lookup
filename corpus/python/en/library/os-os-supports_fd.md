---
id: "python-en-function-os-supports_fd"
language: "python"
lang: "en"
category: "function"
name: "supports_fd"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.supports_fd"
license: "PSF"
updated: "2026-10-01"
---

# supports_fd

A `set` object indicating which functions in the
`os` module permit specifying their *path* parameter as an open file
descriptor on the local platform.  Different platforms provide different
features, and the underlying functionality Python uses to accept open file
descriptors as *path* arguments is not available on all platforms Python
supports.

To determine whether a particular function permits specifying an open file
descriptor for its *path* parameter, use the `in` operator on
`supports_fd`. As an example, this expression evaluates to `True` if
`os.chdir` accepts open file descriptors for *path* on your local
platform::

    os.chdir in os.supports_fd

> *Added in 3.3*
