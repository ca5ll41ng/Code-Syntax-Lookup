---
id: "python-en-function-ssl-get_default_verify_paths"
language: "python"
lang: "en"
category: "function"
name: "get_default_verify_paths"
signature: "get_default_verify_paths()"
directive: "function"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.get_default_verify_paths"
license: "PSF"
updated: "2026-10-01"
---

# get_default_verify_paths

Returns a named tuple with paths to OpenSSL's default cafile and capath.
The paths are the same as used by
`SSLContext.set_default_verify_paths`. The return value is a
`named tuple` `DefaultVerifyPaths`:

* `cafile` - resolved path to cafile or `None` if the file doesn't exist,
* `capath` - resolved path to capath or `None` if the directory doesn't exist,
* `openssl_cafile_env` - OpenSSL's environment key that points to a cafile,
* `openssl_cafile` - hard coded path to a cafile,
* `openssl_capath_env` - OpenSSL's environment key that points to a capath,
* `openssl_capath` - hard coded path to a capath directory

> *Added in 3.4*
