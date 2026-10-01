---
id: "python-zh-function-wsgiref-shift_path_info"
language: "python"
lang: "zh"
category: "function"
name: "shift_path_info"
signature: "shift_path_info(environ)"
directive: "function"
module: "wsgiref"
source_url: "https://docs.python.org/zh-cn/3/library/wsgiref.html#wsgiref.shift_path_info"
license: "PSF"
updated: "2026-10-01"
---

# shift_path_info

Shift a single name from `PATH_INFO` to `SCRIPT_NAME` and return the name.
The *environ* dictionary is *modified* in-place; use a copy if you need to keep
the original `PATH_INFO` or `SCRIPT_NAME` intact.

如果 ``PATH_INFO`` 中没有剩余的路径节，则返回 ``None``。

Typically, this routine is used to process each portion of a request URI path,
for example to treat the path as a series of dictionary keys. This routine
modifies the passed-in environment to make it suitable for invoking another WSGI
application that is located at the target URI. For example, if there is a WSGI
application at `/foo`, and the request URI path is `/foo/bar/baz`, and the
WSGI application at `/foo` calls `shift_path_info`, it will receive the
string "bar", and the environment will be updated to be suitable for passing to
a WSGI application at `/foo/bar`.  That is, `SCRIPT_NAME` will change from
`/foo` to `/foo/bar`, and `PATH_INFO` will change from `/bar/baz` to
`/baz`.

When `PATH_INFO` is just a "/", this routine returns an empty string and
appends a trailing slash to `SCRIPT_NAME`, even though empty path segments are
normally ignored, and `SCRIPT_NAME` doesn't normally end in a slash.  This is
intentional behavior, to ensure that an application can tell the difference
between URIs ending in `/x` from ones ending in `/x/` when using this
routine to do object traversal.
